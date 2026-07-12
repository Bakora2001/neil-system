import {
  Award, BookOpen, ArrowRight, Bookmark, MessageSquare, Share2, Heart, Folder
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";
import { useAuth } from "../hooks/useAuth";

export function StudentDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: "Upcoming Events", count: "3", labelBottom: "View all", color: "text-[#F57C20]" },
    { label: "Resources Added", count: "15", labelBottom: "This week", color: "text-blue-600" },
    { label: "Certificates Earned", count: "3", labelBottom: "View all", color: "text-[#1F2B6C]" },
    { label: "Applications", count: "2", labelBottom: "Pending", color: "text-amber-500" },
  ];

  const recommended = [
    { title: "Design Thinking Toolkit", desc: "Practical guide for innovators", iconBg: "bg-blue-50 text-blue-600" },
    { title: "Fundraising for Startups", desc: "A beginner's guide", iconBg: "bg-orange-50 text-orange-600" },
    { title: "Social Innovation Case Study", desc: "Real impact. Real people.", iconBg: "bg-emerald-50 text-emerald-600" },
  ];

  const learning = [
    { title: "AI for Social Good", desc: "Course • 6 lessons", progress: 60 },
    { title: "Business Model Canvas", desc: "Course • 8 lessons", progress: 35 },
    { title: "Impact Measurement", desc: "Course • 5 lessons", progress: 20 },
  ];

  const quickAccess = [
    { label: "Browse Resources", iconBg: "bg-blue-50 text-blue-600" },
    { label: "Join Community", iconBg: "bg-indigo-50 text-indigo-600" },
    { label: "Find Collaborators", iconBg: "bg-sky-50 text-sky-600" },
    { label: "Innovation Challenges", iconBg: "bg-violet-50 text-violet-600" },
    { label: "My Applications", iconBg: "bg-rose-50 text-rose-600" },
    { label: "Upload Project", iconBg: "bg-emerald-50 text-emerald-600" },
  ];

  const latestResources = [
    { title: "Innovation Playbook 2026", type: "REPORT", desc: "Strategic steps to drive innovation ecosystems.", color: "bg-blue-500", text: "text-blue-500", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60" },
    { title: "Commercialization Toolkit", type: "TOOLKIT", desc: "Everything you need to take research to market.", color: "bg-emerald-500", text: "text-emerald-500", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60" },
    { title: "Student Innovation Guide", type: "GUIDE", desc: "Step-by-step guide to solve real-world problems.", color: "bg-indigo-500", text: "text-indigo-500", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60" },
  ];

  const feed = [
    {
      author: "Sarah Wanjiku",
      time: "2h ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
      content: "Excited to share our new agritech prototype! Looking for feedback from the community. Check it out!",
      img: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&auto=format&fit=crop&q=60",
      likes: 24,
      comments: 6,
      shares: 3,
    },
    {
      author: "Brian Otieno",
      time: "5h ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
      content: "Just published a case study on youth-led innovation in Kenya. Check it out!",
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=60",
      likes: 18,
      comments: 4,
      shares: 2,
    },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-[#1B2559]">
              Welcome back, {user?.fullName?.split(" ")[0] || "Maxwell"}! 👋
            </h2>
            <p className="text-xs font-semibold text-[#667085] mt-1">
              Keep learning. Keep innovating. Change Africa.
            </p>
          </div>
        </div>

        {/* Top Grid: Progress Card, Stat Cards & Upcoming Event Card */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Progress Card (xl:col-span-4) */}
          <div className="xl:col-span-4 rounded-[20px] bg-[#1F2B6C] text-white p-6 shadow-md flex flex-col justify-between min-h-[220px]">
            <div>
              <p className="text-[11px] font-bold text-white/70 uppercase tracking-wider">Your Learning Progress</p>
              <h3 className="text-4xl font-extrabold mt-2 tracking-tight">72%</h3>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-[#F57C20] h-full rounded-full" style={{ width: "72%" }}></div>
              </div>
              <p className="text-[11px] text-white/80 mt-2 font-medium">Great job! You're ahead of 60% of learners.</p>
            </div>

            {/* Current Course Inner Box */}
            <div className="bg-white/10 rounded-xl p-3 flex items-center justify-between mt-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <BookOpen size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold">Entrepreneurship & Innovation</p>
                  <p className="text-[9px] text-white/70 font-medium">Module 3 - Business Models</p>
                </div>
              </div>
              <button className="text-white hover:text-[#F57C20] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Continue Learning Action */}
            <button className="text-left text-[#F57C20] hover:text-orange-400 font-extrabold text-xs flex items-center gap-1.5 mt-3 self-start">
              <span>Continue Learning</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Quick Stats Grid & Recommended / Continue sections (xl:col-span-5) */}
          <div className="xl:col-span-5 flex flex-col justify-between gap-6">
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 flex flex-col justify-between shadow-xs text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#667085] leading-snug">{s.label}</span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className={`text-2xl font-black ${s.color}`}>{s.count}</span>
                    <button className="text-[10px] font-extrabold text-[#667085] hover:text-[#F57C20] transition-colors">
                      {s.labelBottom}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended & Continue Learning row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Recommended for You */}
              <div className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 text-left shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                  <h4 className="text-xs font-black text-[#1B2559]">Recommended for you</h4>
                  <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
                </div>
                <div className="space-y-3">
                  {recommended.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-1.5 rounded-xl transition-all">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center text-[10px] font-bold`}>
                          {item.title.charAt(0)}
                        </div>
                        <div>
                          <p className="text-[10.5px] font-bold text-[#1B2559] leading-tight group-hover:text-[#F57C20] transition-colors">{item.title}</p>
                          <p className="text-[9px] text-[#667085] font-medium leading-none mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                      <Bookmark size={12} className="text-gray-400 group-hover:text-[#F57C20]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Learning */}
              <div className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 text-left shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
                  <h4 className="text-xs font-black text-[#1B2559]">Continue Learning</h4>
                  <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
                </div>
                <div className="space-y-3.5">
                  {learning.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center text-[10.5px] font-bold text-[#1B2559]">
                        <span>{item.title}</span>
                        <span className="text-[#F57C20]">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-[#EDF2F7] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#F57C20] h-full rounded-full" style={{ width: `${item.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Upcoming Event (xl:col-span-3) */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            {/* Featured Event Card */}
            <div className="bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left flex flex-col justify-between h-full min-h-[300px]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                <h4 className="text-xs font-black text-[#1B2559]">Upcoming Event</h4>
                <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
              </div>

              <div className="my-4 space-y-4">
                {/* Event badge date & details */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7F2] flex flex-col items-center justify-center border border-[#ECE7E2] shrink-0">
                    <span className="text-[10px] font-bold text-[#667085] leading-none uppercase">Jun</span>
                    <span className="text-2xl font-black text-[#F57C20] leading-none mt-1">20</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#1B2559] leading-tight">NEIL Innovation Summit 2026</h5>
                    <p className="text-[9.5px] text-[#667085] mt-1 font-semibold">Nairobi, Kenya</p>
                    <p className="text-[9px] text-[#98A2B3] mt-0.5 font-medium">9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                {/* Attendee avatars stack */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex -space-x-2.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold text-[#667085]">+120 attending</span>
                </div>
              </div>

              {/* Action register button */}
              <button className="w-full rounded-xl bg-[#F57C20] hover:bg-[#E86E12] py-2.5 text-xs font-black text-white shadow-md transition-colors mt-auto">
                Register Now
              </button>
            </div>
          </div>

        </div>

        {/* Row 2: Quick Access & Bottom row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Quick Access cards (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left">
            <h4 className="text-xs font-black text-[#1B2559] border-b border-gray-100 pb-2.5 mb-4">Quick Access</h4>
            
            <div className="grid grid-cols-2 gap-3">
              {quickAccess.map((item, idx) => (
                <button key={idx} className="flex flex-col items-center justify-center p-4 border border-[#ECE7E2] rounded-2xl hover:border-[#F57C20] hover:bg-[#FFF7F2]/15 transition-all text-center group">
                  <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center transition-all group-hover:scale-110`}>
                    <Folder size={18} />
                  </div>
                  <span className="text-[10px] font-black text-[#1B2559] mt-2 leading-tight group-hover:text-[#F57C20] transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Latest Resources List (xl:col-span-8) */}
          <div className="xl:col-span-8 bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-4">
              <h4 className="text-xs font-black text-[#1B2559]">Latest Resources</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {latestResources.map((item, idx) => (
                <div key={idx} className="border border-[#ECE7E2] rounded-[18px] overflow-hidden flex flex-col justify-between h-full bg-[#FDFAF8]/50 hover:bg-white transition-all hover:shadow-xs group cursor-pointer">
                  <div className="h-28 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <span className={`absolute top-2.5 left-2.5 text-[8.5px] font-extrabold px-2 py-0.5 rounded-full bg-white ${item.text} border border-gray-100 shadow-xs`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="p-3 text-left flex flex-col justify-between flex-grow">
                    <h5 className="text-[11px] font-black text-[#1B2559] leading-tight group-hover:text-[#F57C20] transition-colors">{item.title}</h5>
                    <p className="text-[9.5px] text-[#667085] mt-1 font-medium leading-tight">{item.desc}</p>
                    <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                      <span className={`text-[8.5px] font-extrabold px-2 py-0.5 rounded-sm ${item.color} text-white`}>
                        {item.type.toLowerCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Community highlights & Achievements */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Community Highlights feed (xl:col-span-8) */}
          <div className="xl:col-span-8 bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-4">
              <h4 className="text-xs font-black text-[#1B2559]">Community Highlights</h4>
              <button className="text-[10px] font-bold text-[#F57C20] hover:underline">View all</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {feed.map((post, idx) => (
                <div key={idx} className="border border-[#ECE7E2] rounded-[18px] p-4 space-y-3 bg-[#FDFAF8]/30 flex flex-col justify-between hover:bg-white transition-all">
                  
                  {/* Header Author info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-150">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10.5px] font-black text-[#1B2559] leading-none">{post.author}</p>
                        <p className="text-[8.5px] text-gray-400 font-semibold mt-1">{post.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body text & Image */}
                  <p className="text-[10.5px] text-[#667085] leading-relaxed font-semibold">
                    {post.content}
                  </p>

                  {post.img && (
                    <div className="h-32 rounded-xl overflow-hidden">
                      <img src={post.img} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* Actions buttons row */}
                  <div className="flex items-center gap-4 pt-1.5 border-t border-gray-100/70 text-gray-500 text-[10px] font-bold mt-2">
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                      <Heart size={13} />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                      <MessageSquare size={13} />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
                      <Share2 size={13} />
                      <span>{post.shares}</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Your Achievements (xl:col-span-4) */}
          <div className="xl:col-span-4 bg-white border border-[#ECE7E2] rounded-[20px] p-5 shadow-xs text-left flex flex-col justify-between min-h-[300px]">
            <h4 className="text-xs font-black text-[#1B2559] border-b border-gray-100 pb-2.5 mb-4">Your Achievements</h4>

            <div className="flex flex-col items-center justify-center flex-grow py-3 space-y-4">
              
              {/* Badge visual */}
              <div className="flex items-center gap-4 w-full bg-[#FFF7F2] border border-[#ECE7E2] p-3.5 rounded-2xl">
                <div className="w-12 h-12 bg-[#F57C20] rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h5 className="text-[13px] font-black text-[#1B2559]">3 Certificates</h5>
                  <p className="text-[9.5px] text-[#667085] font-semibold">Earned on NEIL Portal</p>
                  <button className="text-[10px] font-extrabold text-[#F57C20] flex items-center gap-0.5 hover:underline mt-1">
                    <span>View Certificates</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* Progress Level Donut Visual */}
              <div className="w-full flex items-center justify-between bg-gray-50/50 p-4 border border-[#ECE7E2] rounded-2xl">
                <div>
                  <h5 className="text-[20px] font-black text-[#1F2B6C] leading-none">120</h5>
                  <p className="text-[9px] text-[#667085] font-bold uppercase tracking-wider mt-1.5">Points Earned</p>
                </div>
                
                {/* Donut progress visual */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#F57C20]"
                      strokeDasharray="80, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-[10px] font-black text-[#1B2559]">80%</span>
                    <span className="text-[7px] text-[#667085] font-bold leading-none uppercase">To Lvl 3</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </PortalLayout>
  );
}
