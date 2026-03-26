import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RiskSummaryPanel({ className = "" }) {
  const kpis = [
    { value: "8", label: "Stalled Deals" },
    { value: "$1,151,000", label: "Revenue at Risk" },
    { value: "+8.3pp", label: "Win Rate Trend" },
    { value: "+2.3 days", label: "Sales Cycle Drift" },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-5 pt-5 pb-0">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Risk Summary</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">Core risk signals vs benchmark</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0 mt-4">
        <div className="flex flex-row">
          {kpis.map((kpi, idx) => (
            <div 
              key={idx} 
              className={`flex-1 flex flex-col items-center text-center px-4 ${
                idx < kpis.length - 1 ? "border-r border-[#2A2A38]" : ""
              }`}
            >
              <span className="text-[22px] font-bold text-[#F0F0F8]">{kpi.value}</span>
              <span className="text-[11px] text-[#55556A] mt-1">{kpi.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
