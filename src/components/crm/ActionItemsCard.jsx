import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Clock } from "lucide-react";

export default function ActionItemsCard({ className = "" }) {
  const items = [
    { title: "Send kickoff docs", priority: "High", desc: "Send onboarding documents and timeline", due: "Due today" },
    { title: "Demo call for SaaS MVP", priority: "Medium", desc: "Book Zoom call with client", due: "Due tomorrow", checked: true },
    { title: "Update case study", priority: "Low", desc: "Add latest LLM project", due: "Due this week" },
  ];

  return (
    <Card className={`card-dark flex flex-col ${className}`}>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">
          Action Items
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0 flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 bg-[#111118] border border-[#1F1F2B] rounded-[10px] hover:border-[#2A2A38] transition-colors">
            <Checkbox 
              defaultChecked={item.checked}
              className="w-4 h-4 mt-1 border-[#2A2A38] data-[state=checked]:bg-[#3B6FE8] data-[state=checked]:border-[#3B6FE8]" 
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-[13px] font-medium truncate ${item.checked ? "text-[#55556A] line-through" : "text-[#F0F0F8]"}`}>
                  {item.title}
                </span>
                <StatusBadge status={item.priority} />
              </div>
              <p className="text-[12px] text-[#8888A4] mt-0.5 truncate">{item.desc}</p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#55556A] mt-1.5">
                <Clock size={11} />
                <span>{item.due}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
