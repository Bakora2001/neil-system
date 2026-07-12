import {
  Eye, UserPlus, Download, Calendar, FileText,
  Mail, Building2, Folder, LayoutGrid, CheckCircle2,
  Clock, PlusCircle, CalendarPlus, ChevronRight, PenSquare
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";

export function SecretariatDashboard() {
  const stats = [
    { label: "Website Visitors", count: "12.4K", change: "+16.8%", icon: Eye, color: "text-[#3B82F6]", bg: "bg-[#FFF7F2]/50" },
    { label: "Member Growth", count: "240", change: "+12.9%", icon: UserPlus, color: "text-[#12B76A]", bg: "bg-[#FFF7F2]/50" },
    { label: "Resource Downloads", count: "1.2K", change: "+22.4%", icon: Download, color: "text-[#06B6D4]", bg: "bg-cyan-50/50" },
    { label: "Event Registrations", count: "320", change: "+15.3%", icon: Calendar, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]" },
  ];

  const topContent = [
    { title: "Innovation Playbook 2026", views: "2.1K" },
    { title: "Startup Funding Guide", views: "1.8K" },
    { title: "NEIL Impact Report", views: "1.3K" },
    { title: "Research Commercialization", views: "1.1K" },
  ];

  const upcomingEvents = [
    {
      title: "NEIL Innovation Summit 2026",
      date: "May 25, 2026",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=120&auto=format&fit=crop&q=60"
    },
    {
      title: "Venture Builder Bootcamp",
      date: "May 30, 2026",
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=120&auto=format&fit=crop&q=60"
    },
    {
      title: "Research Commercialization Webinar",
      date: "June 03, 2026",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=120&auto=format&fit=crop&q=60"
    }
  ];

  const quickActions = [
    { label: "Add Blog Post", icon: PenSquare },
    { label: "Upload Resource", icon: Download },
    { label: "Create Event", icon: CalendarPlus },
    { label: "Send Newsletter", icon: Mail },
    { label: "Add Program", icon: PlusCircle },
    { label: "View Reports", icon: FileText },
  ];

  const contentStatus = [
    { label: "Published", value: 60, color: "bg-[#3B82F6]" },
    { label: "Draft", value: 20, color: "bg-[#F57C20]" },
    { label: "In Review", value: 10, color: "bg-[#10B981]" },
    { label: "Scheduled", value: 10, color: "bg-[#8B5CF6]" },
  ];

  const memberOverview = [
    { label: "Total Members", count: "2,850", icon: UsersIcon, bg: "bg-purple-50 text-purple-600" },
    { label: "Approved This Month", count: "120", icon: CheckCircle2, bg: "bg-emerald-50 text-emerald-600" },
    { label: "Pending Approvals", count: "35", icon: Clock, bg: "bg-[#FFF7F2] text-[#F57C20]" },
    { label: "Institution Members", count: "68", icon: Building2, bg: "bg-blue-50 text-blue-600" },
  ];

  const recentActivity = [
    { text: "New blog post published", desc: "AI for Social Good Toolkit", time: "2h ago", icon: PenSquare, bg: "bg-[#FFF7F2] text-[#F57C20]" },
    { text: "New member registered", desc: "Strathmore University", time: "5h ago", icon: UserPlus, bg: "bg-emerald-50 text-emerald-600" },
    { text: "Resource downloaded", desc: "Commercialization Toolkit", time: "1d ago", icon: Download, bg: "bg-blue-50 text-blue-600" },
    { text: "Event registration received", desc: "NEIL Innovation Summit 2026", time: "2d ago", icon: Calendar, bg: "bg-emerald-50 text-emerald-600" },
    { text: "Newsletter sent", desc: "May 2026 Edition", time: "3d ago", icon: Mail, bg: "bg-[#FFF7F2] text-[#F57C20]" },
  ];

  const summaries = [
    { label: "Blog Posts", count: 42, icon: FileText, color: "text-[#1B2559]" },
    { label: "Resources", count: 78, icon: Folder, color: "text-[#F57C20]" },
    { label: "Events", count: 26, icon: Calendar, color: "text-[#3B82F6]" },
    { label: "Programs", count: 18, icon: LayoutGrid, color: "text-[#8B5CF6]" },
    { label: "Institutions", count: 96, icon: Building2, color: "text-[#102A5B]" },
    { label: "Newsletters", count: 12, icon: Mail, color: "text-[#10B981]" },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Header Title Section */}
        <div className="text-left">
          <h2 className="text-2xl font-black text-[#1B2559]">Secretariat Dashboard</h2>
          <p className="text-xs font-semibold text-[#667085] mt-1">
            Manage content. Empower members. Drive impact.
          </p>
        </div>

        {/* Top Metric Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-5 flex items-center justify-between shadow-xs text-left group hover:border-[#F57C20]/45 transition-colors duration-200">
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-[#98A2B3] uppercase tracking-wider block">{m.label}</span>
                  <span className="text-2xl font-black text-[#1B2559] block mt-1 leading-none">{m.count}</span>
                  <span className="text-[10px] font-bold text-[#12B76A] mt-1.5 inline-flex items-center gap-1">
                    <span className="text-xs">↑</span> {m.change}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-full ${m.bg} flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={m.color} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row: Traffic Chart, Top Content, Upcoming Events */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Traffic Overview Chart (xl:col-span-5) */}
          <div className="xl:col-span-5 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Traffic Overview</h4>
                <div className="flex items-center gap-3 mt-1 text-[9px] font-bold text-[#667085]">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /> Visitors
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F57C20]" /> Page Views
                  </span>
                </div>
              </div>
              <select className="text-[9.5px] font-black text-[#667085] border border-[#ECE7E2] rounded-lg px-2.5 py-1 outline-none focus:ring-1 focus:ring-[#F57C20] cursor-pointer">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative flex-grow flex items-center justify-center my-4">
              <svg viewBox="0 0 500 200" className="w-full h-44 overflow-visible">
                {/* Grid Lines */}
                <line x1="30" y1="20" x2="480" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="57.5" x2="480" y2="57.5" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="95" x2="480" y2="95" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="132.5" x2="480" y2="132.5" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="170" x2="480" y2="170" stroke="#E2E8F0" strokeWidth="1.5" />

                {/* Y Axis Labels */}
                <text x="18" y="23" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">3000</text>
                <text x="18" y="60.5" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">2000</text>
                <text x="18" y="98" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">1000</text>
                <text x="18" y="173" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">0</text>

                {/* Area gradients definitions */}
                <defs>
                  <linearGradient id="visitorsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F57C20" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#F57C20" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Shaded Areas */}
                <path d="M 40 110 L 120 70 L 200 80 L 280 45 L 360 60 L 440 20 L 440 170 L 40 170 Z" fill="url(#visitorsGrad)" />
                <path d="M 40 130 L 120 100 L 200 95 L 280 110 L 360 85 L 440 60 L 440 170 L 40 170 Z" fill="url(#viewsGrad)" />

                {/* Line Graphs */}
                <path d="M 40 110 L 120 70 L 200 80 L 280 45 L 360 60 L 440 20" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 40 130 L 120 100 L 200 95 L 280 110 L 360 85 L 440 60" fill="none" stroke="#F57C20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Data Points - Visitors */}
                <circle cx="40" cy="110" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="120" cy="70" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="200" cy="80" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="280" cy="45" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="360" cy="60" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="440" cy="20" r="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2.5" />

                {/* Data Points - Page Views */}
                <circle cx="40" cy="130" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="120" cy="100" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="200" cy="95" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="280" cy="110" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="360" cy="85" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="440" cy="60" r="4" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2.5" />

                {/* X Axis Labels */}
                <text x="40" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Jan</text>
                <text x="120" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Feb</text>
                <text x="200" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Mar</text>
                <text x="280" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Apr</text>
                <text x="360" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">May</text>
                <text x="440" y="190" fill="#94A3B8" fontSize="8.5" fontWeight="bold" textAnchor="middle">Jun</text>
              </svg>
            </div>
          </div>

          {/* Top Performing Content (xl:col-span-3) */}
          <div className="xl:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Top Performing Content</h4>
              <div className="mt-4 space-y-3.5">
                {topContent.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50/70 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-500">
                        <FileText size={15} />
                      </div>
                      <span className="text-[11px] font-black text-[#1B2559] truncate leading-tight">{c.title}</span>
                    </div>
                    <span className="text-[10px] font-black text-[#667085] ml-2 shrink-0">{c.views}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all content</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

          {/* Upcoming Events (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Upcoming Events</h4>
              <div className="mt-4 space-y-3.5">
                {upcomingEvents.map((e, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                      <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black text-[#1B2559] leading-tight truncate">{e.title}</p>
                      <p className="text-[9.5px] font-bold text-[#98A2B3] mt-0.5">{e.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all events</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

        </div>

        {/* Quick Actions Row */}
        <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left">
          <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider mb-4">Quick Actions</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickActions.map((a, idx) => {
              const Icon = a.icon;
              return (
                <button key={idx} className="bg-white border border-[#ECE7E2] rounded-xl py-3 px-4 flex flex-col items-center justify-center gap-2 hover:border-[#F57C20]/45 hover:bg-[#FFF7F2]/10 transition-all duration-200 group text-center">
                  <div className="w-8 h-8 rounded-full bg-[#FFF7F2] text-[#F57C20] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-200">
                    <Icon size={15} />
                  </div>
                  <span className="text-[10px] font-black text-[#1B2559] tracking-wide">{a.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Third Row: Content Status, Member Overview, Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Content Status (Donut Chart) */}
          <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Content Status</h4>
              <div className="relative w-36 h-36 mx-auto my-4 flex items-center justify-center">
                <svg viewBox="0 0 180 180" className="w-full h-full transform -rotate-90">
                  <circle cx="90" cy="90" r="60" stroke="#3B82F6" strokeWidth="18" fill="transparent" strokeDasharray="226.2 377" strokeDashoffset="0" />
                  <circle cx="90" cy="90" r="60" stroke="#F57C20" strokeWidth="18" fill="transparent" strokeDasharray="75.4 377" strokeDashoffset="-226.2" />
                  <circle cx="90" cy="90" r="60" stroke="#10B981" strokeWidth="18" fill="transparent" strokeDasharray="37.7 377" strokeDashoffset="-301.6" />
                  <circle cx="90" cy="90" r="60" stroke="#8B5CF6" strokeWidth="18" fill="transparent" strokeDasharray="37.7 377" strokeDashoffset="-339.3" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none mt-1">
                  <span className="text-2xl font-black text-[#1B2559] leading-none">120</span>
                  <span className="text-[9px] font-bold text-[#98A2B3] mt-1 uppercase tracking-wide">Total Content</span>
                </div>
              </div>
              
              {/* Legend grid */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-[#667085] my-2 pt-2 border-t border-gray-50">
                {contentStatus.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0`} />
                    <span className="truncate">{s.label} ({s.value}%)</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View content library</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

          {/* Member Overview */}
          <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Member Overview</h4>
              <div className="mt-4 space-y-3.5">
                {memberOverview.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                          <Icon size={15} />
                        </div>
                        <span className="text-[11px] font-black text-[#667085] leading-tight">{item.label}</span>
                      </div>
                      <span className="text-sm font-black text-[#1B2559]">{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>Manage members</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Recent Activity</h4>
              <div className="mt-4 space-y-3">
                {recentActivity.map((act, idx) => {
                  const Icon = act.icon;
                  return (
                    <div key={idx} className="flex gap-3 text-left">
                      <div className={`w-8 h-8 rounded-full ${act.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-black text-[#1B2559] leading-tight truncate">{act.text}</p>
                        <p className="text-[9.5px] font-bold text-[#667085] leading-tight mt-0.5 truncate">{act.desc}</p>
                      </div>
                      <span className="text-[9px] font-bold text-[#98A2B3] shrink-0 self-start mt-0.5">{act.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all activity</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Summary Cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {summaries.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 flex items-center gap-3 shadow-xs text-left hover:border-[#F57C20]/30 transition-colors duration-200">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 text-gray-400">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-bold text-[#98A2B3] uppercase tracking-wider block">{s.label}</span>
                  <span className={`text-base font-black ${s.color} block mt-0.5 leading-none`}>{s.count}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </PortalLayout>
  );
}

// Temporary internal component to avoid icon import issues
function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
