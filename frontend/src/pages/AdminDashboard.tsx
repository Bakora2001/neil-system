import {
  Users, Building2, LayoutGrid, Calendar, FileText,
  Activity, CheckCircle, PlusCircle, ArrowUpRight, BarChart3,
  Settings, Download, ChevronRight
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";

export function AdminDashboard() {
  const metrics = [
    { label: "Total Users", count: "12,845", change: "+18.6%", detail: "vs last month", icon: Users, color: "text-[#8B5CF6]", bg: "bg-purple-50/70" },
    { label: "Institutions", count: "248", change: "+12.4%", detail: "vs last month", icon: Building2, color: "text-[#3B82F6]", bg: "bg-blue-50/70" },
    { label: "Programs", count: "156", change: "+15.7%", detail: "vs last month", icon: LayoutGrid, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]" },
    { label: "Events", count: "92", change: "+10.3%", detail: "vs last month", icon: Calendar, color: "text-[#12B76A]", bg: "bg-emerald-50/70" },
    { label: "Content Items", count: "1,483", change: "+22.1%", detail: "vs last month", icon: FileText, color: "text-[#8B5CF6]", bg: "bg-purple-50/70" },
    { label: "Active Sessions", count: "1,256", change: "+8.7%", detail: "vs last month", icon: Activity, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]" },
  ];

  const distribution = [
    { name: "Students", count: "7,245", pct: "56%", color: "bg-[#3B82F6]" },
    { name: "Faculty", count: "2,156", pct: "17%", color: "bg-[#F57C20]" },
    { name: "Institution Staff", count: "1,895", pct: "15%", color: "bg-[#12B76A]" },
    { name: "Researchers", count: "1,049", pct: "8%", color: "bg-[#8B5CF6]" },
    { name: "Admins", count: "500", pct: "4%", color: "bg-gray-400" },
  ];

  const systemHealth = [
    { name: "Server Status", val: "Operational", status: "ok" },
    { name: "Database", val: "Operational", status: "ok" },
    { name: "Storage Usage", val: "65% of 2 TB used", status: "progress" },
    { name: "Backup Status", val: "Last backup: 2 hrs ago", status: "ok" },
    { name: "Security Status", val: "All systems secure", status: "ok" },
  ];

  const recentActivities = [
    { text: "New user registered", desc: "John Mwangi (Student)", time: "2 min ago", icon: Users, bg: "bg-blue-50 text-blue-500" },
    { text: "Content published", desc: "Innovation Playbook 2026", time: "15 min ago", icon: FileText, bg: "bg-purple-50 text-purple-500" },
    { text: "New institution added", desc: "Kisii University", time: "1 hr ago", icon: Building2, bg: "bg-[#FFF7F2] text-[#F57C20]" },
    { text: "Program created", desc: "AI for Social Good Toolkit", time: "2 hrs ago", icon: LayoutGrid, bg: "bg-emerald-50 text-emerald-500" },
    { text: "System backup completed", desc: "Auto backup completed successfully", time: "3 hrs ago", status: "success", icon: CheckCircle, bg: "bg-emerald-50 text-emerald-500" },
  ];

  const topInstitutions = [
    { name: "Strathmore University", count: "1,245 users" },
    { name: "University of Nairobi", count: "987 users" },
    { name: "Kenyatta University", count: "876 users" },
    { name: "Jomo Kenyatta University", count: "654 users" },
    { name: "Moi University", count: "543 users" },
  ];

  const quickActions = [
    { label: "Add New User", icon: Users },
    { label: "Add Institution", icon: Building2 },
    { label: "Create Program", icon: PlusCircle },
    { label: "Publish Content", icon: FileText },
    { label: "Generate Report", icon: BarChart3 },
    { label: "System Settings", icon: Settings },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Top Header & Actions Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
          <div>
            <h2 className="text-2xl font-black text-[#1B2559]">Welcome back, Admin! 👋</h2>
            <p className="text-xs font-semibold text-[#667085] mt-1">
              Here's what's happening across the NEIL platform today.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 w-full md:w-auto shrink-0">
            <select className="bg-[#FFF7F2] border border-[#ECE7E2] rounded-xl px-4 py-2.5 text-xs font-black text-[#667085] outline-none cursor-pointer">
              <option>May 27, 2026 - Jun 27, 2026</option>
            </select>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F57C20] hover:bg-[#E86E12] text-xs font-black text-white shadow-md transition-colors">
              <Download size={14} />
              <span>Download Report</span>
            </button>
          </div>
        </div>

        {/* 6 Metric Stats Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 flex items-start gap-2.5 shadow-xs text-left group hover:border-[#F57C20]/45 transition-colors duration-200">
                <div className={`w-9 h-9 rounded-xl ${m.bg} flex items-center justify-center shrink-0`}>
                  <Icon size={16} className={m.color} />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-black text-[#98A2B3] uppercase tracking-wider block">{m.label}</span>
                  <span className="text-xl font-black text-[#1B2559] block mt-0.5 leading-none">{m.count}</span>
                  <span className="text-[8.5px] font-bold text-[#12B76A] mt-1.5 block leading-none">
                    {m.change} <span className="text-gray-400 font-medium">{m.detail}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row: Platform Overview, User Distribution, System Health */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Platform Overview Line Chart (xl:col-span-5) */}
          <div className="xl:col-span-5 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Platform Overview</h4>
                <div className="flex items-center gap-3 mt-1.5 text-[9px] font-bold text-[#667085]">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /> Users
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F57C20]" /> Sessions
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#102A5B]" /> Page Views
                  </span>
                </div>
              </div>
              <select className="text-[9.5px] font-black text-[#667085] border border-[#ECE7E2] rounded-lg px-2.5 py-1 outline-none focus:ring-1 focus:ring-[#F57C20] cursor-pointer">
                <option>This Month</option>
              </select>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative flex-grow flex items-center justify-center my-3">
              <svg viewBox="0 0 500 180" className="w-full h-40 overflow-visible">
                <line x1="30" y1="20" x2="480" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="55" x2="480" y2="55" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="90" x2="480" y2="90" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="125" x2="480" y2="125" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="160" x2="480" y2="160" stroke="#E2E8F0" strokeWidth="1.5" />

                <text x="18" y="23" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">5K</text>
                <text x="18" y="58" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">4K</text>
                <text x="18" y="93" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">3K</text>
                <text x="18" y="128" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">2K</text>
                <text x="18" y="163" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="end">1K</text>

                {/* Shaded Area for Page Views */}
                <path d="M 40 135 L 120 120 L 200 115 L 280 100 L 360 90 L 440 70 L 440 160 L 40 160 Z" fill="#102A5B" fillOpacity="0.03" />

                {/* Shaded Area for Sessions */}
                <path d="M 40 120 L 120 100 L 200 95 L 280 80 L 360 75 L 440 55 L 440 160 L 40 160 Z" fill="#F57C20" fillOpacity="0.05" />

                {/* Shaded Area for Users */}
                <path d="M 40 100 L 120 75 L 200 80 L 280 50 L 360 45 L 440 25 L 440 160 L 40 160 Z" fill="#3B82F6" fillOpacity="0.05" />

                {/* Line Graphs */}
                <path d="M 40 135 L 120 120 L 200 115 L 280 100 L 360 90 L 440 70" fill="none" stroke="#102A5B" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 40 120 L 120 100 L 200 95 L 280 80 L 360 75 L 440 55" fill="none" stroke="#F57C20" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 40 100 L 120 75 L 200 80 L 280 50 L 360 45 L 440 25" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />

                {/* Dots */}
                <circle cx="440" cy="70" r="3.5" fill="#FFFFFF" stroke="#102A5B" strokeWidth="2" />
                <circle cx="440" cy="55" r="3.5" fill="#FFFFFF" stroke="#F57C20" strokeWidth="2" />
                <circle cx="440" cy="25" r="3.5" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="2" />

                <text x="40" y="175" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">May 27</text>
                <text x="120" y="175" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jun 3</text>
                <text x="200" y="175" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jun 10</text>
                <text x="280" y="175" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jun 17</text>
                <text x="360" y="175" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jun 24</text>
              </svg>
            </div>
            
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-2">
              <span>View full analytics</span>
              <ArrowUpRight size={13} className="mt-0.5" />
            </button>
          </div>

          {/* User Distribution Donut (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">User Distribution</h4>
            
            <div className="relative w-36 h-36 mx-auto my-3 flex items-center justify-center">
              <svg viewBox="0 0 180 180" className="w-full h-full transform -rotate-90">
                {/* Circ: 377. Let's make sectors:
                  - Students (56%): 211
                  - Faculty (17%): 64
                  - Institution Staff (15%): 56
                  - Researchers (8%): 30
                  - Admins (4%): 15
                */}
                <circle cx="90" cy="90" r="60" stroke="#3B82F6" strokeWidth="18" fill="transparent" strokeDasharray="211 377" strokeDashoffset="0" />
                <circle cx="90" cy="90" r="60" stroke="#F57C20" strokeWidth="18" fill="transparent" strokeDasharray="64 377" strokeDashoffset="-211" />
                <circle cx="90" cy="90" r="60" stroke="#12B76A" strokeWidth="18" fill="transparent" strokeDasharray="56 377" strokeDashoffset="-275" />
                <circle cx="90" cy="90" r="60" stroke="#8B5CF6" strokeWidth="18" fill="transparent" strokeDasharray="30 377" strokeDashoffset="-331" />
                <circle cx="90" cy="90" r="60" stroke="#94A3B8" strokeWidth="18" fill="transparent" strokeDasharray="16 377" strokeDashoffset="-361" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none mt-1">
                <span className="text-xl font-black text-[#1B2559] leading-none">12,845</span>
                <span className="text-[8.5px] font-bold text-[#98A2B3] mt-1 uppercase tracking-wider">Total Users</span>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-gray-100 pt-3">
              {distribution.map((d, idx) => (
                <div key={idx} className="flex items-center justify-between text-[10px] font-bold text-[#667085]">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${d.color}`} />
                    <span>{d.name}</span>
                  </div>
                  <span className="text-[#1B2559] font-black">{d.count} ({d.pct})</span>
                </div>
              ))}
            </div>

            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-2">
              <span>View detailed report</span>
              <ArrowUpRight size={13} className="mt-0.5" />
            </button>
          </div>

          {/* System Health (xl:col-span-3) */}
          <div className="xl:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">System Health</h4>
              <div className="mt-4 space-y-4">
                {systemHealth.map((h, idx) => (
                  <div key={idx} className="text-left">
                    <div className="flex justify-between items-center text-[11px] font-black text-[#1B2559]">
                      <span className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-emerald-500" />
                        {h.name}
                      </span>
                      <span className={h.status === "ok" ? "text-emerald-500 text-[10px]" : "text-[#1B2559]"}>{h.status === "ok" ? h.val : ""}</span>
                    </div>
                    {h.status === "progress" && (
                      <div className="mt-2">
                        <div className="w-full bg-[#FFF7F2] h-2 rounded-full overflow-hidden border border-[#ECE7E2]">
                          <div className="bg-[#3B82F6] h-full rounded-full" style={{ width: "65%" }} />
                        </div>
                        <span className="text-[9px] font-bold text-[#98A2B3] mt-1 block">{h.val}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all</span>
              <ArrowUpRight size={13} className="mt-0.5" />
            </button>
          </div>

        </div>

        {/* Third Row: Recent Activities, User Growth bar chart, Top Institutions, System Usage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Recent Activities (col-span-3) */}
          <div className="lg:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Recent Activities</h4>
              <div className="mt-4 space-y-3.5">
                {recentActivities.slice(0, 4).map((act, idx) => {
                  const Icon = act.icon;
                  return (
                    <div key={idx} className="flex gap-2.5 text-left">
                      <div className={`w-8 h-8 rounded-full ${act.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-black text-[#1B2559] leading-tight truncate">{act.text}</p>
                        <p className="text-[9px] font-bold text-[#98A2B3] leading-none mt-1 truncate">{act.desc}</p>
                      </div>
                      <span className="text-[8.5px] font-bold text-[#98A2B3] shrink-0 self-start mt-0.5">{act.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

          {/* User Growth Bar Chart (col-span-3) */}
          <div className="lg:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">User Growth</h4>
                <p className="text-[9px] font-black text-[#12B76A] mt-0.5">12,845 <span className="text-gray-400 font-medium">total users (+18.6%)</span></p>
              </div>
              <select className="text-[9px] font-black text-[#667085] border border-[#ECE7E2] rounded-lg px-2 py-0.5 outline-none cursor-pointer">
                <option>This Year</option>
              </select>
            </div>

            {/* SVG Bar Chart */}
            <div className="relative flex-grow flex items-center justify-center my-3">
              <svg viewBox="0 0 200 120" className="w-full h-32 overflow-visible">
                {/* Horizontal lines */}
                <line x1="20" y1="10" x2="190" y2="10" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="20" y1="40" x2="190" y2="40" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="20" y1="70" x2="190" y2="70" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="20" y1="100" x2="190" y2="100" stroke="#E2E8F0" strokeWidth="1.5" />

                {/* Bars */}
                {/* Jan (30%), Feb (40%), Mar (55%), Apr (65%), May (75%), Jun (90%) */}
                <rect x="30" y="70" width="12" height="30" fill="#3B82F6" rx="2" />
                <rect x="56" y="60" width="12" height="40" fill="#3B82F6" rx="2" />
                <rect x="82" y="45" width="12" height="55" fill="#3B82F6" rx="2" />
                <rect x="108" y="35" width="12" height="65" fill="#3B82F6" rx="2" />
                <rect x="134" y="25" width="12" height="75" fill="#3B82F6" rx="2" />
                <rect x="160" y="10" width="12" height="90" fill="#3B82F6" rx="2" />

                <text x="36" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jan</text>
                <text x="62" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Feb</text>
                <text x="88" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Mar</text>
                <text x="114" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Apr</text>
                <text x="140" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">May</text>
                <text x="166" y="112" fill="#94A3B8" fontSize="8" fontWeight="bold" textAnchor="middle">Jun</text>
              </svg>
            </div>

            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-2">
              <span>View growth report</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Top Institutions (col-span-3) */}
          <div className="lg:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <div>
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Top Institutions</h4>
              <div className="mt-4 space-y-3">
                {topInstitutions.map((inst, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#FFF7F2] border border-[#ECE7E2] flex items-center justify-center text-[#F57C20] shrink-0 font-black text-xs">
                        {inst.name.charAt(0)}
                      </div>
                      <span className="text-[11px] font-black text-[#1B2559] truncate leading-tight">{inst.name}</span>
                    </div>
                    <span className="text-[9.5px] font-black text-[#667085] ml-2 shrink-0">{inst.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
              <span>View all</span>
              <ChevronRight size={12} className="mt-0.5" />
            </button>
          </div>

          {/* System Usage Gauge Donut (col-span-3) */}
          <div className="lg:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">System Usage</h4>
            
            <div className="relative w-32 h-32 mx-auto my-3 flex items-center justify-center">
              <svg viewBox="0 0 180 180" className="w-full h-full transform -rotate-90">
                <circle cx="90" cy="90" r="60" stroke="#ECE7E2" strokeWidth="18" fill="transparent" />
                <circle cx="90" cy="90" r="60" stroke="#F57C20" strokeWidth="18" fill="transparent" strokeDasharray="245 377" strokeDashoffset="0" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none mt-1">
                <span className="text-xl font-black text-[#1B2559] leading-none">65%</span>
                <span className="text-[8px] font-bold text-[#98A2B3] mt-1 uppercase tracking-wider">Used</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[9px] font-bold text-[#667085] border-t border-gray-150 pt-3">
              <div className="text-left">
                <p className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3B82F6]" /> Storage Used</p>
                <p className="text-[#1B2559] font-black mt-0.5">1.3 TB</p>
              </div>
              <div className="text-left">
                <p className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300" /> Storage Avail</p>
                <p className="text-[#1B2559] font-black mt-0.5">0.7 TB</p>
              </div>
              <div className="text-left">
                <p className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#F57C20]" /> Bandwidth Used</p>
                <p className="text-[#1B2559] font-black mt-0.5">650 GB</p>
              </div>
              <div className="text-left">
                <p className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#12B76A]" /> Bandwidth Avail</p>
                <p className="text-[#1B2559] font-black mt-0.5">350 GB</p>
              </div>
            </div>

            <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-2">
              <span>View usage details</span>
              <ArrowUpRight size={13} className="mt-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Row: Quick Actions */}
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
                  <span className="text-[10.5px] font-black text-[#1B2559] tracking-wide">{a.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </PortalLayout>
  );
}
