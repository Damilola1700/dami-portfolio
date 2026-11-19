
import { useEffect, useMemo, useRef, useState } from "react";

const Typewriter = ({
  text = "Design|Build|Ship",
  speed = 60,
  deleteSpeed = 32,
  hold = 1600,
  loop = false,
  cursor = true,
}) => {
  const elementRef = useRef(null);
  const [displayedText, setDisplayedText] = useState("");

  const phrases = useMemo(
    () => text.split("|").map((item) => item.trim()).filter(Boolean),
    [text]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !phrases.length) return;

    let timeout;
    let cancelled = false;
    let index = 0;

    const shouldLoop = phrases.length > 1 || loop;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setDisplayedText(phrases[0]);
      return;
    }

    function type(phrase, i) {
      if (cancelled) return;

      setDisplayedText(phrase.slice(0, i));

      if (i < phrase.length) {
        timeout = setTimeout(() => type(phrase, i + 1), speed);
      } else if (shouldLoop) {
        timeout = setTimeout(() => erase(phrase.length), hold);
      }
    }

    function erase(i) {
      if (cancelled) return;

      setDisplayedText(phrases[index].slice(0, i));

      if (i > 0) {
        timeout = setTimeout(() => erase(i - 1), deleteSpeed);
      } else {
        index = (index + 1) % phrases.length;
        timeout = setTimeout(() => type(phrases[index], 1), speed * 6);
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        timeout = setTimeout(() => type(phrases[0], 1), 400);
      }
    }, { threshold: 0.3 });

    observer.observe(element);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [phrases, speed, deleteSpeed, hold, loop]);

  return (
    <span ref={elementRef} aria-label={phrases.join(", ")}>
      <span aria-hidden="true">{displayedText}</span>

      {cursor && (
        <span
          aria-hidden="true"
          className="ml-[0.06em] inline-block h-[1em] w-[0.08em] translate-y-[-0.12em] animate-pulse rounded-sm bg-current align-middle motion-reduce:animate-none"
        />
      )}
    </span>
  );
};

export default Typewriter;
