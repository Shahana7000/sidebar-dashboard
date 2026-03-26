import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function RevenueRiskLedger({ className = "" }) {
  const rows = [
    { company: "Global Industries", oppId: "OPP-9921", stage: "Negotiation", blocker: "Legal review stalled", owner: "Alex", idle: "12d", variance: "-$40k", next: "Escalate to VP", risk: 85 },
    { company: "Acme Corp", oppId: "OPP-9934", stage: "Proposal Sent", blocker: "Budget approval", owner: "Sarah", idle: "8d", variance: "-$15k", next: "Follow up email", risk: 75 },
    { company: "Initech", oppId: "OPP-9988", stage: "Qualified", blocker: "Technical discovery", owner: "Mike", idle: "3d", variance: "0", next: "Schedule demo", risk: 60 },
  ];

  const getRiskBadge = (risk) => {
    if (risk >= 80) return <span className="bg-[#3B1212] text-[#EF4444] text-[12px] font-semibold px-2 py-1 rounded-[6px]">{risk}</span>;
    if (risk >= 70) return <span className="bg-[#3D2008] text-[#F97316] text-[12px] font-semibold px-2 py-1 rounded-[6px]">{risk}</span>;
    if (risk >= 50) return <span className="bg-[#2A2214] text-[#FBBF24] text-[12px] font-semibold px-2 py-1 rounded-[6px]">{risk}</span>;
    return <span className="bg-[#1E1E28] text-[#55556A] text-[12px] font-semibold px-2 py-1 rounded-[6px]">{risk}</span>;
  };

  return (
    <Card className={`card-dark w-full px-5 pt-5 pb-0 ${className}`}>
      <div className="flex justify-between items-start pb-3">
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[#F0F0F8]">Revenue Risk Ledger</span>
          <span className="text-[12px] text-[#8888A4] mt-0.5">Accounts under active risk monitoring</span>
        </div>
        <span className="text-[12px] font-medium text-[#8888A4]">10 Accounts</span>
      </div>
      
      <div className="flex flex-row mt-3 pb-4 border-b border-[#2A2A38]">
        <div className="flex-1 flex flex-col">
          <span className="text-[16px] font-semibold text-[#F0F0F8]">1</span>
          <span className="text-[11px] text-[#55556A] mt-0.5">Critical</span>
        </div>
        <div className="flex-1 flex flex-col border-l border-[#2A2A38] pl-4">
          <span className="text-[16px] font-semibold text-[#F0F0F8]">1</span>
          <span className="text-[11px] text-[#55556A] mt-0.5">Escalations due</span>
        </div>
        <div className="flex-1 flex flex-col border-l border-[#2A2A38] pl-4">
          <span className="text-[16px] font-semibold text-[#F0F0F8]">31d</span>
          <span className="text-[11px] text-[#55556A] mt-0.5">Inactivity</span>
        </div>
        <div className="flex-1 flex flex-col border-l border-[#2A2A38] pl-4">
          <span className="text-[16px] font-semibold text-[#F0F0F8]">$1,084,000</span>
          <span className="text-[11px] text-[#55556A] mt-0.5">Overdue</span>
        </div>
      </div>
      
      <div className="overflow-x-auto -mx-5">
        <Table className="min-w-[800px]">
          <TableHeader className="bg-[#1C1C26] border-b border-[#2A2A38]">
            <TableRow className="hover:bg-transparent border-0">
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 w-[200px]">Account</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 flex-1">Blocker</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 w-[100px]">Owner</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 w-[80px]">Idle</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 w-[100px]">Close variance</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 flex-1">Next action</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2.5 px-3 w-[90px]">Risk Ladder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx} className="h-[52px] border-b border-[#1F1F2B] table-row-hover">
                <TableCell className="w-[200px] py-3 px-3">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-[13px] font-medium text-[#F0F0F8] leading-tight">{row.company}</span>
                    <span className="text-[12px] text-[#55556A] leading-tight">{row.oppId}</span>
                    <StatusBadge status={row.stage} />
                  </div>
                </TableCell>
                <TableCell className="flex-1 py-3 px-3">
                  <span className="text-[12px] text-[#8888A4]">{row.blocker}</span>
                </TableCell>
                <TableCell className="w-[100px] py-3 px-3">
                  <span className="text-[12px] text-[#F0F0F8]">{row.owner}</span>
                </TableCell>
                <TableCell className="w-[80px] py-3 px-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] text-[#F0F0F8]">{row.idle}</span>
                    <span className="text-[12px] text-[#EF4444]">overdue</span>
                  </div>
                </TableCell>
                <TableCell className="w-[100px] py-3 px-3">
                  <span className="text-[12px] text-[#F0F0F8]">{row.variance}</span>
                </TableCell>
                <TableCell className="flex-1 py-3 px-3">
                  <span className="text-[12px] text-[#8888A4]">{row.next}</span>
                </TableCell>
                <TableCell className="w-[90px] py-3 px-3">
                  {getRiskBadge(row.risk)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
