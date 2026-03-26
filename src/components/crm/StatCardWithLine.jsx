import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function StatCardWithLine({ className = "" }) {
  const data = [
    { v: 45 }, { v: 50 }, { v: 48 }, { v: 55 }, { v: 62 }, { v: 65 }, { v: 60 }, { v: 68 }, { v: 72 }, { v: 78 }, { v: 92 }, { v: 85 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[160px] ${className}`}>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-[12px] font-medium text-[#8888A4]">Revenue Growth</CardTitle>
        <p className="text-[11px] text-[#55556A]">Year to Date (YTD)</p>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="h-[70px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="v" 
                stroke="#8EC5FF" 
                strokeWidth={2} 
                dot={{ r: 3, fill: "#8EC5FF", stroke: "#0A0A0F", strokeWidth: 1.5 }}
                activeDot={{ r: 4, fill: "#F0F0F8" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] text-[#55556A] mt-3 italic">+35% growth since last year</p>
      </CardContent>
    </Card>
  );
}
