import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { DeltaBadge } from "@/components/shared/DeltaBadge";

export default function StatCardWithMiniLine({ className = "" }) {
  const data = [
    { v: 30 }, { v: 50 }, { v: 40 }, { v: 10 }, { v: 60 }, { v: 35 }, { v: 50 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[220px] flex flex-col ${className}`}>
      <CardHeader className="px-5 pt-2 pb-0 space-y-0 shrink-0">
        <div className="h-1 mb-1" /> {/* Title alignment spacer */}
        <CardTitle className="text-[12px] font-medium text-[#8888A4] leading-none">Proposals Sent</CardTitle>
        <p className="text-[11px] text-[#55556A] leading-none mt-1">Last Month</p>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-0 flex-grow flex flex-col justify-between">
        <div className="h-[65px] mt-2 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
        <div className="mt-auto shrink-0 flex flex-col items-start gap-1 pb-1">
          <span className="text-[22px] font-bold text-[#F0F0F8] leading-none">1,280</span>
          <DeltaBadge value="+15.3%" positive={true} />
        </div>
      </CardContent>
    </Card>
  );
}
