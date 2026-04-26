import { useState } from "react";
import OliveLogo from "../common/OliveLogo";

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "Features" },
  { label: "Pricing" },
  { label: "Blog", hasDropdown: true },
  { label: "Restaurants" },
  { label: "Food", hasDropdown: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <OliveLogo />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map(({ label, hasDropdown }) => (
            <li key={label}>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#2d4a0e] transition-colors font-medium bg-transparent border-none cursor-pointer p-0">
                {label}
                {hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-[#2d4a0e] font-medium transition-colors bg-transparent border-none cursor-pointer px-2 py-2">
            Sign in
          </button>
          <button
            className="flex items-center gap-2 text-sm text-white font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ background: "#1e3a06" }}
          >
            Get Olive
            <span className="bg-white text-[#1e3a06] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold leading-none">
              →
            </span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-8 py-5 flex flex-col gap-4">
          {navLinks.map(({ label }) => (
            <button key={label} className="text-sm text-gray-700 text-left font-medium hover:text-[#2d4a0e] transition-colors bg-transparent border-none cursor-pointer p-0">
              {label}
            </button>
          ))}
          <hr className="border-gray-100" />
          <button className="text-sm text-gray-600 font-medium text-left bg-transparent border-none cursor-pointer p-0">
            Sign in
          </button>
          <button
            className="flex items-center gap-2 text-sm text-white font-semibold px-5 py-2.5 rounded-full w-fit"
            style={{ background: "#1e3a06" }}
          >
            Get Olive →
          </button>
        </div>
      )}
    </header>
  );
}
