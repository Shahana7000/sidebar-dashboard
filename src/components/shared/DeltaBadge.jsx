export function DeltaBadge({ value, positive = true, className = "" }) {
  const bg = positive ? "#14381F" : "#3B1212";
  const text = positive ? "#22C55E" : "#EF4444";

  return (
    <span
      className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-[6px] whitespace-nowrap ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {value}
    </span>
  );
}
