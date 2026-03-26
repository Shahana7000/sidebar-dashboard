import {
  ComposedChart as RechartsComposedChart,
  Bar, Line, XAxis, YAxis,
  CartesianGrid, Tooltip,
  ReferenceLine, ResponsiveContainer,
} from "recharts";

// Tooltip styles — shared dark theme across all charts
const tooltipStyle = {
  contentStyle: {
    background: "#1C1C26",
    border: "1px solid #2A2A38",
    borderRadius: "8px",
    padding: "6px 10px",
  },
  labelStyle:   { color: "#8888A4", fontSize: "11px", fontFamily: "Inter" },
  itemStyle:    { color: "#F0F0F8", fontSize: "12px", fontFamily: "Inter" },
};

// Replace with real weekly forecast + attainment data
const defaultData = [
  { name: "W1",  pv: 800,  uv: 60  },
  { name: "W2",  pv: 800,  uv: 58  },
  { name: "W3",  pv: 967,  uv: 72  },
  { name: "W4",  pv: 1098, uv: 85  },
  { name: "W5",  pv: 1200, uv: 78  },
  { name: "W6",  pv: 1108, uv: 90  },
  { name: "W7",  pv: 900,  uv: 82  },
  { name: "W8",  pv: 1050, uv: 95  },
  { name: "W9",  pv: 1150, uv: 100 },
  { name: "W10", pv: 1300, uv: 108 },
  { name: "W11", pv: 1400, uv: 115 },
  { name: "W12", pv: 680,  uv: 91  },
];

export default function ComposedChart({ data = defaultData, height = 200 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        barCategoryGap="10%"
        barGap={4}
      >
        {/* Faint horizontal grid only — no vertical lines */}
        <CartesianGrid vertical={false} stroke="#2A2A38" opacity={0.5} />

        {/* X axis — week labels W1–W12 */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#8888A4", fontSize: 11, fontFamily: "Inter" }}
          axisLine={false}
          tickLine={false}
        />

        {/* Y axis — 0% to 200% attainment scale */}
        <YAxis
          tickFormatter={(v) => `${v}%`}
          domain={[0, 200]}
          ticks={[0, 50, 100, 150, 200]}
          tick={{ fill: "#8888A4", fontSize: 11, fontFamily: "Inter" }}
          axisLine={false}
          tickLine={false}
          width={40}
        />

        {/* Dashed 100% target line — attainment threshold */}
        <ReferenceLine
          y={100}
          stroke="#8888A4"
          strokeDasharray="4 4"
          strokeWidth={1}
        />

        {/* Forecast bars — muted blue background context */}
        <Bar
          dataKey="pv"
          fill="#1E2F5C"
          radius={[2, 2, 0, 0]}
          barSize={20}
        />

        {/* Attainment line — bright blue foreground signal */}
        <Line
          dataKey="uv"
          stroke="#3B6FE8"
          strokeWidth={2}
          type="monotone"
          dot={{ fill: "#3B6FE8", r: 3, stroke: "#16161E", strokeWidth: 2 }}
          activeDot={{ r: 5, fill: "#3B6FE8" }}
        />

        <Tooltip {...tooltipStyle} />
      </RechartsComposedChart>
    </ResponsiveContainer>
  );
}
