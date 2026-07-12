import { useState } from "react";
import {
  Library, Download, Bookmark, Eye, Search, Filter,
  FileText, ChevronRight
} from "lucide-react";
import { PortalLayout } from "../components/portal/PortalLayout";

export function KnowledgeHub() {
  const [activeTab, setActiveTab] = useState("latest");

  const topStats = [
    { label: "Resources Available", count: "1,248", change: "+18 this month", icon: Library, color: "text-[#1F2B6C]", bg: "bg-[#FFF7F2]" },
    { label: "Downloads", count: "3.2K", change: "+21% this month", icon: Download, color: "text-[#F57C20]", bg: "bg-[#FFF7F2]" },
    { label: "My Bookmarks", count: "25", change: "Saved resources", icon: Bookmark, color: "text-[#12B76A]", bg: "bg-[#FFF7F2]" },
    { label: "Recently Viewed", count: "12", change: "This week", icon: Eye, color: "text-[#3B82F6]", bg: "bg-[#FFF7F2]" },
  ];

  const categories = [
    { name: "Entrepreneurship", count: 132 },
    { name: "Research & Innovation", count: 98 },
    { name: "Commercialization", count: 76 },
    { name: "Funding & Grants", count: 64 },
    { name: "Policy & Leadership", count: 56 },
    { name: "Education & Capacity", count: 88 },
    { name: "Technology & Digital", count: 112 },
    { name: "Sustainable Development", count: 70 },
  ];

  const resourceTypes = [
    { name: "Reports", count: 412 },
    { name: "Toolkits", count: 256 },
    { name: "Guides", count: 198 },
    { name: "Case Studies", count: 156 },
    { name: "Videos", count: 132 },
    { name: "Templates", count: 94 },
  ];

  const featured = [
    {
      title: "Innovation Playbook 2026",
      type: "REPORT",
      desc: "A practical guide to building innovation ecosystems.",
      date: "May 12, 2026",
      downloads: "2.4K downloads",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Commercialization Toolkit",
      type: "TOOLKIT",
      desc: "Step-by-step toolkit to take research to market.",
      date: "Apr 28, 2026",
      downloads: "1.8K downloads",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Student Innovation Guide",
      type: "GUIDE",
      desc: "Helping students to solve real-world problems.",
      date: "May 5, 2026",
      downloads: "1.2K downloads",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Green Energy Case Study",
      type: "CASE STUDY",
      desc: "Sustainable energy solutions from African universities.",
      date: "Apr 18, 2026",
      downloads: "1.9K downloads",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const resources = [
    {
      title: "Measuring Impact in Innovation Projects",
      type: "REPORT",
      cat: "Entrepreneurship",
      date: "May 18, 2026",
      author: "Sarah Wanjiku",
      role: "NEIL Secretariat",
      downloads: "1.6K",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
    },
    {
      title: "How to Write a Winning Grant Proposal",
      type: "TOOLKIT",
      cat: "Funding & Grants",
      date: "May 10, 2026",
      author: "Brian Otieno",
      role: "Research Advisor",
      downloads: "1.2K",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
    },
    {
      title: "Intellectual Property Basics for Innovators",
      type: "GUIDE",
      cat: "Commercialization",
      date: "May 8, 2026",
      author: "Dr. Fatima Diallo",
      role: "Legal Specialist",
      downloads: "950",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60"
    },
    {
      title: "University-Industry Collaboration Models",
      type: "CASE STUDY",
      cat: "Research & Innovation",
      date: "Apr 30, 2026",
      author: "Samuel Osei",
      role: "Partnership Lead",
      downloads: "870",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
    }
  ];

  const popularTopics = [
    { topic: "Innovation Ecosystems", count: 212 },
    { topic: "Startup Development", count: 184 },
    { topic: "Research Commercialization", count: 156 },
    { topic: "Digital Transformation", count: 142 },
    { topic: "Capacity Building", count: 128 },
  ];

  const recentlyViewed = [
    { title: "Innovation Funding Landscape 2026", type: "REPORT", time: "Viewed 2h ago" },
    { title: "AI for Social Good Toolkit", type: "TOOLKIT", time: "Viewed 1d ago" },
    { title: "Policy Framework for Innovation", type: "GUIDE", time: "Viewed 3d ago" },
  ];

  return (
    <PortalLayout>
      <div className="space-y-6">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
          <div>
            <h2 className="text-2xl font-black text-[#1B2559]">Knowledge Hub</h2>
            <p className="text-xs font-semibold text-[#667085] mt-1">
              Discover, learn and apply knowledge to drive innovation and transformation.
            </p>
          </div>
        </div>

        {/* Top Metric Stats Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topStats.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[18px] p-5 flex items-center justify-between shadow-xs text-left group hover:border-[#F57C20]/45 transition-colors duration-200">
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-[#98A2B3] uppercase tracking-wider block">{m.label}</span>
                  <span className="text-2xl font-black text-[#1B2559] block mt-1 leading-none">{m.count}</span>
                  <span className="text-[10px] font-bold text-[#F57C20] mt-1.5 block">
                    {m.change}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-full ${m.bg} flex items-center justify-center shrink-0 text-[#F57C20]`}>
                  <Icon size={20} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter bar */}
        <div className="bg-white border border-[#ECE7E2] rounded-[18px] p-4 flex flex-col md:flex-row gap-3 items-center shadow-xs">
          <div className="relative flex-grow w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources, topics, authors..."
              className="w-full rounded-xl bg-[#FFF7F2] border-none py-2.5 pl-11 pr-4 text-xs text-gray-800 outline-none placeholder-gray-400 focus:bg-gray-50 focus:ring-1 focus:ring-[#F57C20]"
            />
          </div>
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto shrink-0">
            <select className="bg-[#FFF7F2] border border-[#ECE7E2] rounded-xl px-3 py-2 text-xs font-black text-[#667085] outline-none cursor-pointer">
              <option>All Topics</option>
            </select>
            <select className="bg-[#FFF7F2] border border-[#ECE7E2] rounded-xl px-3 py-2 text-xs font-black text-[#667085] outline-none cursor-pointer">
              <option>All Resource Types</option>
            </select>
            <select className="bg-[#FFF7F2] border border-[#ECE7E2] rounded-xl px-3 py-2 text-xs font-black text-[#667085] outline-none cursor-pointer">
              <option>Audience</option>
            </select>
            <select className="bg-[#FFF7F2] border border-[#ECE7E2] rounded-xl px-3 py-2 text-xs font-black text-[#667085] outline-none cursor-pointer">
              <option>Sort by: Latest</option>
            </select>
            <button className="p-2.5 bg-[#FFF7F2] border border-[#ECE7E2] hover:bg-gray-150 rounded-xl text-gray-600 transition-colors">
              <Filter size={15} />
            </button>
          </div>
        </div>

        {/* Main Hub Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Categories and Types (xl:col-span-3) */}
          <div className="xl:col-span-3 space-y-6">
            
            {/* Browse by Category */}
            <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Browse by Category</h4>
              <div className="mt-4 space-y-2">
                {categories.map((c, idx) => (
                  <button key={idx} className="flex items-center justify-between w-full py-1.5 text-left group hover:text-[#F57C20] transition-colors">
                    <span className="text-[11.5px] font-bold text-[#667085] group-hover:text-[#F57C20] truncate">{c.name}</span>
                    <span className="text-[9.5px] font-black text-[#98A2B3] bg-[#FFF7F2] px-2 py-0.5 rounded-md shrink-0 ml-2">{c.count}</span>
                  </button>
                ))}
              </div>
              <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
                <span>View all categories</span>
                <ChevronRight size={12} className="mt-0.5" />
              </button>
            </div>

            {/* Resource Type */}
            <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Resource Type</h4>
              <div className="mt-4 space-y-2">
                {resourceTypes.map((t, idx) => (
                  <button key={idx} className="flex items-center justify-between w-full py-1.5 text-left group hover:text-[#F57C20] transition-colors">
                    <span className="text-[11.5px] font-bold text-[#667085] group-hover:text-[#F57C20]">{t.name}</span>
                    <span className="text-[9.5px] font-black text-[#98A2B3] bg-[#FFF7F2] px-2 py-0.5 rounded-md shrink-0 ml-2">{t.count}</span>
                  </button>
                ))}
              </div>
              <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
                <span>View all types</span>
                <ChevronRight size={12} className="mt-0.5" />
              </button>
            </div>

          </div>

          {/* Middle Column: Featured and Main List (xl:col-span-6) */}
          <div className="xl:col-span-6 space-y-6">
            
            {/* Featured Resources */}
            <div className="text-left">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider mb-3">Featured Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featured.map((f, idx) => (
                  <div key={idx} className="bg-white border border-[#ECE7E2] rounded-[20px] overflow-hidden shadow-xs flex flex-col justify-between group hover:border-[#F57C20]/45 transition-colors duration-200">
                    <div className="relative h-28 bg-gray-50 border-b border-[#ECE7E2]">
                      <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-[#1F2B6C] text-white text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {f.type}
                      </span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <h5 className="text-[12.5px] font-black text-[#1B2559] leading-snug group-hover:text-[#F57C20] transition-colors">{f.title}</h5>
                        <p className="text-[10px] text-[#667085] font-semibold mt-1 leading-relaxed line-clamp-2">{f.desc}</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-3.5 text-[9px] font-bold text-[#98A2B3]">
                        <span>{f.date}</span>
                        <span className="flex items-center gap-1"><Download size={10} /> {f.downloads}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* List with tabs */}
            <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs text-left">
              {/* Tab headers */}
              <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide gap-5 pb-3">
                {[
                  { id: "latest", label: "Latest Resources" },
                  { id: "downloaded", label: "Most Downloaded" },
                  { id: "trending", label: "Trending" },
                  { id: "recommended", label: "Recommended for You" },
                  { id: "saved", label: "Saved Resources" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-[11.5px] font-black tracking-wide whitespace-nowrap border-b-2 pb-1.5 transition-colors shrink-0 ${
                      activeTab === tab.id
                        ? "border-[#F57C20] text-[#F57C20]"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Main List */}
              <div className="mt-4 divide-y divide-gray-100">
                {resources.map((r, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 text-[#F57C20] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText size={16} />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-[12px] font-black text-[#1B2559] truncate leading-tight hover:text-[#F57C20] cursor-pointer">{r.title}</h5>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[9.5px] font-bold">
                          <span className="text-[#F57C20] bg-[#FFF7F2] border border-[#ECE7E2] px-2 py-0.5 rounded-md uppercase tracking-wider text-[8px]">{r.type}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-[#1F2B6C]">{r.cat}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-[#98A2B3]">{r.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-gray-50 pt-2 sm:pt-0 shrink-0">
                      <div className="flex items-center gap-2 text-left">
                        <img src={r.avatar} alt={r.author} className="w-7 h-7 rounded-full object-cover border border-gray-100" />
                        <div>
                          <p className="text-[10px] font-black text-[#1B2559] leading-none">{r.author}</p>
                          <p className="text-[8.5px] font-bold text-gray-400 mt-0.5 leading-none">{r.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-[10.5px] font-black text-[#1B2559] flex items-center justify-end gap-0.5"><Download size={11} className="text-gray-400" /> {r.downloads}</p>
                          <p className="text-[8px] font-bold text-[#98A2B3] leading-none mt-0.5">Downloads</p>
                        </div>
                        <button className="text-gray-400 hover:text-[#F57C20] transition-colors shrink-0">
                          <Bookmark size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full text-center py-2.5 bg-[#FFF7F2] border border-[#ECE7E2] hover:bg-gray-150 rounded-xl text-xs font-black text-[#F57C20] transition-colors mt-6 block">
                Load more resources
              </button>
            </div>

          </div>

          {/* Right Column: Popular Topics, Request, Recently Viewed (xl:col-span-3) */}
          <div className="xl:col-span-3 space-y-6 text-left">
            
            {/* Popular Topics */}
            <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Popular Topics</h4>
              <div className="mt-4 space-y-2">
                {popularTopics.map((t, idx) => (
                  <button key={idx} className="flex items-center justify-between w-full py-1.5 text-left group hover:text-[#F57C20] transition-colors">
                    <span className="text-[11.5px] font-bold text-[#667085] group-hover:text-[#F57C20]">{t.topic}</span>
                    <span className="text-[9.5px] font-black text-[#98A2B3] bg-[#FFF7F2] px-2 py-0.5 rounded-md shrink-0 ml-2">{t.count}</span>
                  </button>
                ))}
              </div>
              <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
                <span>View all</span>
                <ChevronRight size={12} className="mt-0.5" />
              </button>
            </div>

            {/* Request Resource Box */}
            <div className="bg-[#102A5B] text-white border border-[#102A5B] rounded-[24px] p-5 shadow-md flex flex-col justify-between min-h-[180px]">
              <div>
                <h4 className="text-sm font-black text-white">Can't find what you're looking for?</h4>
                <p className="text-[10px] text-[#C8D3F5] font-semibold mt-2 leading-relaxed">
                  Submit a request for resources and our technical innovation team will help you source it.
                </p>
              </div>
              <button className="w-full text-center py-2.5 bg-[#F57C20] hover:bg-[#E86E12] rounded-xl text-xs font-black text-white transition-colors mt-4 block shadow-md">
                Request Resource
              </button>
            </div>

            {/* Recently Viewed */}
            <div className="bg-white border border-[#ECE7E2] rounded-[24px] p-5 shadow-xs">
              <h4 className="text-xs font-black text-[#1B2559] uppercase tracking-wider border-b border-gray-100 pb-3">Recently Viewed</h4>
              <div className="mt-4 space-y-3.5">
                {recentlyViewed.map((v, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#FFF7F2] border border-[#ECE7E2] text-[#F57C20] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={13} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-black text-[#1B2559] leading-tight hover:text-[#F57C20] cursor-pointer truncate">{v.title}</p>
                      <p className="text-[9px] font-bold text-[#98A2B3] mt-0.5">{v.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-[10px] font-black text-[#F57C20] hover:text-[#E86E12] inline-flex items-center gap-1 border-t border-gray-100 pt-3 w-full text-left transition-colors duration-200 mt-4">
                <span>View all</span>
                <ChevronRight size={12} className="mt-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </PortalLayout>
  );
}
