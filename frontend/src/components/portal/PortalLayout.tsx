import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Library, Calendar, Award, FolderHeart,
  MessageSquare, User as UserIcon, Settings, LogOut, Bell, Search, Menu, X,
  Users as UsersIcon, Building2, FileText, Folder, Mail, BarChart3, Key, History,
  Layers, Database, LifeBuoy
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

interface PortalLayoutProps {
  children: React.ReactNode;
}

export function PortalLayout({ children }: PortalLayoutProps) {
  const { user, logoutUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const getNavigationItems = () => {
    const role = user?.role || "STUDENT";
    switch (role) {
      case "ADMIN":
        return [
          { label: "Dashboard", path: "/portal/admin", icon: LayoutDashboard },
          { label: "User Management", path: "#", icon: UsersIcon },
          { label: "Institutions", path: "#", icon: Building2 },
          { label: "Content Management", path: "#", icon: FileText },
          { label: "Programs & Events", path: "#", icon: Calendar },
          { label: "Reports & Analytics", path: "#", icon: BarChart3 },
          { label: "System Settings", path: "#", icon: Settings },
          { label: "Roles & Permissions", path: "#", icon: Key },
          { label: "Activity Logs", path: "#", icon: History },
          { label: "Notifications", path: "#", icon: Bell, badge: 5 },
          { label: "Integrations", path: "#", icon: Layers },
          { label: "Backup & Recovery", path: "#", icon: Database },
          { label: "Support Tickets", path: "#", icon: LifeBuoy, badge: 3 },
          { label: "Settings", path: "#", icon: Settings },
        ];
      case "SECRETARIAT":
        return [
          { label: "Dashboard", path: "/portal/secretariat", icon: LayoutDashboard },
          { label: "Content", path: "#", icon: FileText },
          { label: "Programs", path: "#", icon: FolderHeart },
          { label: "Events", path: "#", icon: Calendar },
          { label: "Knowledge Hub", path: "/portal/knowledge-hub", icon: Library },
          { label: "Members", path: "#", icon: UsersIcon },
          { label: "Institutions", path: "#", icon: Building2 },
          { label: "Blogs", path: "#", icon: FileText },
          { label: "Media Library", path: "#", icon: Folder },
          { label: "Newsletters", path: "#", icon: Mail },
          { label: "Analytics", path: "#", icon: BarChart3 },
          { label: "Settings", path: "#", icon: Settings },
        ];
      case "INSTITUTION":
        return [
          { label: "Dashboard", path: "/portal/institution", icon: LayoutDashboard },
          { label: "Institution Profile", path: "#", icon: Building2 },
          { label: "Programs", path: "#", icon: FolderHeart },
          { label: "Projects", path: "#", icon: BookOpen },
          { label: "Faculty Members", path: "#", icon: UsersIcon },
          { label: "Events", path: "#", icon: Calendar },
          { label: "Resources", path: "#", icon: Library },
          { label: "Settings", path: "#", icon: Settings },
        ];
      case "FACULTY":
        return [
          { label: "Dashboard", path: "/portal/faculty", icon: LayoutDashboard },
          { label: "My Projects", path: "#", icon: BookOpen },
          { label: "Knowledge Hub", path: "/portal/knowledge-hub", icon: Library },
          { label: "Events", path: "#", icon: Calendar },
          { label: "Community", path: "#", icon: UsersIcon },
          { label: "Programs", path: "#", icon: FolderHeart },
          { label: "Messages", path: "#", icon: MessageSquare, badge: 4 },
          { label: "Certificates", path: "#", icon: Award },
          { label: "Settings", path: "#", icon: Settings },
        ];
      case "STUDENT":
      default:
        return [
          { label: "Dashboard", path: "/portal/student", icon: LayoutDashboard },
          { label: "My Learning", path: "#", icon: BookOpen },
          { label: "Knowledge Hub", path: "/portal/knowledge-hub", icon: Library },
          { label: "Events", path: "#", icon: Calendar },
          { label: "Programs", path: "#", icon: FolderHeart },
          { label: "Community", path: "#", icon: UsersIcon },
          { label: "Messages", path: "#", icon: MessageSquare, badge: 4 },
          { label: "Certificates", path: "#", icon: Award },
          { label: "Profile", path: "#", icon: UserIcon },
          { label: "Settings", path: "#", icon: Settings },
        ];
    }
  };

  const navigationItems = getNavigationItems();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "STUDENT": return "Student";
      case "FACULTY": return "Faculty & Researcher";
      case "INSTITUTION": return "Institution Leader";
      case "SECRETARIAT": return "Secretariat Staff";
      case "ADMIN": return "Super Admin";
      default: return role;
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#102A5B] text-white">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-[#183777]/30">
        <Link to="/" className="flex items-center">
          <img
            src="/images/neil-logo.png"
            alt="NEIL Logo"
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </Link>
      </div>

      {/* Menu Links */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto select-none">
        {navigationItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                isActive
                  ? "bg-[#F57C20] text-white shadow-md shadow-[#F57C20]/25"
                  : "text-[#C8D3F5] hover:bg-[#183777] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={isActive ? "text-white" : "text-[#C8D3F5] group-hover:text-white transition-colors"} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                  isActive ? "bg-white text-[#F57C20]" : "bg-[#F57C20] text-white"
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout button */}
      <div className="p-4 border-t border-[#183777]/30 select-none">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-all duration-200"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#FDFAF8] font-sans antialiased">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-[#ECE7E2] select-none">
        <div className="sticky top-0 h-screen">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/50 select-none">
          <div className="relative w-64 h-full bg-[#102A5B]">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
            >
              <X size={20} />
            </button>
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#ECE7E2] px-4 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-gray-500 hover:text-gray-700 lg:hidden rounded-lg hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>

            {/* Search Bar */}
            <div className="relative max-w-md hidden sm:block">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for resources, events, programs..."
                className="w-80 rounded-full bg-[#FFF7F2] border-none py-2 pl-11 pr-4 text-xs text-gray-800 outline-none placeholder-gray-400 focus:bg-gray-50 focus:ring-1 focus:ring-[#F57C20]"
              />
            </div>
          </div>

          {/* Right Header Navigation */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Notifications */}
            <button className="relative w-9 h-9 rounded-full bg-[#FFF7F2] flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
              <Bell size={17} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F04438] text-[9px] font-bold text-white flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Messages Quick Access */}
            <button className="relative w-9 h-9 rounded-full bg-[#FFF7F2] flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
              <MessageSquare size={17} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F57C20] text-[9px] font-bold text-white flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block select-none">
                <p className="text-xs font-bold text-[#1B2559]">{user?.fullName || "Maxwell Omwoyo"}</p>
                <p className="text-[10px] font-medium text-[#667085]">{getRoleDisplayName(user?.role || "STUDENT")}</p>
              </div>
              <div className="w-9 h-9 rounded-full overflow-hidden bg-orange-100 border border-orange-200">
                <img
                  src={user?.email === "sarah@kneil.org" ? "/images/avatars/sarah.jpg" : "/images/avatars/maxwell.jpg"}
                  alt={user?.fullName || "User avatar"}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.fullName || "Maxwell")}&background=FFF7F2&color=F57C20`;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Portal Body */}
        <main className="flex-grow p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
