import { badgeColors } from "@/lib/badgeColors";

export function StatusBadge({ status }) {
  const color = badgeColors[status] ?? { bg: "#1E1E28", text: "#8888A4" };

  return (
    <span
      className="inline-flex items-center text-[11px] font-medium rounded-[6px] px-2 py-0.5 whitespace-nowrap"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {status}
    </span>
  );
}
