import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesPipelineCard({ className = "" }) {
  const data = [
    { name: "Leads", value: 680, color: "#8EC5FF", width: 220, top: 0 },
    { name: "Qualified", value: 480, color: "#3B82F6", width: 170, top: 40 },
    { name: "Proposal Sent", value: 210, color: "#2563EB", width: 120, top: 80 },
    { name: "Negotiation", value: 120, color: "#1D4ED8", width: 70, top: 120 },
    { name: "Won", value: 45, color: "#1E40AF", width: 30, top: 160 },
  ];

  // Helper to calculate trapezoid points
  // We'll create a vertical stack of shapes
  const height = 190;
  const centerX = 150;

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="relative h-[210px] w-full flex justify-center mt-2">
          <svg width="300" height={height} viewBox="0 0 300 190">
            {/* Top segment (Leads) */}
            <path
              d="M 40,0 L 260,0 L 225,40 L 75,40 Z"
              fill="#8EC5FF"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
            {/* 2nd segment (Qualified) */}
            <path
              d="M 75,40 L 225,40 L 200,80 L 100,80 Z"
              fill="#3B82F6"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
            {/* 3rd segment (Proposal Sent) */}
            <path
              d="M 100,80 L 200,80 L 185,120 L 115,120 Z"
              fill="#2563EB"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
            {/* 4th segment (Negotiation) */}
            <path
              d="M 115,120 L 185,120 L 170,160 L 130,160 Z"
              fill="#1D4ED8"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
            {/* 5th segment (Won) - Triangle at bottom */}
            <path
              d="M 130,160 L 170,160 L 150,190 Z"
              fill="#1E40AF"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />

            {/* Labels - Value on Left, Name on Right */}
            <text x="35" y="25" textAnchor="end" fill="#8888A4" fontSize="11">680</text>
            <text x="265" y="25" textAnchor="start" fill="#8888A4" fontSize="11">Leads</text>

            <text x="70" y="65" textAnchor="end" fill="#8888A4" fontSize="11">480</text>
            <text x="230" y="65" textAnchor="start" fill="#8888A4" fontSize="11">Qualified</text>

            <text x="95" y="105" textAnchor="end" fill="#8888A4" fontSize="11">210</text>
            <text x="205" y="105" textAnchor="start" fill="#8888A4" fontSize="11">Proposal Sent</text>

            <text x="110" y="145" textAnchor="end" fill="#8888A4" fontSize="11">120</text>
            <text x="190" y="145" textAnchor="start" fill="#8888A4" fontSize="11">Negotiation</text>

            <text x="125" y="175" textAnchor="end" fill="#8888A4" fontSize="11">45</text>
            <text x="175" y="175" textAnchor="start" fill="#8888A4" fontSize="11">Won</text>
          </svg>
        </div>
        <div className="border-t border-[#2A2A38] pt-3 mt-2">
          <p className="text-[11px] text-[#55556A]">
            Leads increased by 18.2% since last month.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
