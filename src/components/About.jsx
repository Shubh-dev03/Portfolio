import { FaCode, FaRocket, FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

// ── DATA ──────────────────────────────────────────────────────────────────────
// Instead of writing 4 identical card divs, we put the unique values in an
// array and loop over them. Add a 5th card? Just add one object here.
const highlights = [
  {
    icon: <FaCode />,
    title: "Backend Architecture",
    description:
      "Building RESTful APIs with clean separation of concerns, proper error handling and scalable design patterns.",
    iconColor: "text-[#7c3aed]",
    iconBg: "border-2 border-[#7c3aed]/40 bg-[#0f1628]",
  },
  {
    icon: <HiLightBulb />,
    title: "Security-First Approach",
    description:
      "Implementing JWT authentication, bcrypt password hashing, and input validation to ensure secure applications.",
    iconColor: "text-[#67e8f9]",
    iconBg: "bg-[#22d3ee]/10 border border-[#22d3ee]/40",
  },
  {
    icon: <FaRocket />,
    title: "Continuous Learning",
    description:
      "Actively expanding into React and full-stack development while mastering backend technologies.",
    iconColor: "text-[#ec4899]",
    iconBg: "bg-[#ec4899]/10 border border-[#ec4899]/40",
  },
  {
    icon: <FaUsers />,
    title: "Real-World Solutions",
    description:
      "Creating practical applications like ride-sharing platforms and expense trackers that solve actual problems.",
    iconColor: "text-[#7c3aed]",
    iconBg: "border-2 border-[#7c3aed]/40 bg-[#0f1628]",
  },
];

const stats = [
  { value: "2026", label: "Graduating Year", color: "text-[#7c3aed]" },
  { value: "2",    label: "Major Projects",  color: "text-[#06b6d4]" },
  { value: "18+",  label: "API Endpoints",   color: "text-[#ec4899]" },
  { value: "8+",   label: "Technologies",    color: "text-[#7c3aed]" },
];

const techTags = ["Node.js", "Express.js", "MongoDB", "React", "JavaScript"];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <div id="about" className="mt-16">

      {/* Section heading */}
      <div className="text-white flex flex-col items-center">
        <p className="text-[#7c3aed] tracking-[0.3rem]">Who I am</p>
        <div className="font-bold text-4xl text-center">
          Crafting Digital Experiences with Purpose
        </div>
        <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mb-12" />
      </div>

      {/* Two-column layout */}
      <div className="text-white flex flex-col md:flex-row justify-between">

        {/* Left — Bio card */}
        <div className="rounded-3xl px-8 py-8 m-4 md:ml-[8rem] text-balance max-w-[31rem] bg-[#0f1628]/60">
          <p className="mb-4 text-slate-300 leading-relaxed">
            I'm a final-year Computer Science student at{" "}
            <span className="text-white font-semibold underline">Sandip University</span>,
            passionate about building robust backend systems that power modern web applications.
            <br /><br />
            My journey started with building RESTful APIs using Node.js and Express.js. I've
            developed complete backend systems like{" "}
            <span className="text-[#22d3ee]">CampusRide</span> — a ride-sharing platform with
            authentication, search, and booking modules using MongoDB.
            <br /><br />
            Currently, I'm expanding into React to become a{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent font-semibold">
              full-stack engineer
            </span>
            . I'm actively seeking internship opportunities where I can contribute to real-world
            systems and grow as a developer.
          </p>

          {/* Tech tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9]
                  border border-[#22d3ee]/30 bg-[#06b6d4]/10
                  hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Highlight cards (looped!) */}
        <div className="flex flex-col">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 mb-6 bg-[#0f1628] ml-[2rem] mr-[8rem] px-4 py-4
                min-h-[8rem] w-[28rem] md:w-[32rem] text-balance rounded-xl"
            >
              <div className={`mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl ${item.iconColor} ${item.iconBg} shrink-0`}>
                {item.icon}
              </div>
              <div>
                <p className="font-bold mb-2">{item.title}</p>
                <p className="text-sm text-slate-400 leading-[1.6]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid (looped!) */}
      <div className="md:ml-[8rem] max-w-[31rem] flex flex-wrap gap-8 mt-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center items-center h-24 w-[14rem] rounded-xl bg-[#0f1628] pb-8 pt-6"
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default About;