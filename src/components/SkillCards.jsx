import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { useInView } from "../hooks/useInView";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "React.js", level: 60 },
      { name: "JavaScript (ES6+)", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST API Design", level: 85 },
      { name: "JWT Auth", level: 82 },
      { name: "bcrypt / Mongoose", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MongoDB Atlas", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Render (deployment)", level: 75 },
    ],
  },
];

// Each segment is 5%, so a level of 85 lights 17 of 20.
const SEGMENTS = 20;

function SkillRow({ name, level, groupDelay }) {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: "0px" });
  const lit = Math.round((level / 100) * SEGMENTS);

  return (
    <li ref={ref} className="py-3.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-lg text-chalk/90">{name}</span>
        <span className="font-display text-lg font-bold text-signal">
          <CountUp end={level} suffix="%" play={inView} />
        </span>
      </div>

      <div
        role="img"
        aria-label={`${name}: ${level}%`}
        className="mt-2.5 flex gap-[3px]"
      >
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <span
            key={i}
            className={`h-2 flex-1 rounded-[2px] transition-colors duration-500 ${
              inView && i < lit ? "bg-signal" : "bg-chalk/15"
            }`}
            style={{
              transitionDelay: inView ? `${groupDelay + i * 35}ms` : "0ms",
            }}
          />
        ))}
      </div>
    </li>
  );
}

function SkillCards() {
  return (
    <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {skillCategories.map((category, i) => (
        <Reveal key={category.title} delay={i * 100}>
          <h3 className="display border-b border-chalk/25 pb-4 text-4xl">
            {category.title}
          </h3>

          <ul className="mt-3">
            {category.skills.map((skill) => (
              <SkillRow
                key={skill.name}
                name={skill.name}
                level={skill.level}
                groupDelay={i * 100}
              />
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export default SkillCards;
