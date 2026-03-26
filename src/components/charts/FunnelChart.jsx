import { ResponsiveContainer, FunnelChart as RechartsFunnelChart, Funnel, LabelList, Legend } from "recharts";

export default function FunnelChart() {
  return (
    <ResponsiveContainer height={200} width="100%">
      <RechartsFunnelChart layout="horizontal">
        <Funnel
          animationBegin={400}
          animationDuration={1500}
          animationEasing="ease"
          data={[
            { fill: '#1E1E28', name: 'Discovery', value: 1009 },
            { fill: '#2A2A38', name: 'Proposal', value: 903 },
            { fill: '#3B6FE8', name: 'Negotiation', value: 756 },
            { fill: '#6366F1', name: 'Closing', value: 622 }
          ]}
          dataKey="value"
          isAnimationActive
          lastShapeType="rectangle"
          legendType="rect"
          nameKey="name"
          orientation="horizontal"
          stroke="#424242"
          width={400}
        >
          <LabelList dataKey="name" fill="#8888A4" position="right" stroke="none" />
          <Legend />
        </Funnel>
      </RechartsFunnelChart>
    </ResponsiveContainer>
  );
}