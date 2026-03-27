import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function StatCardWithLine({ className = "" }) {
  const data = [
    { v: 45 }, { v: 50 }, { v: 48 }, { v: 55 }, { v: 62 }, { v: 65 }, { v: 60 }, { v: 68 }, { v: 72 }, { v: 78 }, { v: 92 }, { v: 85 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[200px] flex flex-col ${className}`}>
      <CardHeader className="px-5 pt-4 pb-0 space-y-0 shrink-0">
        <div className="h-4 mb-1" /> {/* Title alignment spacer */}
        <CardTitle className="text-[12px] font-medium text-[#8888A4] leading-none">Revenue Growth</CardTitle>
        <p className="text-[11px] text-[#55556A] leading-none mt-1">Year to Date (YTD)</p>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-1 flex-grow flex flex-col justify-between overflow-hidden">
        <div className="flex-grow min-h-0 mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="v" 
                stroke="#3B82F6" 
                strokeWidth={2} 
                dot={{ r: 3, fill: "#3B82F6", stroke: "#0A0A0F", strokeWidth: 1.5 }}
                activeDot={{ r: 4, fill: "#F0F0F8" }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-[#55556A] mt-2 shrink-0">+35% growth since last year</p>
      </CardContent>
    </Card>
  );
}
