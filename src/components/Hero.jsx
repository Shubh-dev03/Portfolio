import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// The hero shows the portfolio as an API response, using the real facts from the site.
const fields = [
  ["name", "Shubham Bharti"],
  ["role", "Backend Developer"],
  ["stack", "MERN"],
  ["projects", "2+"],
  ["apiEndpoints", "18+"],
  ["location", "Nashik, Maharashtra"],
  ["openTo", ["Internships", "Remote"]],
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Shubh-dev03",
    icon: <FaGithub size={18} />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shubham-s-bharti",
    icon: <FaLinkedin size={18} />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:shubhambharti478@gmail.com",
    icon: <HiOutlineMail size={19} />,
    external: false,
  },
];

function Value({ value }) {
  if (Array.isArray(value)) {
    return (
      <>
        <span className="text-chalk/50">[</span>
        {value.map((item, i) => (
          <span key={item}>
            <span className="text-signal">&quot;{item}&quot;</span>
            {i < value.length - 1 && <span className="text-chalk/50">, </span>}
          </span>
        ))}
        <span className="text-chalk/50">]</span>
      </>
    );
  }
  return <span className="text-signal">&quot;{value}&quot;</span>;
}

function Hero() {
  return (
    <section className="pb-20 pt-28 md:pb-28 md:pt-36 lg:pb-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left: name and intro */}
        <div className="lg:col-span-7">
          <h1 className="display text-[clamp(4rem,15vw,13rem)]">
            <span className="mask">
              <span style={{ "--d": "100ms" }}>Shubham</span>
            </span>
            <span className="mask">
              <span style={{ "--d": "220ms" }}>Bharti</span>
            </span>
          </h1>

          <p
            className="rise mt-8 font-display text-2xl font-semibold md:text-3xl"
            style={{ "--d": "450ms" }}
          >
            Backend Developer
          </p>

          <p
            className="rise mt-5 max-w-[34rem] text-pretty text-[1.2rem] leading-[1.65] text-ink-soft"
            style={{ "--d": "550ms" }}
          >
            Final-year CS student building RESTful backends with Node.js,
            Express.js, and MongoDB. Expanding into React to become a full-stack
            engineer. Passionate about creating scalable APIs and solving
            real-world problems.
          </p>

          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--d": "650ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
            </a>

            <a
              href="/Shubham_Bharti_Resume.pdf"
              download
              className="btn btn-ghost"
            >
              <FaDownload size={14} aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-ink-soft"
            style={{ "--d": "750ms" }}
          >
            <p>Find me on</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.external ? "_blank" : undefined}
                    rel={s.external ? "noopener noreferrer" : undefined}
                    className="link-u inline-flex items-center gap-2 text-ink transition-colors hover:text-pine"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: the portfolio as an API response */}
        <div className="lg:col-span-5">
          <figure
            aria-label="Profile summary shown as an API response"
            className="rise rounded-[28px] bg-pine p-6 text-chalk shadow-[0_30px_60px_-30px_rgb(17_28_23/0.55)] sm:p-8"
            style={{ "--d": "500ms" }}
          >
            <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-xs text-chalk/70">
              <span className="break-all">GET /developer/shubham-bharti</span>
              <span className="rounded-full bg-signal px-2.5 py-0.5 font-medium text-ink">
                200 OK
              </span>
            </figcaption>

            <pre className="mt-6 whitespace-pre-wrap break-words font-mono text-[13px] leading-7 sm:text-sm sm:leading-8">
              <code>
                <span className="text-chalk/50">{"{"}</span>
                {fields.map(([key, value], i) => (
                  <span
                    key={key}
                    className="rise block pl-4 sm:pl-6"
                    style={{ "--d": `${800 + i * 110}ms` }}
                  >
                    <span className="text-chalk/70">&quot;{key}&quot;</span>
                    <span className="text-chalk/50">: </span>
                    <Value value={value} />
                    {i < fields.length - 1 && (
                      <span className="text-chalk/50">,</span>
                    )}
                  </span>
                ))}
                <span
                  className="rise block text-chalk/50"
                  style={{ "--d": `${800 + fields.length * 110}ms` }}
                >
                  {"}"}
                </span>
              </code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
