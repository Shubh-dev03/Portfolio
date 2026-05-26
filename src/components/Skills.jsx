function Skills() {
  return (
    <div>
      {/* Skills Section Starts here */}
      <section id="skills" className="mt-16">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <p className="text-[#3730A3] tracking-[0.3rem] uppercase">
            Expertise
          </p>

          <div className="font-bold text-4xl text-center text-[#1C1917]">
            Skills & Technologies I Work With
          </div>

          {/* Underline */}
          <div
            className="mt-6 h-1 w-16 rounded-full mb-12"
            style={{
              background: "linear-gradient(90deg, #3730A3, #0D9488)",
            }}
          />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {/* Node */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105">
            <span className="text-xl text-[#3C873A] font-bold mb-1">Node</span>
            <p className="text-xs text-[#78716C]">Node.js</p>
          </div>

          {/* Express */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#3730A3] font-bold mb-1">
              Express
            </span>
            <p className="text-xs text-[#78716C]">Express.js</p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#13AA52] font-bold mb-1">Mongo</span>
            <p className="text-xs text-[#78716C]">MongoDB</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#0D9488] font-bold mb-1">React</span>
            <p className="text-xs text-[#78716C]">React.js</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#D97706] font-bold mb-1">JS</span>
            <p className="text-xs text-[#78716C]">JavaScript</p>
          </div>

          {/* JWT */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#3730A3] font-bold mb-1">JWT</span>
            <p className="text-xs text-[#78716C]">JWT Auth</p>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#F1502F] font-bold mb-1">Git</span>
            <p className="text-xs text-[#78716C]">Git</p>
          </div>

          {/* REST API */}
          <div className="flex flex-col items-center px-5 py-4 rounded-xl border border-[#F0E6D3] bg-[#FFF8EE] transition duration-300 hover:scale-105 min-w-[110px]">
            <span className="text-xl text-[#3730A3] font-bold mb-1">API</span>
            <p className="text-xs text-[#78716C]">REST API</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
