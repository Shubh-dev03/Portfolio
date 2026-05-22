import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    // Outer div — stretches full screen width, holds the background
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020817]/95 backdrop-blur-sm border-b border-white/5">
      {/* Inner div — constrains content to max width */}
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14 px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent"
        >
          &#60;SB&#47;&#62;
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden md:flex flex-row gap-8 text-[#9ca3af] font-semibold">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:bg-[#0f1628] px-3 py-1.5 rounded-lg hover:text-[#8b5cf6] transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition duration-200"
        >
          Let's Connect
        </a>

        {/* Mobile hamburger / close button — hidden on desktop */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {/* Swap icon based on state */}
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────────────────
          Uses max-height transition trick:
          - max-h-0   → collapsed (hidden but in DOM so transition works)
          - max-h-96  → expanded
          opacity fades in/out at the same time for a polished feel         */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "#0a0f1e" }}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 border-t border-white/5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-[#9ca3af] font-medium
                  hover:bg-[#0f1628] hover:text-[#8b5cf6] transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* CTA button inside mobile menu */}
          <li className="mt-3">
            <button
              onClick={closeMenu}
              className="w-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]
                text-white font-semibold px-4 py-2.5 rounded-lg
                hover:opacity-90 transition duration-200"
            >
              Let's Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
