import { Search, Settings, Sun, Star, Bell, PanelLeftClose, PanelLeftOpen } from "lucide-react";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="h-[52px] flex-shrink-0 flex items-center justify-between px-5 bg-[#0A0A0F] border-b border-[#2A2A38]">
      {/* Left — Toggle + Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#8888A4] hover:bg-[#1E1E28] hover:text-[#F0F0F8] transition-colors"
        >
          <PanelLeftClose size={16} />
        </button>
        <div className="flex items-center gap-2">
          <Search size={15} className="text-[#55556A]" />
          <span className="text-[13px] text-[#55556A]">Search</span>
          <kbd className="ml-1 bg-[#1E1E28] border border-[#2A2A38] text-[#55556A] text-[10px] px-1.5 py-0.5 rounded-[4px] font-mono">
            ⌘ F
          </kbd>
        </div>
      </div>

      {/* Right — Action Icons */}
      <div className="flex items-center gap-1">
        <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#8888A4] hover:bg-[#1E1E28] hover:text-[#F0F0F8] transition-colors">
          <Settings size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#8888A4] hover:bg-[#1E1E28] hover:text-[#F0F0F8] transition-colors">
          <Sun size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#8888A4] hover:bg-[#1E1E28] hover:text-[#F0F0F8] transition-colors">
          <Star size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[#8888A4] hover:bg-[#1E1E28] hover:text-[#F0F0F8] transition-colors relative">
          <Bell size={16} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#EF4444] flex items-center justify-center text-white text-[11px] font-bold ml-1 cursor-pointer">
          A
        </div>
      </div>
    </header>
  );
}
