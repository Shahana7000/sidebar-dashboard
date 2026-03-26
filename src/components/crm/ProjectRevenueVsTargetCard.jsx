import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

export default function ProjectRevenueVsTargetCard({ className = "" }) {
  const projects = [
    { name: "MVP Development", actual: 82000, target: 8000 },
    { name: "Consultation", actual: 48000, target: 17000 },
    { name: "Project Store", actual: 34000, target: 11000 },
    { name: "DevOps Support", actual: 77000, target: 13000 },
    { name: "LLM Training", actual: 68000, target: 12000 },
    { name: "Product Launch", actual: 52000, target: 18000 },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Project Revenue vs. Target</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={projects}
              layout="vertical"
              barCategoryGap="18%"
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
            >
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                width={110}
                tick={{ fontSize: 11, fill: "#8888A4" }}
              />
              <XAxis type="number" hide />
              <Bar dataKey="actual" stackId="a" fill="#155DFC" radius={[4, 0, 0, 4]} barSize={20}>
                <LabelList dataKey="actual" position="center" style={{ fontSize: 10, fill: "#fff", fontWeight: 500 }} />
              </Bar>
              <Bar dataKey="target" stackId="a" fill="#8EC5FF" radius={[0, 4, 4, 0]} barSize={20}>
                <LabelList dataKey="target" position="center" style={{ fontSize: 10, fill: "#155DFC", fontWeight: 500 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[11px] text-[#55556A] mt-2">
          Average progress: 78% · 2 projects above target
        </p>
      </CardContent>
    </Card>
  );
}
