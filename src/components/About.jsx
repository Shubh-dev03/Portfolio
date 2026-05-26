import { FaCode, FaRocket, FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

const highlights = [
  {
    icon: <FaCode />,
    title: "Backend Architecture",
    description:
      "Building RESTful APIs with clean separation of concerns, proper error handling, and scalable design patterns.",
    iconColor: "text-[#3730A3]",
    iconBg: "bg-[#F5F3FF] border border-[#3730A3]/20",
  },
  {
    icon: <HiLightBulb />,
    title: "Security-First Approach",
    description:
      "Implementing JWT authentication, bcrypt password hashing, and input validation to ensure secure applications.",
    iconColor: "text-[#0D9488]",
    iconBg: "bg-[#ECFDF5] border border-[#0D9488]/20",
  },
  {
    icon: <FaRocket />,
    title: "Continuous Learning",
    description:
      "Actively expanding into React and full-stack development while strengthening backend expertise.",
    iconColor: "text-[#D97706]",
    iconBg: "bg-[#FFF7ED] border border-[#D97706]/20",
  },
  {
    icon: <FaUsers />,
    title: "Real-World Solutions",
    description:
      "Creating practical applications like ride-sharing platforms and expense trackers that solve real user problems.",
    iconColor: "text-[#3730A3]",
    iconBg: "bg-[#F5F3FF] border border-[#3730A3]/20",
  },
];

const stats = [
  {
    value: "2026",
    label: "Graduating Year",
    color: "text-[#3730A3]",
  },
  {
    value: "2",
    label: "Major Projects",
    color: "text-[#0D9488]",
  },
  {
    value: "18+",
    label: "API Endpoints",
    color: "text-[#D97706]",
  },
  {
    value: "8+",
    label: "Technologies",
    color: "text-[#3730A3]",
  },
];

const techTags = ["Node.js", "Express.js", "MongoDB", "React", "JavaScript"];

function About() {
  return (
    <div id="about" className="mt-16">
      {/* Section Heading */}
      <div className="flex flex-col items-center">
        <p className="text-[#3730A3] tracking-[0.3rem] uppercase">Who I Am</p>

        <div className="font-bold text-4xl text-center text-[#1C1917]">
          Crafting Digital Experiences with Purpose
        </div>

        <div
          className="mt-8 h-1 w-16 rounded-full mb-12"
          style={{
            background: "linear-gradient(90deg, #3730A3, #0D9488)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Bio Card */}
        <div
          className="rounded-3xl px-8 py-8 m-4 md:ml-[8rem] text-balance max-w-[31rem]"
          style={{
            background: "#FFF8EE",
            border: "1px solid #F0E6D3",
          }}
        >
          <p className="mb-4 text-[#78716C] leading-relaxed">
            I'm a final-year Computer Science student at{" "}
            <span className="text-[#1C1917] font-semibold underline">
              Sandip University
            </span>
            , passionate about building robust backend systems that power modern
            web applications.
            <br />
            <br />
            My journey started with building RESTful APIs using Node.js and
            Express.js. I've developed complete backend systems like{" "}
            <span className="text-[#0D9488] font-medium">CampusRide</span> — a
            ride-sharing platform featuring authentication, search, booking, and
            database-driven workflows powered by MongoDB.
            <br />
            <br />
            Currently, I'm expanding into React to become a{" "}
            <span className="bg-gradient-to-r from-[#3730A3] to-[#0D9488] bg-clip-text text-transparent font-semibold">
              full-stack engineer
            </span>
            . I'm actively seeking internship opportunities where I can
            contribute to real-world systems while continuing to grow as a
            developer.
          </p>

          {/* Tech Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1.5 rounded-full text-sm font-medium
                text-[#0D9488]
                border border-[#0D9488]/20
                bg-[#ECFDF5]
                transition-all duration-300 hover:shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Highlight Cards */}
        <div className="flex flex-col">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 mb-6 ml-[2rem] mr-[8rem]
              px-4 py-4 min-h-[8rem]
              w-[28rem] md:w-[32rem]
              rounded-xl"
              style={{
                background: "#FFF8EE",
                border: "1px solid #F0E6D3",
              }}
            >
              <div
                className={`mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl shrink-0 flex items-center justify-center ${item.iconColor} ${item.iconBg}`}
              >
                {item.icon}
              </div>

              <div>
                <p className="font-bold mb-2 text-[#1C1917]">{item.title}</p>

                <p className="text-sm text-[#78716C] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="md:ml-[8rem] max-w-[31rem] flex flex-wrap gap-8 mt-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center items-center
            h-24 w-[14rem]
            rounded-xl pb-8 pt-6"
            style={{
              background: "#FFF8EE",
              border: "1px solid #F0E6D3",
            }}
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>

            <p className="text-[#78716C]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
