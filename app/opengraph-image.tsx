import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhinav A — Python Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A1128",
          color: "#F5F3EA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#FACC15" }}>
          {"< Abhinav />"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: -2,
          }}
        >
          Abhinav A
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#FACC15",
            marginTop: 12,
          }}
        >
          Python Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8B93B8",
            marginTop: 32,
          }}
        >
          Django · FastAPI · PostgreSQL · Redis · Docker · AWS · React
        </div>
      </div>
    ),
    { ...size }
  );
}