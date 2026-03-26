import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeltaBadge } from "@/components/shared/DeltaBadge";

export default function SalesByRegionCard({ className = "" }) {
  const regions = [
    { name: "North America", value: "$37,800", delta: "-3.2%", pct: 31, positive: false },
    { name: "Europe", value: "$40,100", delta: "+9.4%", pct: 34, positive: true },
    { name: "Asia Pacific", value: "$30,950", delta: "+12.8%", pct: 28, positive: true },
    { name: "Latin America", value: "$12,200", delta: "-1.7%", pct: 7, positive: false },
    { name: "Middle East & Africa", value: "$2,450", delta: "+6.0%", pct: 2, positive: true },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Sales by Region</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">$123,500</p>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="flex flex-col gap-3">
          {regions.map((region, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[12px] font-medium text-[#F0F0F8]">{region.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-medium text-[#F0F0F8]">{region.value}</span>
                  <DeltaBadge value={region.delta} positive={region.positive} />
                  <span className="text-[11px] text-[#55556A] w-7 text-right">{region.pct}%</span>
                </div>
              </div>
              <div className="h-[4px] bg-[#1E1E28] rounded-full overflow-hidden">
                <div className="h-full bg-[#155DFC] rounded-full" style={{ width: `${region.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#2A2A38] pt-3 mt-4">
          <p className="text-[11px] text-[#55556A]">5 regions tracked · 3 regions growing</p>
        </div>
      </CardContent>
    </Card>
  );
}
