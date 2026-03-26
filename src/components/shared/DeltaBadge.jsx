export function DeltaBadge({ value, positive = true }) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-medium"
      style={{ color: positive ? "#22C55E" : "#EF4444" }}
    >
      {value}
    </span>
  );
}
