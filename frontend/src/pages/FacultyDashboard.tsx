import {
  FileText, BookOpen, Target, Users, Gift,
  ArrowRight, ArrowUpRight, Plus, Compass, Search,
  TrendingUp, Calendar, Clock, Eye, Download, Award
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";
import { useAuth } from "../hooks/useAuth";

export function FacultyDashboard() {
  const { user } = useAuth();
  
  const userName = user?.fullName || "Dr. Amina Hassan";

  // Top metric stats cards
  const metrics = [
    { label: "Research Projects", count: "8", detail: "Active", icon: FileText, color: "text-[#3B82F6]", bg: "bg-[#FFF7F2]/50" },
    { label: "Publications", count: "23", detail: "Total", icon: BookOpen, color: "text-[#12B76A]", bg: "bg-[#FFF7F2]/50" },
    { label: "Citations", count: "156", detail: "Total", icon: Target, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]" },
    { label: "Collaborations", count: "12", detail: "Active", icon: Users, color: "text-[#8B5CF6]", bg: "bg-purple-50/50" },
    { label: "Funding Opportunities", count: "4", detail: "New", icon: Gift, color: "text-[#06B6D4]", bg: "bg-cyan-50/50" },
  ];

  // Quick access grid list
  const quickAccess = [
    { label: "Upload Publication", icon: BookOpen, bg: "bg-blue-50 text-blue-600" },
    { label: "Find Collaborators", icon: Users, bg: "bg-orange-50 text-orange-600" },
    { label: "Browse Resources", icon: Search, bg: "bg-[#FFF7F2] text-[#F57C20]" },
    { label: "Submit Project", icon: FileText, bg: "bg-purple-50 text-purple-600" },
    { label: "My Projects", icon: Compass, bg: "bg-emerald-50 text-emerald-600" },
    { label: "Research Analytics", icon: TrendingUp, bg: "bg-indigo-50 text-indigo-600" },
    { label: "Mentor Students", icon: Users, bg: "bg-sky-50 text-sky-600" },
    { label: "Create Event", icon: Calendar, bg: "bg-rose-50 text-rose-600" },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
          <div>
            <h2 className="text-2xl font-black text-[#1B2559]">
              Welcome back, {userName.split(" ")[0] || "Dr. Amina"}! 👋
            </h2>
            <p className="text-xs font-semibold text-[#667085] mt-1">
              Advance research. Inspire innovation. Transform Africa.
            </p>
          </div>
        </div>

        {/* Top Metrics Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 flex items-start gap-3 shadow-xs text-left group cursor-pointer hover:border-[#F57C20]/45 transition-colors">
                <div className={`w-10 h-10 rounded-xl ${m.bg} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className={m.color} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-[#667085] leading-snug truncate block">{m.label}</span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-[#1B2559] leading-none">{m.count}</span>
                    <span className="text-[9px] font-bold text-[#98A2B3]">{m.detail}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 1: Research Overview, Research Areas, Recent Publications */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Research Overview Line Chart (xl:col-span-5) */}
          <div className="xl:col-span-5 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Research Overview</h4>
                <p className="text-[9px] text-[#667085] font-bold mt-0.5">Projects Over Time</p>
              </div>
              <select className="text-[9.5px] font-black text-[#667085] border border-[#ECE7E2] rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-[#F57C20]">
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative flex-grow flex items-center justify-center my-3">
              <svg viewBox="0 0 500 200" className="w-full h-44 overflow-visible">
                {/* Grid Lines */}
                <line x1="30" y1="20" x2="480" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="65" x2="480" y2="65" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="110" x2="480" y2="110" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="155" x2="480" y2="155" stroke="#E2E8F0" strokeWidth="1.5" />

                {/* Y Axis Numbers */}
                <text x="18" y="23" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="end">20</text>
                <text x="18" y="68" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="end">15</text>
                <text x="18" y="113" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="end">10</text>
                <text x="18" y="158" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="end">0</text>

                {/* Gradient area */}
                <defs>
                  <linearGradient id="researchGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 50 125 L 130 113.75 L 210 119 L 290 87.5 L 370 65 L 450 35 L 450 155 L 50 155 Z" fill="url(#researchGrad)" />

                {/* Main line path */}
                <path d="M 50 125 L 130 113.75 L 210 119 L 290 87.5 L 370 65 L 450 35" fill="none" stroke="#3B82F6" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Dots on coordinate path */}
                <circle cx="50" cy="125" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="130" cy="113.75" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="210" cy="119" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="290" cy="87.5" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="370" cy="65" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
                <circle cx="450" cy="35" r="4.5" fill="white" stroke="#3B82F6" strokeWidth="2.5" />

                {/* X Axis labels */}
                <text x="50" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Jan</text>
                <text x="130" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Feb</text>
                <text x="210" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Mar</text>
                <text x="290" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Apr</text>
                <text x="370" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">May</text>
                <text x="450" y="176" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Jun</text>
              </svg>
            </div>

            <button className="text-left text-[#3B82F6] hover:underline font-extrabold text-[10px] uppercase flex items-center gap-1 mt-1 self-start">
              <span>View full report</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Research Areas Donut Chart (xl:col-span-3) */}
          <div className="xl:col-span-3 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="border-b border-gray-100 pb-2.5">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Research Areas</h4>
            </div>

            {/* Donut graphic */}
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center my-3">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Segment 1: Blue (35%) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#3B82F6" strokeWidth="4.2" strokeDasharray="35 100" strokeDashoffset="0" />
                {/* Segment 2: Orange (25%) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F57C20" strokeWidth="4.2" strokeDasharray="25 100" strokeDashoffset="-35" />
                {/* Segment 3: Green (20%) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#12B76A" strokeWidth="4.2" strokeDasharray="20 100" strokeDashoffset="-60" />
                {/* Segment 4: Purple (10%) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#8B5CF6" strokeWidth="4.2" strokeDasharray="10 100" strokeDashoffset="-80" />
                {/* Segment 5: Other Grey (10%) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#CBD5E1" strokeWidth="4.2" strokeDasharray="10 100" strokeDashoffset="-90" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-black text-[#1B2559]">10</span>
                <span className="text-[8.5px] text-[#667085] font-bold uppercase tracking-wider leading-none">Focus Areas</span>
              </div>
            </div>

            {/* Legend checklist */}
            <div className="space-y-1.5 text-[9.5px] font-bold text-[#667085]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>Entrepreneurship</span>
                <span className="text-[#1B2559]">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#F57C20]"></span>Commercialization</span>
                <span className="text-[#1B2559]">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#12B76A]"></span>Innovation Systems</span>
                <span className="text-[#1B2559]">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>Policy & Leadership</span>
                <span className="text-[#1B2559]">10%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#CBD5E1]"></span>Other</span>
                <span className="text-[#1B2559]">10%</span>
              </div>
            </div>

            <button className="text-left text-[#F57C20] hover:underline font-extrabold text-[10px] uppercase flex items-center gap-1 mt-2.5 self-start">
              <span>Update areas</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Recent Publications (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Recent Publications</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 hover:bg-gray-50/50 p-1 rounded-xl transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight group-hover:text-[#F57C20] transition-colors truncate">Entrepreneurial Ecosystems in African Universities</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">International Journal of Innovation • May 2026</p>
                  <span className="inline-block text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 mt-1.5 uppercase">Published</span>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:bg-gray-50/50 p-1 rounded-xl transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight group-hover:text-[#F57C20] transition-colors truncate">Technology Transfer and Commercialization Models</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">African Review of Science • Apr 2026</p>
                  <span className="inline-block text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 mt-1.5 uppercase">Published</span>
                </div>
              </div>

              <div className="flex items-start gap-3 hover:bg-gray-50/50 p-1 rounded-xl transition-colors cursor-pointer group">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight group-hover:text-[#F57C20] transition-colors truncate">Innovation Capacity Building: A Case Study</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">Education & Development • Mar 2026</p>
                  <span className="inline-block text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 mt-1.5 uppercase">Published</span>
                </div>
              </div>
            </div>

            {/* Quick action submit link */}
            <button className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-[#3B82F6] hover:bg-blue-50/30 text-xs font-black text-[#3B82F6] py-2 shadow-xs transition-colors mt-3">
              <Plus size={14} />
              <span>Submit Publication</span>
            </button>
          </div>

        </div>

        {/* Row 2: Funding Opportunities, Collaborations, Upcoming Deadlines */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Funding Opportunities (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Funding Opportunities</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF7F2] text-[#F57C20] flex items-center justify-center shrink-0">
                    <Gift size={16} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-black text-[#1B2559] leading-snug truncate">Africa Research Excellence Fund (AREF)</h5>
                    <p className="text-[9px] text-red-500 font-semibold mt-1">Deadline: July 20, 2026</p>
                  </div>
                </div>
                <span className="text-[8.5px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase self-center">Open</span>
              </div>

              <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF7F2] text-[#F57C20] flex items-center justify-center shrink-0">
                    <Gift size={16} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-black text-[#1B2559] leading-snug truncate">Horizon Europe Collaboration Grant</h5>
                    <p className="text-[9px] text-[#667085] font-semibold mt-1">Deadline: Aug 15, 2026</p>
                  </div>
                </div>
                <span className="text-[8.5px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase self-center">Open</span>
              </div>

              <div className="flex items-start justify-between pb-1">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF7F2] text-[#F57C20] flex items-center justify-center shrink-0">
                    <Gift size={16} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11px] font-black text-[#1B2559] leading-snug truncate">NIH Global Research Program</h5>
                    <p className="text-[9px] text-[#98A2B3] font-semibold mt-1">Deadline: Sep 10, 2026</p>
                  </div>
                </div>
                <span className="text-[8.5px] font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-100 uppercase self-center">Upcoming</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-1 text-[10px] uppercase font-black text-white bg-[#F57C20] hover:bg-[#E86E12] py-2.5 rounded-xl shadow-md transition-colors mt-3">
              <span>Find More Grants</span>
              <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Collaborations List (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Collaborations</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=12" alt="John Mwangi" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-none">Prof. John Mwangi</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-1">University of Nairobi, Kenya</p>
                  </div>
                </div>
                <span className="text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=33" alt="Fatima Diallo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-none">Dr. Fatima Diallo</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-1">Cheikh Anta Diop University, Senegal</p>
                  </div>
                </div>
                <span className="text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=60" alt="Samuel Osei" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-none">Dr. Samuel Osei</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-1">Kwame Nkrumah University, Ghana</p>
                  </div>
                </div>
                <span className="text-[8px] font-extrabold px-2 py-0.5 rounded-md bg-blue-50 text-[#3B82F6] border border-blue-100 uppercase">Invite Sent</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-[#3B82F6] hover:bg-blue-50/20 text-xs font-black text-[#3B82F6] py-2 shadow-xs transition-colors mt-3">
              <Plus size={14} />
              <span>Invite Collaborator</span>
            </button>
          </div>

          {/* Upcoming Deadlines (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Upcoming Deadlines</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7F2] border border-[#ECE7E2] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[8px] font-black text-[#667085] uppercase leading-none">Jun</span>
                    <span className="text-lg font-black text-[#F57C20] leading-none mt-0.5">25</span>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight truncate">Research Proposal Submission</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">NEIL Innovation Grant</p>
                  </div>
                </div>
                <span className="text-[9px] font-black text-red-500 self-center shrink-0 ml-1">5 days left</span>
              </div>

              <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7F2] border border-[#ECE7E2] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[8px] font-black text-[#667085] uppercase leading-none">Jul</span>
                    <span className="text-lg font-black text-[#F57C20] leading-none mt-0.5">10</span>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight truncate">Progress Report</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">Venture Builder Program</p>
                  </div>
                </div>
                <span className="text-[9px] font-black text-[#F57C20] self-center shrink-0 ml-1">20 days left</span>
              </div>

              <div className="flex items-start justify-between pb-1">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7F2] border border-[#ECE7E2] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[8px] font-black text-[#667085] uppercase leading-none">Jul</span>
                    <span className="text-lg font-black text-[#F57C20] leading-none mt-0.5">30</span>
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[11.5px] font-black text-[#1B2559] leading-tight truncate">Conference Paper Submission</h5>
                    <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">African Innovation Conference 2026</p>
                  </div>
                </div>
                <span className="text-[9px] font-black text-gray-400 self-center shrink-0 ml-1">40 days left</span>
              </div>
            </div>

            <button className="w-full rounded-xl bg-[#1F2B6C] hover:bg-[#162052] py-2.5 text-xs font-black text-white shadow-md transition-colors mt-3 text-center">
              Open Calendar
            </button>
          </div>

        </div>

        {/* Row 3: Recent Activity, Research Impact, Quick Access */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Recent Activity List (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Recent Activity</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5">
                  <FileText size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-black text-[#1B2559] leading-tight">Research paper published</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5 leading-snug">Entrepreneurial Ecosystems in African Universities</p>
                  <span className="text-[8.5px] text-gray-400 font-bold block mt-1">2h ago</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#12B76A] flex items-center justify-center shrink-0 mt-0.5">
                  <Users size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-black text-[#1B2559] leading-tight">New collaboration established</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5 leading-snug">With Dr. Fatima Diallo</p>
                  <span className="text-[8.5px] text-gray-400 font-bold block mt-1">5h ago</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFF7F2] text-[#F57C20] flex items-center justify-center shrink-0 mt-0.5">
                  <Gift size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-black text-[#1B2559] leading-tight">Grant application submitted</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5 leading-snug">Africa Research Excellence Fund</p>
                  <span className="text-[8.5px] text-gray-400 font-bold block mt-1">1d ago</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#8B5CF6] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={15} />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-[11px] font-black text-[#1B2559] leading-tight">Dataset uploaded</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5 leading-snug">Innovation Survey Data 2026</p>
                  <span className="text-[8.5px] text-gray-400 font-bold block mt-1">2d ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Impact Cards (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2.5 mb-3">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Research Impact</h4>
              </div>
              <select className="text-[9.5px] font-black text-[#667085] border border-[#ECE7E2] rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-[#F57C20]">
                <option>This Year</option>
                <option>All Time</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-grow my-1">
              <div className="border border-[#ECE7E2] bg-slate-50/20 rounded-2xl p-3.5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] font-black text-[#667085] uppercase tracking-wider">Citations</span>
                  <Users size={15} className="text-[#8B5CF6]" />
                </div>
                <div className="mt-3">
                  <span className="text-xl font-black text-[#1B2559]">56</span>
                  <div className="flex items-center gap-1 text-[8.5px] text-emerald-500 font-extrabold mt-1">
                    <TrendingUp size={11} />
                    <span>18%</span>
                  </div>
                </div>
              </div>

              <div className="border border-[#ECE7E2] bg-slate-50/20 rounded-2xl p-3.5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] font-black text-[#667085] uppercase tracking-wider">Downloads</span>
                  <Download size={15} className="text-[#F57C20]" />
                </div>
                <div className="mt-3">
                  <span className="text-xl font-black text-[#1B2559]">320</span>
                  <div className="flex items-center gap-1 text-[8.5px] text-emerald-500 font-extrabold mt-1">
                    <TrendingUp size={11} />
                    <span>22%</span>
                  </div>
                </div>
              </div>

              <div className="border border-[#ECE7E2] bg-slate-50/20 rounded-2xl p-3.5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] font-black text-[#667085] uppercase tracking-wider">Profile Views</span>
                  <Eye size={15} className="text-emerald-500" />
                </div>
                <div className="mt-3">
                  <span className="text-xl font-black text-[#1B2559]">1.2K</span>
                  <div className="flex items-center gap-1 text-[8.5px] text-emerald-500 font-extrabold mt-1">
                    <TrendingUp size={11} />
                    <span>35%</span>
                  </div>
                </div>
              </div>

              <div className="border border-[#ECE7E2] bg-slate-50/20 rounded-2xl p-3.5 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9.5px] font-black text-[#667085] uppercase tracking-wider">Altmetric</span>
                  <Award size={15} className="text-[#3B82F6]" />
                </div>
                <div className="mt-3">
                  <span className="text-xl font-black text-[#1B2559]">85</span>
                  <div className="flex items-center gap-1 text-[8.5px] text-emerald-500 font-extrabold mt-1">
                    <TrendingUp size={11} />
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Buttons Grid (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[350px]">
            <div className="border-b border-gray-100 pb-2.5 mb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Quick Access</h4>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-grow my-1">
              {quickAccess.map((qa, idx) => {
                const Icon = qa.icon;
                return (
                  <button key={idx} className="flex flex-col items-center justify-center p-3 border border-[#ECE7E2] rounded-[18px] hover:border-[#F57C20] hover:bg-[#FFF7F2]/15 transition-all text-center group">
                    <div className={`w-9 h-9 rounded-full ${qa.bg} flex items-center justify-center transition-all group-hover:scale-108`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-[9.5px] font-black text-[#1B2559] mt-2.5 leading-tight group-hover:text-[#F57C20] transition-colors">
                      {qa.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </PortalLayout>
  );
}
