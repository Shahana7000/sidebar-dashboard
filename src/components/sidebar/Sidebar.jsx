import SidebarNavItem from "./SidebarNavItem";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  BarChart3,
  ShoppingCart,
  GraduationCap,
  Truck,
  Mail,
  MessageSquare,
  CalendarDays,
  Kanban,
  FileText,
  UserRound,
  PlusCircle,
  MailOpen,
  MoreVertical,
  Grip,
} from "lucide-react";

export default function Sidebar({ isOpen = true }) {
  return (
    <aside
      className={`flex-shrink-0 bg-[#111118] border-r border-[#2A2A38] flex flex-col h-full font-sans transition-all duration-300 ${
        isOpen ? "w-[220px]" : "w-[60px]"
      }`}
    >

      {/* Logo */}
      <div className="flex items-center gap-2 px-5 h-[52px] border-b border-[#2A2A38] overflow-hidden whitespace-nowrap">
        <Grip size={18} className="text-[#8888A4] flex-shrink-0" />
        {isOpen && <span className="text-[14px] font-bold text-[#F0F0F8]">Studio Admin</span>}
      </div>

      {/* Quick Create + Mail */}
      <div className={`flex items-center gap-2 py-3 overflow-hidden ${isOpen ? "px-4" : "px-3 justify-center"}`}>
        {isOpen ? (
          <>
            <button className="flex items-center gap-2 flex-1 bg-[#3B6FE8] text-white h-[34px] rounded-[8px] px-3 text-[13px] font-medium hover:bg-[#4D7FF5] transition-colors whitespace-nowrap">
              <PlusCircle size={15} className="flex-shrink-0" />
              Quick Create
            </button>
            <button className="w-[34px] h-[34px] flex items-center justify-center rounded-[8px] bg-[#1E1E28] border border-[#2A2A38] text-[#8888A4] hover:text-[#F0F0F8] transition-colors flex-shrink-0">
              <MailOpen size={15} />
            </button>
          </>
        ) : (
          <button className="w-[34px] h-[34px] flex items-center justify-center rounded-[8px] bg-[#3B6FE8] text-white hover:bg-[#4D7FF5] transition-colors flex-shrink-0">
            <PlusCircle size={15} />
          </button>
        )}
      </div>

      {/* Scrollable Nav */}
      <nav className={`flex flex-col gap-0.5 flex-1 overflow-y-auto no-scrollbar pb-3 ${isOpen ? "px-3" : "px-2"}`}>

        {/* Dashboards Section */}
        {isOpen && (
          <div className="text-[10px] font-medium text-[#55556A] uppercase tracking-widest px-3 mb-1.5 mt-1">
            Dashboards
          </div>
        )}
        <SidebarNavItem to="/default" label="Default" icon={LayoutDashboard} collapsed={!isOpen} />
        <SidebarNavItem to="/" label="CRM" icon={Users} exact collapsed={!isOpen} />
        <SidebarNavItem to="/finance" label="Finance" icon={DollarSign} collapsed={!isOpen} />
        <SidebarNavItem to="/analytics" label="Analytics" icon={BarChart3} collapsed={!isOpen} />
        <SidebarNavItem to="#" label="E-commerce" icon={ShoppingCart} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Academy" icon={GraduationCap} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Logistics" icon={Truck} soon collapsed={!isOpen} />

        {/* Pages Section */}
        {isOpen && (
          <div className="text-[10px] font-medium text-[#55556A] uppercase tracking-widest px-3 mb-1.5 mt-4">
            Pages
          </div>
        )}
        {!isOpen && <div className="border-t border-[#2A2A38] my-2" />}
        <SidebarNavItem to="#" label="Email" icon={Mail} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Chat" icon={MessageSquare} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Calendar" icon={CalendarDays} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Kanban" icon={Kanban} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Invoice" icon={FileText} soon collapsed={!isOpen} />
        <SidebarNavItem to="#" label="Users" icon={UserRound} soon collapsed={!isOpen} />
      </nav>

      {/* Bottom CTA Card — hidden when collapsed */}
      {isOpen && (
        <div className="mx-3 mb-3 bg-[#1C1C26] border border-[#2A2A38] rounded-[10px] p-3.5">
          <p className="text-[13px] font-semibold text-[#F0F0F8] leading-tight">
            Looking for something more?
          </p>
          <p className="text-[11px] text-[#55556A] mt-1.5 leading-snug">
            Open an issue or do reach out to me.
          </p>
        </div>
      )}

      {/* User Profile */}
      <div className="px-4 py-3 border-t border-[#2A2A38]">
        <div className={`flex items-center ${isOpen ? "gap-2.5" : "justify-center"}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#3B6FE8] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
            A
          </div>
          {isOpen && (
            <>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[13px] font-medium text-[#F0F0F8] truncate">Arham Khan</span>
                <span className="text-[11px] text-[#8888A4] truncate">hello@arhamkhnz.com</span>
              </div>
              <button className="text-[#55556A] hover:text-[#F0F0F8] transition-colors">
                <MoreVertical size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
