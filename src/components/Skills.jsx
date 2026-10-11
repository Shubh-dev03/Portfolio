import SectionHeading from "./SectionHeading";
import SkillCards from "./SkillCards";

const tools = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "React",
  "JavaScript",
  "JWT Auth",
  "Git",
  "REST API",
];

function ToolList({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {tools.map((tool, i) => (
        <li key={tool} className="flex items-center">
          <span
            className={`display whitespace-nowrap text-[clamp(3rem,9vw,7rem)] ${
              i % 2 === 0
                ? "text-chalk"
                : "text-transparent [-webkit-text-stroke:2px_#F4F5F0]"
            }`}
          >
            {tool}
          </span>
          <span
            aria-hidden="true"
            className="mx-6 h-3 w-3 shrink-0 rounded-full bg-signal md:mx-10 md:h-4 md:w-4"
          />
        </li>
      ))}
    </ul>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="on-dark overflow-hidden bg-pine py-24 text-chalk md:py-32"
    >
      <div className="wrap">
        <SectionHeading title="Skills & Technologies I Work With" />
      </div>

      {/* Slow ticker of the tools; pauses on hover, static for reduced motion */}
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          <ToolList />
          <ToolList hidden />
        </div>
      </div>

      <div className="wrap mt-20 md:mt-28">
        <SkillCards />
      </div>
    </section>
  );
}

export default Skills;
