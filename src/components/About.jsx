import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    title: "Backend Architecture",
    description:
      "Building RESTful APIs with clean separation of concerns, proper error handling, and scalable design patterns.",
  },
  {
    title: "Security-First Approach",
    description:
      "Implementing JWT authentication, bcrypt password hashing, and input validation to ensure secure applications.",
  },
  {
    title: "Continuous Learning",
    description:
      "Actively expanding into React and full-stack development while strengthening backend expertise.",
  },
  {
    title: "Real-World Solutions",
    description:
      "Creating practical applications like ride-sharing platforms and expense trackers that solve real user problems.",
  },
];

const stats = [
  { value: "2026", label: "Graduating Year" },
  { value: 2, label: "Major Projects" },
  { value: 18, suffix: "+", label: "API Endpoints" },
  { value: 8, suffix: "+", label: "Technologies" },
];

const techTags = ["Node.js", "Express.js", "MongoDB", "React", "JavaScript"];

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="wrap">
        <SectionHeading title="Crafting Digital Experiences with Purpose" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Bio */}
          <Reveal className="lg:col-span-6">
            <div className="max-w-[34rem] space-y-6 text-pretty text-[1.1875rem] leading-[1.7] text-ink-soft">
              <p className="text-[1.4rem] leading-[1.5] text-ink md:text-[1.6rem]">
                I&apos;m a final-year Computer Science student at{" "}
                <span className="font-semibold">Sandip University</span>,
                passionate about building robust backend systems that power
                modern web applications.
              </p>

              <p>
                My journey started with building RESTful APIs using Node.js and
                Express.js. I&apos;ve developed complete backend systems like{" "}
                <span className="marker font-medium text-ink">CampusRide</span>{" "}
                — a ride-sharing platform featuring authentication, search,
                booking, and database-driven workflows powered by MongoDB.
              </p>

              <p>
                Currently, I&apos;m expanding into React to become a{" "}
                <span className="marker font-medium text-ink">
                  full-stack engineer
                </span>
                . I&apos;m actively seeking internship opportunities where I can
                contribute to real-world systems while continuing to grow as a
                developer.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border border-ink/20 bg-chalk px-3.5 py-1.5 font-display text-sm font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* What I focus on */}
          <ul className="flex flex-col gap-10 lg:col-span-5 lg:col-start-8">
            {highlights.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="group">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  <span className="hover-marker">{item.title}</span>
                </h3>
                <p className="mt-2 text-pretty text-ink-soft">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Numbers */}
        <Reveal
          as="dl"
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 rounded-[28px] bg-chalk p-8 md:mt-28 md:grid-cols-4 md:p-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-ink-soft">{stat.label}</dt>
              <dd className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {typeof stat.value === "number" ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default About;
