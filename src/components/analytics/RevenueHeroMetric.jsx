import { Card, CardContent } from "@/components/ui/card";
import { DeltaBadge } from "@/components/shared/DeltaBadge";
import AreaChart from "@/components/charts/AreaChart";

export default function RevenueHeroMetric({ className = "" }) {
  // Mock data for the sparkline area chart
  const data = [
    { name: "Week 1", value: 1000000 },
    { name: "Week 2", value: 1050000 },
    { name: "Week 3", value: 1020000 },
    { name: "Week 4", value: 1100000 },
    { name: "Week 5", value: 1141000 },
    { name: "Week 6", value: 1248000 },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardContent className="px-5 pt-5 pb-4">
        <span className="text-[13px] font-medium text-[#8888A4]">Revenue</span>
        
        <div className="flex items-baseline gap-3 mt-1">
          <span className="text-[36px] font-bold text-[#F0F0F8]">$1,248,000</span>
          <DeltaBadge value="+9.4%" positive={true} />
          <DeltaBadge value="+$107,000" positive={true} />
        </div>
        
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[12px] text-[#8888A4]">Previous $1,141,000</span>
          <span className="inline-flex bg-[#1E1E28] text-[#8888A4] text-[11px] px-2 py-0.5 rounded-[6px]">
            Risk Ladder 30
          </span>
        </div>
        
        <div className="h-[60px] mt-3">
          <AreaChart data={data} height={60} hideAxis />
        </div>
        
        <div className="text-[12px] text-[#55556A] text-center mt-2">
          Selected range
        </div>
      </CardContent>
    </Card>
  );
}
