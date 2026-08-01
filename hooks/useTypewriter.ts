"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  { typeSpeed = 70, deleteSpeed = 40, pause = 1800, startDelay = 0 } = {}
) {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started || words.length === 0) return;

    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [started, text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
