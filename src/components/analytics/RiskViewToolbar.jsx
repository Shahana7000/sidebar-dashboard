import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export default function RiskViewToolbar() {
  return (
    <div className="flex items-center justify-between py-2 gap-2">
      <div className="flex items-center gap-2">
        <Select defaultValue="risk-view">
          <SelectTrigger className="bg-[#1E1E28] border-[#2A2A38] rounded-[8px] h-[32px] px-3 text-[13px] text-[#F0F0F8] min-w-[120px]">
            <SelectValue placeholder="Select view" />
          </SelectTrigger>
          <SelectContent className="bg-[#16161E] border-[#2A2A38] text-[#F0F0F8]">
            <SelectItem value="risk-view">Risk view</SelectItem>
            <SelectItem value="health-view">Health view</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3 text-[13px] text-[#8888A4] hover:bg-[#1C1C26] hover:text-[#F0F0F8]">
          <Filter className="w-3.5 h-3.5 mr-1.5" />
          Filters
          <span className="bg-[#3B6FE8] text-white rounded-[6px] text-[11px] px-1.5 ml-1">1</span>
        </Button>

        <span className="text-[12px] text-[#8888A4] ml-2">Showing: Renewals</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3 text-[13px] text-[#8888A4]">
          Jan 1 - Mar 31, 2026
        </div>

        <Button variant="outline" className="bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3 text-[13px] text-[#8888A4] hover:bg-[#1C1C26] hover:text-[#F0F0F8]">
          <Download className="w-3.5 h-3.5 mr-1.5" />
          Export
        </Button>
      </div>
    </div>
  );
}
