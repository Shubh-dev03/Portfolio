import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

/**
 * Counts from 0 to `end` once visible. Pass `play` to drive it from a parent's
 * own in-view state; otherwise it watches itself.
 */
function CountUp({ end, suffix = "", duration = 1400, play }) {
  const [ref, seen] = useInView({ threshold: 0.4 });
  const active = play ?? seen;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const t = reduce ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(end * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default CountUp;
