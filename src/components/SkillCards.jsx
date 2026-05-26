import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    borderGradient: "linear-gradient(90deg, #3730A3, #4F46E5)",
    barGradient: "linear-gradient(90deg, #3730A3, #4F46E5)",
    percentColor: "#3730A3",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "React.js", level: 60 },
      { name: "JavaScript (ES6+)", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    borderGradient: "linear-gradient(90deg, #0D9488, #14B8A6)",
    barGradient: "linear-gradient(90deg, #0D9488, #14B8A6)",
    percentColor: "#0D9488",
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
    icon: "🛠️",
    borderGradient: "linear-gradient(90deg, #D97706, #F59E0B)",
    barGradient: "linear-gradient(90deg, #D97706, #F59E0B)",
    percentColor: "#D97706",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MongoDB Atlas", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Render (deployment)", level: 75 },
    ],
  },
];

function SkillBar({ name, level, barGradient, percentColor, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#78716C]">{name}</span>

        <span className="text-sm font-semibold" style={{ color: percentColor }}>
          {level}%
        </span>
      </div>

      {/* Track */}
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "#F0E6D3" }}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
            background: barGradient,
          }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, animate }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300"
      style={{
        background: "#FFF8EE",
        border: "1px solid #F0E6D3",
      }}
    >
      {/* Top gradient border line */}
      <div
        className="h-[3px] w-full"
        style={{ background: category.borderGradient }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{
              background: "#FFFBF5",
              border: "1px solid #F0E6D3",
            }}
          >
            {category.icon}
          </div>

          <h3 className="text-[#1C1917] font-bold text-lg">{category.title}</h3>
        </div>

        {/* Skill bars */}
        <div className="flex-1">
          {category.skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              barGradient={category.barGradient}
              percentColor={category.percentColor}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillCards() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 md:px-16"
    >
      {skillCategories.map((category) => (
        <SkillCard key={category.title} category={category} animate={animate} />
      ))}
    </div>
  );
}
