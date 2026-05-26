import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// ── DATA ──────────────────────────────────────────────────────────────────────
const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

const socialLinks = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/Shubh-dev03",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://linkedin.com/in/shubham-s-bharti",
    label: "LinkedIn",
  },
  {
    icon: <FaPhone size={14} />,
    href: "tel:+917620395855",
    label: "Phone",
  },
  {
    icon: <HiOutlineMail size={16} />,
    href: "mailto:shubhambharti478@gmail.com",
    label: "Email",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      className="mt-16 border-t"
      style={{
        borderColor: "#F0E6D3",
        background: "#FFF8EE",
      }}
    >
      {/* Top gradient separator line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, #3730A3, #0D9488)",
        }}
      />

      <div className="px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* ── Col 1 — Brand ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-5 max-w-sm">
            <span
              className="text-2xl font-bold bg-gradient-to-r from-[#3730A3] to-[#0D9488]
              bg-clip-text text-transparent"
            >
              &lt;Shubham Bharti /&gt;
            </span>

            <p className="text-[#78716C] text-sm leading-relaxed">
              Backend Developer building scalable RESTful APIs with Node.js and
              MongoDB. Expanding into full-stack development with React.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center
                  text-[#78716C]
                  bg-[#FFFBF5]
                  border border-[#F0E6D3]
                  hover:text-[#3730A3]
                  hover:border-[#3730A3]
                  hover:bg-[#F5F3FF]
                  transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Navigation ────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#1C1917] font-semibold tracking-widest text-xs uppercase">
              Navigation
            </h4>

            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#78716C] text-sm hover:text-[#3730A3] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Contact info ──────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[#1C1917] font-semibold tracking-widest text-xs uppercase">
              Contact
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:shubhambharti478@gmail.com"
                className="text-[#78716C] text-sm hover:text-[#3730A3] transition-colors duration-200"
              >
                shubhambharti478@gmail.com
              </a>

              <p className="text-[#78716C] text-sm">Nashik, Maharashtra</p>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]" />
                </span>

                <span className="text-[#78716C] text-sm">
                  Seeking internship
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid #F0E6D3",
          }}
        >
          <p className="text-[#78716C] text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Shubham Bharti. Made with{" "}
            <span className="text-[#D97706]">♥</span> using React &amp; Tailwind
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#78716C] text-sm px-4 py-2 rounded-lg
            bg-[#FFFBF5]
            border border-[#F0E6D3]
            hover:text-[#3730A3]
            hover:border-[#3730A3]
            hover:bg-[#F5F3FF]
            transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
