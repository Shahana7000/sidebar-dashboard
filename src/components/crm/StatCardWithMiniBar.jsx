import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { DeltaBadge } from "@/components/shared/DeltaBadge";

export default function StatCardWithMiniBar({ className = "" }) {
  const data = [
    { b: 85, h: 10, bg: 5 },
    { b: 65, h: 10, bg: 25 },
    { b: 75, h: 10, bg: 15 },
    { b: 55, h: 10, bg: 35 },
    { b: 90, h: 10, bg: 0 },
    { b: 78, h: 10, bg: 12 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[220px] flex flex-col ${className}`}>
      <CardHeader className="px-5 pt-2 pb-0 space-y-0 shrink-0">
        <div className="h-1 mb-1" /> {/* Title alignment spacer */}
        <CardTitle className="text-[12px] font-medium text-[#8888A4] leading-none">New Leads</CardTitle>
        <p className="text-[11px] text-[#55556A] leading-none mt-1">Last Month</p>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-0 flex-grow flex flex-col justify-between">
        <div className="h-[65px] mt-2 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="40%" barSize={8} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Bar dataKey="b" stackId="a" fill="#8EC5FF" opacity={0.3} isAnimationActive={false} />
              <Bar dataKey="h" stackId="a" fill="#155DFC" radius={[2, 2, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="bg" stackId="a" fill="#14141B" isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-auto shrink-0 flex flex-col items-start gap-1 pb-1">
          <span className="text-[22px] font-bold text-[#F0F0F8] leading-none">635</span>
          <DeltaBadge value="+54.6%" positive={true} />
        </div>
      </CardContent>
    </Card>
  );
}
