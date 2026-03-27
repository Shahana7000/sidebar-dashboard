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
    <Card className={`card-dark border-[#1F1F2B] h-[220px] flex flex-col ${className}`}>
      <CardContent className="px-5 pt-4 pb-4 flex-grow flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col shrink-0">
          <div className={`w-7 h-7 rounded-[6px] flex items-center justify-center ${iconBg} ${iconColor} mb-2`}>
            <Icon size={14} />
          </div>
          <div>
            <p className="text-[13px] font-medium text-[#F0F0F8] leading-none">{title}</p>
            <p className="text-[11px] text-[#55556A] leading-none mt-2">{sub}</p>
          </div>
        </div>
        
        <div className="flex-grow" /> {/* Spacer to push values to bottom */}
        
        <div className="mt-auto shrink-0">
          <div className="text-[22px] font-bold text-[#F0F0F8] mb-1 leading-none">{value}</div>
          <DeltaBadge value={delta} positive={deltaPositive} />
        </div>
      </CardContent>
    </Card>
  );
}
