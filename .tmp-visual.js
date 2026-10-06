const { chromium } = require("playwright-core");
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const URL = "http://localhost:3001";

const probe = () => {
  const section = document.querySelector("#skills");
  const h3s = [...section.querySelectorAll("h3")];
  const rows = h3s.map((h3) => {
    const row = h3.parentElement;
    const grid = h3.nextElementSibling;
    const rr = row.getBoundingClientRect();
    const hr = h3.getBoundingClientRect();
    const gr = grid.getBoundingClientRect();
    const items = [...grid.children].map((it) => {
      const r = it.getBoundingClientRect();
      const tile = it.firstElementChild;
      const tr = tile.getBoundingClientRect();
      const svg = tile.querySelector("svg");
      const sr = svg.getBoundingClientRect();
      const vb = svg.viewBox.baseVal;
      const k = sr.width / vb.width;
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      svg.querySelectorAll("path").forEach((p) => {
        const b = p.getBBox();
        x0 = Math.min(x0, b.x); y0 = Math.min(y0, b.y);
        x1 = Math.max(x1, b.x + b.width); y1 = Math.max(y1, b.y + b.height);
      });
      const name = it.lastElementChild;
      const ns = getComputedStyle(name);
      const ts = getComputedStyle(tile);
      return {
        name: name.textContent,
        top: Math.round(r.top * 10) / 10, left: Math.round(r.left * 10) / 10,
        h: r.height, w: r.width,
        tile: { w: tr.width, h: tr.height, radius: ts.borderRadius, bg: ts.backgroundColor, border: ts.borderColor, bw: ts.borderBottomWidth },
        svgSize: sr.width, ink: { w: (x1 - x0) * k, h: (y1 - y0) * k },
        nameSize: ns.fontSize, nameColor: ns.color, nameWhite: ns.whiteSpace,
      };
    });
    return {
      label: h3.textContent.trim(),
      rowTop: rr.top, rowH: rr.height, rowBottom: rr.bottom,
      labelLeft: hr.left, labelCenterDelta: Math.abs((hr.top + hr.height / 2) - (rr.top + rr.height / 2)),
      gridLeft: gr.left, items,
      divider: getComputedStyle(row).borderBottomWidth + " " + getComputedStyle(row).borderBottomColor,
      align: getComputedStyle(row).alignItems,
    };
  });
  const strip = document.querySelector("#skills .marquee-track");
  const stripTile = strip.querySelector("li span");
  const st = getComputedStyle(strip);
  const sts = getComputedStyle(stripTile);
  return {
    rows,
    strip: { tiles: strip.children.length, anim: st.animationName, dur: st.animationDuration, tileW: stripTile.getBoundingClientRect().width, tileBg: sts.backgroundColor },
    accentVar: getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),
  };
};

(async () => {
  const browser = await chromium.launch({ executablePath: EDGE, headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const consoleIssues = [];
  page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") consoleIssues.push(`${m.type()}: ${m.text()}`); });
  page.on("pageerror", (e) => consoleIssues.push(`pageerror: ${e.message}`));
  page.on("requestfailed", (r) => consoleIssues.push(`requestfailed: ${r.url()} ${r.failure()?.errorText}`));

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.locator("#skills").scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);

  const desktop = await page.evaluate(probe);
  await page.locator("#skills").screenshot({ path: ".tmp-shots/dark.png" });

  // hover check
  const firstItem = page.locator("#skills h3 + div > div").first();
  const before = await firstItem.boundingBox();
  await firstItem.hover();
  await page.waitForTimeout(400);
  const hover = await firstItem.evaluate((el) => {
    const tile = el.firstElementChild, name = el.lastElementChild;
    return { tileBorder: getComputedStyle(tile).borderColor, nameColor: getComputedStyle(name).color, transform: getComputedStyle(tile).transform };
  });
  const after = await firstItem.boundingBox();
  hover.noMovement = before.x === after.x && before.y === after.y;
  await page.mouse.move(0, 0);

  // reduced motion
  const rmCtx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const rmPage = await rmCtx.newPage();
  await rmPage.goto(URL, { waitUntil: "networkidle" });
  await rmPage.locator("#skills").scrollIntoViewIfNeeded();
  const reducedMotion = await rmPage.locator("#skills h3 + div > div span").first().evaluate((el) => getComputedStyle(el).transitionDuration);
  await rmCtx.close();

  // light mode (adds the class the toggle would add; no .light rules exist)
  await page.evaluate(() => document.documentElement.classList.add("light"));
  await page.waitForTimeout(300);
  await page.locator("#skills").screenshot({ path: ".tmp-shots/light.png" });
  await page.evaluate(() => document.documentElement.classList.remove("light"));

  // tablet 800px
  await page.setViewportSize({ width: 800, height: 900 });
  await page.waitForTimeout(800);
  const tablet = await page.evaluate(probe);
  await page.locator("#skills").screenshot({ path: ".tmp-shots/tablet.png" });

  // mobile 400px
  await page.setViewportSize({ width: 400, height: 900 });
  await page.waitForTimeout(800);
  const mobile = await page.evaluate(probe);
  await page.locator("#skills").screenshot({ path: ".tmp-shots/mobile.png" });

  const out = { desktop, hover, reducedMotion, tablet, mobile, consoleIssues };
  require("fs").writeFileSync(".tmp-shots/data.json", JSON.stringify(out, null, 1));
  console.log("WROTE .tmp-shots/data.json + pngs");
  await browser.close();
})().catch((e) => { console.error("SCRIPT ERROR", e); process.exit(1); });
