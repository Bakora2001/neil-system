import { useEffect, useState } from "react";
import {
  Building2, Users, GraduationCap, BookOpen,
  ArrowRight, Clock, ShieldCheck, CheckCircle2,
  TrendingUp, Compass, ArrowUpRight
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";
import { useAuth } from "../hooks/useAuth";
import { getInstitution } from "../lib/api-client";

interface InstitutionData {
  id: string;
  name: string;
  country: string;
  membershipType: "FOUNDATIONAL" | "ASSOCIATE" | "FULL" | "CORPORATE";
  logoUrl: string | null;
  joinedAt: string;
}

export function InstitutionDashboard() {
  const { user } = useAuth();
  const [institution, setInstitution] = useState<InstitutionData | null>(null);

  // Fallback / Mock metadata for Strathmore VC / Institution representation
  const defaultMeta = {
    innovationScore: 84,
    studentsSupported: 180,
    facultyMembers: 24,
    eventsHosted: 8,
    resourcesShared: 12,
    commercializationProjects: 6,
    membershipRenewalDate: "August 15, 2026",
    membershipLevel: "Full Member Tier 1",
  };

  useEffect(() => {
    async function fetchDetails() {
      if (user?.institutionId) {
        try {
          const res = await getInstitution(user.institutionId);
          if (res && res.institution) {
            setInstitution(res.institution);
          }
        } catch (err) {
          console.error("Failed to load institution profile:", err);
        }
      }
    }
    fetchDetails();
  }, [user]);

  // Use loaded institution or mock fallback if none is linked to the user
  const instName = institution?.name || "Strathmore University";
  const instCountry = institution?.country || "Kenya";
  const instMemberType = institution?.membershipType || "FULL";
  const instJoinedDate = institution?.joinedAt
    ? new Date(institution.joinedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })
    : "January 2025";

  // KPIs
  const stats = [
    { label: "Students Supported", count: defaultMeta.studentsSupported, icon: Users, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]", desc: "Direct platform users" },
    { label: "Faculty Researchers", count: defaultMeta.facultyMembers, icon: GraduationCap, color: "text-blue-600", bg: "bg-[#FFF7F2]/50", desc: "Submitted case studies" },
    { label: "Programs Participated", count: defaultMeta.eventsHosted, icon: Compass, color: "text-indigo-600", bg: "bg-indigo-50/50", desc: "Active workspaces" },
    { label: "Resources Contributed", count: defaultMeta.resourcesShared, icon: BookOpen, color: "text-emerald-600", bg: "bg-[#FFF7F2]/50", desc: "Shared in Knowledge Hub" },
  ];

  // Projects donut data
  const commercializationData = {
    completed: 3,
    pending: 2,
    remaining: 1,
    total: 6
  };

  // Timeline activities
  const activities = [
    { title: "Research Submitted", detail: "Dr. Sarah Wanjiku uploaded 'AI in Crop Monitoring'", time: "2 hours ago", type: "research" },
    { title: "Student Enrolled", detail: "45 students joined KNEIL Venture Builder 2026", time: "1 day ago", type: "student" },
    { title: "Event Hosted", detail: "Hosted regional 'IP Licensing & TTO Workshop'", time: "3 days ago", type: "event" },
    { title: "Shared Resource", detail: "TTO uploaded Strathmore Commercialization Playbook", time: "1 week ago", type: "resource" },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Welcome & Institution Profile Header */}
        <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-[16px] bg-[#FFF7F2] border border-[#ECE7E2] flex items-center justify-center text-[#F57C20] shrink-0 font-black text-2xl">
              {instName.charAt(0)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-black text-[#1B2559] leading-tight">
                  {instName} Workspace
                </h2>
                <span className={`text-[9.5px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                  instMemberType === "FULL"
                    ? "bg-[#FFF7F2] border-[#ECE7E2] text-[#F57C20]"
                    : "bg-blue-50 border-blue-100 text-blue-600"
                }`}>
                  {instMemberType} MEMBER
                </span>
              </div>
              <p className="text-xs font-semibold text-[#667085] mt-1.5 flex items-center gap-1.5">
                <Building2 size={13} className="text-gray-400" />
                <span>{instCountry} • Ecosystem Hub</span>
                <span className="text-gray-300">|</span>
                <Clock size={13} className="text-gray-400" />
                <span>Joined {instJoinedDate}</span>
              </p>
            </div>
          </div>
          
          {/* Action button */}
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F57C20] hover:bg-[#E86E12] text-xs font-black text-white shadow-md transition-colors self-stretch md:self-auto justify-center">
            <span>Manage Portal Reps</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Top Grid: Innovation Score, KPIs, and Donut Card */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Innovation Score Card (Gauge widget) */}
          <div className="xl:col-span-4 rounded-[24px] bg-[#1F2B6C] text-white p-6 shadow-md flex flex-col justify-between min-h-[300px]">
            <div className="text-left">
              <p className="text-[10px] font-black text-white/70 uppercase tracking-widest">KNEIL Innovation Index</p>
              <h3 className="text-3xl font-black mt-2 leading-none">Strathmore Score</h3>
            </div>

            {/* Circular Gauge visual */}
            <div className="relative w-36 h-36 mx-auto flex flex-col items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-white/10"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#F57C20]"
                  strokeDasharray={`${defaultMeta.innovationScore}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-extrabold tracking-tight">{defaultMeta.innovationScore}</span>
                <span className="text-[9px] font-black uppercase text-white/70 tracking-wider">Index Rating</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-[11px] text-white/80 font-medium leading-relaxed">
                Ranked in the **Top 5%** of partner institutions. Ahead of 92% of network peers.
              </p>
            </div>
          </div>

          {/* KPIs Grid (xl:col-span-8) */}
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left flex items-start gap-4 hover:border-[#F57C20]/40 transition-colors group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={22} className={s.color} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-[#667085] uppercase tracking-wider block">{s.label}</span>
                    <span className="text-3xl font-black text-[#1F2B6C] block leading-none">{s.count}</span>
                    <span className="text-[9.5px] text-[#98A2B3] font-semibold block pt-1">{s.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Row 2: Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Donut Chart: Research Commercialization (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-6 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <div className="border-b border-gray-100 pb-3">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Research Commercialization</h4>
              <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">Innovations & TTO Pipeline</p>
            </div>

            {/* Donut Visual */}
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center my-4">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Remaining (E6ECF5) */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#E6ECF5" strokeWidth="3.5" />
                {/* Completed (F57C20) - 50% */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F57C20" strokeWidth="3.5" strokeDasharray="50 100" strokeDashoffset="0" strokeLinecap="round" />
                {/* Pending (1F2B6C) - 30% */}
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#1F2B6C" strokeWidth="3.5" strokeDasharray="30 100" strokeDashoffset="-50" strokeLinecap="round" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-black text-[#1F2B6C] leading-none">{commercializationData.total}</span>
                <span className="text-[9px] text-[#667085] font-black uppercase tracking-wider mt-1">Projects</span>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-2 border-t border-gray-50 pt-4 text-center">
              <div>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F57C20] mr-1.5"></span>
                <span className="text-[9.5px] font-black text-[#1B2559]">3 Active</span>
                <p className="text-[8px] font-bold text-[#98A2B3]">Completed</p>
              </div>
              <div>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#1F2B6C] mr-1.5"></span>
                <span className="text-[9.5px] font-black text-[#1B2559]">2 Review</span>
                <p className="text-[8px] font-bold text-[#98A2B3]">Pending</p>
              </div>
              <div>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E6ECF5] mr-1.5"></span>
                <span className="text-[9.5px] font-black text-[#1B2559]">1 Idea</span>
                <p className="text-[8px] font-bold text-[#98A2B3]">Remaining</p>
              </div>
            </div>
          </div>

          {/* Area/Line Chart: Growth Timeline (xl:col-span-8) */}
          <div className="xl:col-span-8 bg-white border border-[#ECE7E2] rounded-[24px] p-6 shadow-xs text-left flex flex-col justify-between min-h-[360px]">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <div>
                <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Ecosystem Engagement Growth</h4>
                <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">Students & researchers active in programmes</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[9.5px] font-extrabold text-[#F57C20]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F57C20]"></span>
                  Students
                </span>
                <span className="flex items-center gap-1.5 text-[9.5px] font-extrabold text-[#3B82F6]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
                  Faculty
                </span>
              </div>
            </div>

            {/* Custom SVG Line/Area Chart */}
            <div className="relative flex-grow flex items-center justify-center my-2">
              <svg viewBox="0 0 500 200" className="w-full h-44 overflow-visible">
                {/* Horizontal grid lines */}
                <line x1="30" y1="20" x2="480" y2="20" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="65" x2="480" y2="65" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="110" x2="480" y2="110" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="30" y1="155" x2="480" y2="155" stroke="#E2E8F0" strokeWidth="1.5" />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="studentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F57C20" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#F57C20" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="facultyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Student Area & Line (Orange) */}
                <path d="M 30 155 Q 120 130 210 90 T 390 40 L 480 25 L 480 155 Z" fill="url(#studentGrad)" />
                <path d="M 30 155 Q 120 130 210 90 T 390 40 L 480 25" fill="none" stroke="#F57C20" strokeWidth="3" strokeLinecap="round" />

                {/* Faculty Area & Line (Blue) */}
                <path d="M 30 155 Q 120 145 210 115 T 390 75 L 480 60 L 480 155 Z" fill="url(#facultyGrad)" />
                <path d="M 30 155 Q 120 145 210 115 T 390 75 L 480 60" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />

                {/* Markers & points */}
                <circle cx="210" cy="90" r="4.5" fill="white" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="390" cy="40" r="4.5" fill="white" stroke="#F57C20" strokeWidth="2.5" />
                <circle cx="480" cy="25" r="4.5" fill="white" stroke="#F57C20" strokeWidth="2.5" />

                <circle cx="210" cy="115" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="390" cy="75" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="480" cy="60" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />

                {/* X Axis Labels */}
                <text x="30" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q1 '25</text>
                <text x="120" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q2 '25</text>
                <text x="210" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q3 '25</text>
                <text x="300" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q4 '25</text>
                <text x="390" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q1 '26</text>
                <text x="480" y="178" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">Q2 '26</text>
              </svg>
            </div>
            
            <div className="border-t border-gray-50 pt-3 flex items-center justify-between text-xs text-gray-500 font-semibold">
              <span className="flex items-center gap-1 text-[#12B76A]">
                <TrendingUp size={14} />
                <span>+24% growth since last quarter</span>
              </span>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline flex items-center gap-0.5">
                <span>View Full Report</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section: Activity Timeline & Renewal Center */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Activity Timeline (xl:col-span-8) */}
          <div className="xl:col-span-8 bg-white border border-[#ECE7E2] rounded-[24px] p-6 shadow-xs text-left">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider">Institution Workspace Activities</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View archive</button>
            </div>

            <div className="relative border-l border-gray-100 ml-3.5 pl-6 space-y-6 my-2">
              {activities.map((a, idx) => (
                <div key={idx} className="relative">
                  {/* Dot indicator */}
                  <span className="absolute -left-[31px] top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#F57C20] flex items-center justify-center shadow-xs">
                    <span className="w-1.5 h-1.5 bg-[#F57C20] rounded-full"></span>
                  </span>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="text-[11.5px] font-black text-[#1B2559]">{a.title}</h5>
                      <span className="text-[8.5px] text-[#98A2B3] font-bold">{a.time}</span>
                    </div>
                    <p className="text-[10.5px] text-[#667085] font-semibold leading-relaxed">
                      {a.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Renewal Center Card (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[24px] p-6 shadow-xs text-left flex flex-col justify-between min-h-[300px]">
            <h4 className="text-xs font-black text-[#1B2559] border-b border-gray-100 pb-3 mb-4 uppercase tracking-wider">Membership Center</h4>

            <div className="space-y-4 flex-grow flex flex-col justify-center">
              
              {/* Membership status card */}
              <div className="bg-[#FFF7F2] border border-[#ECE7E2] p-4 rounded-2xl flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F57C20] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="text-[12.5px] font-black text-[#1B2559]">{defaultMeta.membershipLevel}</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold mt-0.5">Active & verified rep</p>
                  <p className="text-[9px] text-[#F57C20] font-black mt-2">
                    Renewal: {defaultMeta.membershipRenewalDate}
                  </p>
                </div>
              </div>

              {/* Status details list */}
              <div className="space-y-2.5 py-1 text-[10px] font-semibold text-[#667085]">
                <div className="flex items-center justify-between border-b border-gray-50 pb-1.5">
                  <span>Premium Documents</span>
                  <span className="text-[#12B76A] flex items-center gap-1 font-bold">
                    <CheckCircle2 size={12} /> Unlocked
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-50 pb-1.5">
                  <span>Partner Networking Directory</span>
                  <span className="text-[#12B76A] flex items-center gap-1 font-bold">
                    <CheckCircle2 size={12} /> Enabled
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Grant Eligibility Level</span>
                  <span className="text-blue-600 font-bold">Tier 1 Elite</span>
                </div>
              </div>

            </div>

            {/* CTA action */}
            <button className="w-full rounded-xl bg-[#1F2B6C] hover:bg-[#162052] py-2.5 text-xs font-black text-white shadow-md transition-colors mt-4 text-center">
              Access Billing & Agreements
            </button>
          </div>

        </div>

      </div>
    </PortalLayout>
  );
}
