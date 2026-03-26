import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { MoreVertical, ArrowDownUp, Eye, Download } from "lucide-react";

export default function RecentLeadsTable() {
  const leads = [
    { id: "L-1012", name: "Guillermo Rauch", company: "Vercel", status: "Qualified", source: "Website", lastAct: "30m ago" },
    { id: "L-1010", name: "Nitzy", company: "MailD", status: "Qualified", source: "Website", lastAct: "25m ago" },
    { id: "L-1005", name: "Sahaj", company: "Tweakon", status: "Negotiation", source: "Website", lastAct: "1h ago" },
    { id: "L-1021", name: "Shastin", company: "StructrAI", status: "Qualified", source: "Website", lastAct: "2h ago" },
    { id: "L-1005", name: "Sam Altman", company: "OpenAI", status: "Proposal Sent", source: "Social Media", lastAct: "3h ago" },
    { id: "L-1008", name: "Michael Andreuzza", company: "Lexington Themes", status: "Contacted", source: "Social Media", lastAct: "5h ago" },
    { id: "L-1016", name: "Skyplex", company: "Antidate UI", status: "Proposal Sent", source: "Referral", lastAct: "7h ago" },
    { id: "L-1007", name: "Arham Khan", company: "Webstake Studio", status: "Won", source: "Website", lastAct: "6h ago" },
    { id: "L-1011", name: "Sebastián Heidorn", company: "Medusa", status: "Proposal Sent", source: "Referral", lastAct: "15h ago" },
    { id: "L-1014", name: "Fred K. Schott", company: "Astro", status: "Contacted", source: "Social Media", lastAct: "12h ago" },
  ];

  return (
    <Card className="card-dark w-full">
      <CardHeader className="flex flex-row justify-between items-center px-4 pb-3 pt-4">
        <div className="flex flex-col">
          <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Recent Leads</CardTitle>
          <p className="text-[12px] text-[#8888A4] mt-0.5">Track and manage your latest leads and their status.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1.5 bg-transparent border border-[#2A2A38] h-[30px] text-[11px] text-[#8888A4] rounded-[8px] px-3 hover:bg-[#1C1C26]">
            <Eye size={12} />
            View
          </Button>
          <Button variant="outline" className="flex items-center gap-1.5 bg-transparent border border-[#2A2A38] h-[30px] text-[11px] text-[#8888A4] rounded-[8px] px-3 hover:bg-[#1C1C26]">
            <ArrowDownUp size={12} />
            Sort
          </Button>
          <Button variant="outline" className="flex items-center gap-1.5 bg-transparent border border-[#2A2A38] h-[30px] text-[11px] text-[#8888A4] rounded-[8px] px-3 hover:bg-[#1C1C26]">
            <Download size={12} />
            Export
          </Button>
        </div>
      </CardHeader>

      <div className="overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader className="bg-[#111118]">
            <TableRow className="hover:bg-transparent border-b border-[#2A2A38]">
              <TableHead className="w-[36px] py-2 px-4">
                <Checkbox className="border-[#2A2A38]" />
              </TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Ref</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Name</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Company</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Status</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Source</TableHead>
              <TableHead className="text-[11px] font-medium text-[#55556A] py-2 px-3">Last Activity</TableHead>
              <TableHead className="w-[36px] py-2 px-3"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead, idx) => (
              <TableRow key={idx} className="h-[44px] border-b border-[#1F1F2B] hover:bg-[#1C1C26] transition-colors">
                <TableCell className="w-[36px] py-2 px-4">
                  <Checkbox className="border-[#2A2A38]" />
                </TableCell>
                <TableCell className="text-[12px] text-[#55556A] py-2 px-3">{lead.id}</TableCell>
                <TableCell className="text-[12px] font-medium text-[#F0F0F8] py-2 px-3">{lead.name}</TableCell>
                <TableCell className="text-[12px] text-[#8888A4] py-2 px-3">{lead.company}</TableCell>
                <TableCell className="py-2 px-3">
                  <StatusBadge status={lead.status} />
                </TableCell>
                <TableCell className="text-[12px] text-[#8888A4] py-2 px-3">{lead.source}</TableCell>
                <TableCell className="text-[12px] text-[#55556A] py-2 px-3">{lead.lastAct}</TableCell>
                <TableCell className="w-[36px] py-2 px-3">
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-[#55556A] hover:bg-transparent hover:text-[#F0F0F8]">
                    <MoreVertical size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center px-4 py-3 border-t border-[#2A2A38]">
        <span className="text-[11px] text-[#55556A]">0 of 15 row(s) selected.</span>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#55556A]">Rows per page: <span className="text-[#8888A4]">10</span> ▾</span>
          <span className="text-[11px] text-[#8888A4]">Page 1 of 2</span>
          <div className="flex gap-0.5">
            <Button variant="ghost" className="h-7 w-7 p-0 text-[#55556A] hover:text-[#F0F0F8]">‹</Button>
            <Button variant="ghost" className="h-7 w-7 p-0 text-[#55556A] hover:text-[#F0F0F8]">›</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
