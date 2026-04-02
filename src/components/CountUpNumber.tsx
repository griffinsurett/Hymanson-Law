import { useEffect, useState } from "react";

interface Props {
  end: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

function formatValue(value: number, decimals: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CountUpNumber({
  end,
  durationMs = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: Props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(end);
      return;
    }

    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, end]);

  return (
    <span className={className}>
      {prefix}
      {formatValue(value, decimals)}
      {suffix}
    </span>
  );
}
