import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// ── DATA ──────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub size={17} />,
    href: "https://github.com/Shubh-dev03",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={17} />,
    href: "https://linkedin.com/in/shubham-s-bharti",
    label: "LinkedIn",
  },
  {
    icon: <FaPhone size={15} />,
    href: "tel:+917620395855",
    label: "Phone",
  },
  {
    icon: <HiOutlineMail size={18} />,
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
    <footer className="on-dark border-t border-chalk/15 bg-ink text-chalk">
      <div className="wrap py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="display text-4xl md:text-5xl">Shubham Bharti</p>

            <p className="mt-5 max-w-sm text-pretty text-chalk/70">
              Backend Developer building scalable RESTful APIs with Node.js and
              MongoDB. Expanding into full-stack development with React.
            </p>

            <ul className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-chalk/10 text-chalk transition-colors duration-300 hover:bg-signal hover:text-ink"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <h4 className="font-display text-sm font-medium text-chalk/60">
              Navigation
            </h4>

            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-u transition-colors hover:text-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-medium text-chalk/60">
              Contact
            </h4>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="mailto:shubhambharti478@gmail.com"
                className="link-u self-start break-all transition-colors hover:text-signal"
              >
                shubhambharti478@gmail.com
              </a>

              <p className="text-chalk/70">Nashik, Maharashtra</p>

              <p className="mt-1 flex items-center gap-2.5 text-chalk/70">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
                </span>
                Seeking internship
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-chalk/15 pt-6 text-sm text-chalk/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Shubham Bharti. Made with{" "}
            <span className="text-signal">♥</span> using React &amp; Tailwind
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 rounded-full border border-chalk/25 px-4 py-2 font-display text-chalk transition-colors duration-300 hover:border-signal hover:bg-signal hover:text-ink"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
