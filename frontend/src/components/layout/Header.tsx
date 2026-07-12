import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
];

const RESOURCE_LINKS = [
  { label: "TTO Playbook", href: "/resources/tto-playbook" },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Partners", href: "/partners" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ef9d4a] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/images/neil-logo.png"
            alt="NEIL Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[13px] font-medium text-gray-700 hover:text-[#ef9d4a] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-[13px] font-medium text-gray-700 hover:text-[#ef9d4a] transition-colors"
            >
              Resources <ChevronDown size={14} className="opacity-80" />
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 top-full mt-1 w-44 rounded-xl border border-gray-100 bg-white py-2 shadow-xl z-50">
                {RESOURCE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            className="text-[13px] font-medium text-gray-700 hover:text-[#ef9d4a] transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-[13px] font-medium text-gray-700 hover:text-[#ef9d4a] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-1.5 text-[13px] font-semibold rounded-full border border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 text-[13px] font-semibold bg-[#ef9d4a] text-white rounded-full hover:brightness-95 transition-all shadow-md"
          >
            Join NEIL
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#1A237E]"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white border-gray-100 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {[...NAV_LINKS, ...RESOURCE_LINKS, { label: "Blogs", href: "/blogs" }, { label: "Contact", href: "/contact" }].map(
              (link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#ef9d4a]"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-2 flex gap-3">
              <Link
                to="/login"
                className="flex-1 text-center px-4 py-2 text-sm font-semibold rounded-full border border-[#1A237E] text-[#1A237E]"
              >
                Login
              </Link>
              <Link to="/register" className="flex-1 text-center px-4 py-2 text-sm font-semibold bg-[#ef9d4a] text-white rounded-full">
                Join NEIL
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
