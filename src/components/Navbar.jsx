import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#", id: "top" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const sectionIds = ["about", "skills", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  function closeMenu() {
    setOpen(false);
  }

  // Background change and "back at top" state
  useEffect(() => {
    let frame = 0;

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        if (window.scrollY < 200) setActive("top");
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the section currently under the middle of the viewport
  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open, close it on Escape or resize
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = "hidden";

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled && !open
            ? "bg-mist/85 shadow-[0_1px_0_0_rgb(17_28_23/0.1)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between md:h-20">
          <a
            href="#"
            onClick={closeMenu}
            className="font-display text-xl font-extrabold tracking-tight"
          >
            Shubham Bharti
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "location" : undefined}
                        className={`rounded-full px-4 py-2 font-display text-[0.95rem] font-medium transition-colors duration-300 ${
                          isActive
                            ? "bg-signal text-ink"
                            : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a href="#contact" className="btn btn-primary">
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          <button
            type="button"
            className="relative -mr-2 h-11 w-11 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`absolute left-2.5 right-2.5 h-[1.5px] rounded bg-ink transition-all duration-500 ease-out-expo ${
                open ? "top-1/2 rotate-45" : "top-[17px]"
              }`}
            />
            <span
              className={`absolute left-2.5 right-2.5 h-[1.5px] rounded bg-ink transition-all duration-500 ease-out-expo ${
                open ? "top-1/2 -rotate-45" : "top-[26px]"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-mist transition-[clip-path] duration-700 ease-out-expo md:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="wrap flex min-h-full flex-col justify-between pb-10 pt-28"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={link.label} className="overflow-hidden">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active === link.id ? "location" : undefined}
                  style={{
                    transitionDelay: open ? `${150 + i * 70}ms` : "0ms",
                  }}
                  className={`display block py-1 text-[clamp(3rem,15vw,5rem)] transition-transform duration-700 ease-out-expo ${
                    open ? "translate-y-0" : "translate-y-full"
                  } ${active === link.id ? "text-pine" : "text-ink"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-5">
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn btn-primary w-full"
            >
              <span>Let&apos;s Connect</span>
            </a>
            <a
              href="mailto:shubhambharti478@gmail.com"
              className="link-u self-start text-ink-soft"
            >
              shubhambharti478@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
