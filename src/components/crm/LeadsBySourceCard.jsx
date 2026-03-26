import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function LeadsBySourceCard({ className = "" }) {
  const data = [
    { name: "Website", value: 170, color: "#8EC5FF" },
    { name: "Referrals", value: 105, color: "#2B7FFF" },
    { name: "Social Media", value: 90, color: "#155DFC" },
    { name: "Cold Outreach", value: 62, color: "#1447E6" },
    { name: "Other", value: 48, color: "#193CB8" },
  ];

  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Leads by Source</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="flex items-center gap-5">
          {/* Donut chart */}
          <div className="w-[140px] h-[140px] flex-shrink-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={65}
                  dataKey="value"
                  stroke="none"
                  isAnimationActive={false}
                  paddingAngle={2}
                >
                  {data.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E1E28",
                    border: "1px solid #2A2A38",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "#F0F0F8",
                  }}
                  itemStyle={{ color: "#F0F0F8" }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[22px] font-bold text-[#F0F0F8]">{total}</span>
              <span className="text-[10px] text-[#55556A]">Leads</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2.5 flex-1">
            {data.map((entry, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-[12px] text-[#8888A4]">{entry.name}</span>
                </div>
                <span className="text-[12px] font-medium text-[#F0F0F8]">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button variant="outline" className="flex-1 h-[30px] text-[11px] border-[#2A2A38] bg-transparent text-[#8888A4] hover:bg-[#1C1C26] rounded-[8px]">
            View Full Report
          </Button>
          <Button variant="outline" className="flex-1 h-[30px] text-[11px] border-[#2A2A38] bg-transparent text-[#8888A4] hover:bg-[#1C1C26] rounded-[8px]">
            Download CSV
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
