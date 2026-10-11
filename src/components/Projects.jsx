import {
  FaCar,
  FaCoins,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "CampusRide",
    type: "Full Stack",
    icon: <FaCar aria-hidden="true" />,
    description:
      "A full-stack ride-sharing platform for campus students with 10+ RESTful API endpoints. Features JWT authentication, bcrypt password hashing, ride creation, search, booking, and cancellation modules with 4 optimized MongoDB collections.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    links: [
      {
        label: "Live Demo",
        href: "https://campus-ride-fullstack-project.vercel.app/",
        icon: <FaExternalLinkAlt size={12} aria-hidden="true" />,
      },
      {
        label: "Source Code",
        href: "https://github.com/Shubh-dev03/CampusRide-Fullstack-Project.git",
        icon: <FaGithub size={15} aria-hidden="true" />,
      },
    ],
  },
  {
    title: "Expense Tracker",
    type: "Backend",
    icon: <FaCoins aria-hidden="true" />,
    description:
      "A backend API to track daily expenses with full CRUD operations across 3 modules: transactions, categories, and summaries. Built with protected routes using middleware-based authentication and comprehensive input validation.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/Shubh-dev03/ExpenseTracker_Backend.git",
        icon: <FaGithub size={15} aria-hidden="true" />,
      },
    ],
  },
  {
    title: "SecureKey",
    type: "Web Tool",
    icon: <FaLock aria-hidden="true" />,
    description:
      "SecureKey is a modern password and passphrase generator designed to help users create strong, secure credentials instantly. It includes customizable security options, strength analysis, and one-click copy functionality. Built with a focus on simplicity, usability, and online safety.",
    stack: ["HTML", "CSS", "JavaScript", "Git", "Vercel"],
    links: [
      {
        label: "Live Demo",
        href: "https://secure-key-rho.vercel.app/",
        icon: <FaExternalLinkAlt size={12} aria-hidden="true" />,
      },
      {
        label: "Source Code",
        href: "https://github.com/Shubh-dev03/SecureKey.git",
        icon: <FaGithub size={15} aria-hidden="true" />,
      },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-chalk py-24 md:py-32">
      <div className="wrap">
        <SectionHeading title="Projects That Define My Craft" />

        <div>
          {projects.map((project) => (
            <Reveal
              as="article"
              key={project.title}
              className="group grid gap-6 border-t border-ink/15 py-10 last:border-b md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="md:col-span-6 lg:col-span-7">
                <h3 className="display text-[clamp(2.75rem,8vw,8rem)]">
                  <span className="hover-marker">{project.title}</span>
                </h3>

                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-3.5 py-1.5 font-display text-sm font-semibold">
                  {project.icon}
                  {project.type}
                </p>
              </div>

              <div className="md:col-span-6 md:pt-3 lg:col-span-5">
                <p className="text-pretty text-ink-soft">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-ink/20 px-3 py-1 font-display text-sm font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u inline-flex items-center gap-2 font-display font-semibold transition-colors hover:text-pine"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
