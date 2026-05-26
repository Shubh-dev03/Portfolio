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
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,251,245,0.92)",
        borderBottom: "1px solid #F0E6D3",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14 px-6 md:px-10">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-[#3730A3] to-[#0D9488] bg-clip-text text-transparent"
        >
          &#60;SB&#47;&#62;
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row gap-8 text-[#78716C] font-semibold">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded-lg hover:bg-[#FFF8EE] hover:text-[#3730A3] transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-[#3730A3] to-[#0D9488]
          text-white font-semibold px-4 py-1.5 rounded-lg
          hover:opacity-90 transition duration-200"
        >
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#78716C] hover:text-[#3730A3] transition duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "#FFF8EE",
        }}
      >
        <ul
          className="flex flex-col px-6 py-4 gap-1"
          style={{
            borderTop: "1px solid #F0E6D3",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-[#78716C] font-medium
                hover:bg-[#FFFBF5]
                hover:text-[#3730A3]
                transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="mt-3">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full text-center
              bg-gradient-to-r from-[#3730A3] to-[#0D9488]
              text-white font-semibold px-4 py-2.5 rounded-lg
              hover:opacity-90 transition duration-200"
            >
              Let's Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
