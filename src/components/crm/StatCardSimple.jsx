import { Card, CardContent } from "@/components/ui/card";
import { DeltaBadge } from "@/components/shared/DeltaBadge";
import { Wallet, Trophy } from "lucide-react";

export default function StatCardSimple({ type = "revenue", className = "" }) {
  const isRevenue = type === "revenue";

  const iconBg = isRevenue ? "bg-[#142921]" : "bg-[#2A1A1A]";
  const iconColor = isRevenue ? "text-[#22C55E]" : "text-[#EF4444]";
  const Icon = isRevenue ? Wallet : Trophy;

  const title = isRevenue ? "Revenue" : "Projects Won";
  const sub = isRevenue ? "Last 6 Months" : "Last 6 Months";
  const value = isRevenue ? "$56,050" : "136";
  const delta = isRevenue ? "+22.2%" : "-2.5%";
  const deltaPositive = isRevenue;

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[160px] ${className}`}>
      <CardContent className="px-4 pt-5 pb-4 h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center ${iconBg} ${iconColor} mb-3`}>
            <Icon size={18} />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#F0F0F8]">{title}</p>
            <p className="text-[11px] text-[#55556A] mt-0.5">{sub}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="text-[20px] font-bold text-[#F0F0F8] mb-1">{value}</div>
          <DeltaBadge value={delta} positive={deltaPositive} />
        </div>
      </CardContent>
    </Card>
  );
}
