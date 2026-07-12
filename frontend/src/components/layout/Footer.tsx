import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Youtube, MapPin, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
  { label: "Resources", href: "/resources/tto-playbook" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const RESOURCE_LINKS = [
  { label: "TTO Playbook", href: "/resources/tto-playbook" },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Partners", href: "/partners" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white px-6 sm:px-8">
      <div className="max-w-6xl mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/neil-logo.png"
              alt="NEIL Logo"
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-[220px]">
            We empower institutions to become hubs of innovation and entrepreneurship for a better Africa.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef9d4a] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="hover:text-[#ef9d4a] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
            Resources
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="hover:text-[#ef9d4a] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/50">
            Contact Us
          </p>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-[#ef9d4a] shrink-0" />
              <span>Muthithi Road, Westlands, Rainbow Tower, 2nd Floor</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#ef9d4a] shrink-0" />
              <a href="mailto:contact@kneil.org" className="hover:text-[#ef9d4a] transition-colors">
                contact@kneil.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} NEIL. All Rights Reserved.</p>
          <p className="text-[#ef9d4a] font-medium tracking-wide">
            Collaboration | Leadership | Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
