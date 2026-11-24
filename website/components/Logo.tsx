import { useId } from "react";

const TOP_PATH = "M35.97 7.99 L3.04 27 L24.71 39.51 L27.61 34.49 L14.64 27 L38.87 13.01Z";
const BOTTOM_PATH = "M28.03 56.01 L60.96 37 L39.29 24.49 L36.39 29.51 L49.36 37 L25.13 50.99Z";

/** SkillBridge "S" mark — same mark used for the mobile app icon. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const top = `sb-top-${id}`;
  const bottom = `sb-bottom-${id}`;

  return (
    <svg className={className} viewBox="-1 -1 66 66" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={top} x1="8" y1="30" x2="50" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B83AF3" />
          <stop offset=".5" stopColor="#7344FF" />
          <stop offset="1" stopColor="#2F62FF" />
        </linearGradient>
        <linearGradient id={bottom} x1="14" y1="58" x2="56" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2459FF" />
          <stop offset="1" stopColor="#4C8EFF" />
        </linearGradient>
      </defs>
      <path d={TOP_PATH} fill={`url(#${top})`} stroke={`url(#${top})`} strokeWidth="7.2" strokeLinejoin="round" />
      <path d={BOTTOM_PATH} fill={`url(#${bottom})`} stroke={`url(#${bottom})`} strokeWidth="7.2" strokeLinejoin="round" />
    </svg>
  );
}

/** Mark + "SkillBridge" wordmark. */
export default function Logo({ className = "", markClassName = "h-9 w-9", textClassName = "text-lg" }: { className?: string; markClassName?: string; textClassName?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className={markClassName} />
      <span className={`font-bold tracking-tight text-[#10233d] ${textClassName}`}>
        SkillBridge
      </span>
    </span>
  );
}
