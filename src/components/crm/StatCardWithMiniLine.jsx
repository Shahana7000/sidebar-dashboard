import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function StatCardWithMiniLine({ className = "" }) {
  const data = [
    { v: 30 }, { v: 50 }, { v: 40 }, { v: 10 }, { v: 60 }, { v: 35 }, { v: 50 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[200px] flex flex-col ${className}`}>
      <CardHeader className="px-5 pt-4 pb-0 space-y-0 shrink-0">
        <div className="h-4 mb-1" /> {/* Title alignment spacer */}
        <CardTitle className="text-[12px] font-medium text-[#8888A4] leading-none">Proposals Sent</CardTitle>
        <p className="text-[11px] text-[#55556A] leading-none mt-1">Last Month</p>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-0 flex-grow flex flex-col justify-between overflow-hidden">
        <div className="h-[100px] mt-1 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="v" 
                stroke="#3B82F6" 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-auto shrink-0 pb-1">
          <span className="text-[24px] font-bold text-[#F0F0F8] leading-none">1,280</span>
          <span className="text-[13px] font-medium text-[#22C55E] leading-none">+15.3%</span>
        </div>
      </CardContent>
    </Card>
  );
}
