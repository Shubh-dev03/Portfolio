function Skills() {
  return (
    <div>
      {/* Skills Section Starts here */}

      {/* Main Container */}
      <div className="mt-16">
        <div>
          <div className="text-white flex flex-col items-center ">
            <p className="text-[#7c3aed] tracking-[0.3rem]">Expertise</p>
            <div className="font-bold text-4xl">
              Skills & Technologies I Work With
            </div>
            {/* UnderLine */}
            <div className="mt-6 h-1 w-16 rounded-full  bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mb-12"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mb-16 ">
          {/* S K I L L S */}
          {/* Node Card  */}
          <div className="flex flex-col place-items-center border border-[#008000]/50 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#008000] font-bold mb-1">Node</span>
            <p className="text-xs text-slate-400 ">Node.js</p>
          </div>
          {/* Express Card  */}
          <div className="flex flex-col place-items-center border border-[#9C9C9C]/50 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#9C9C9C] font-bold mb-1">
              Express
            </span>
            <p className="text-xs text-slate-400 ">Express.js</p>
          </div>
          {/* MongoDB Card  */}
          <div className="flex flex-col place-items-center border border-[#25A321]/70 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#25A321] font-bold mb-1">Mongo</span>
            <p className="text-xs text-slate-400 ">MongoDB</p>
          </div>
          {/* React Card  */}
          <div className="flex flex-col place-items-center border border-[#22d3ee]/50 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#22d3ee] font-bold mb-1">React</span>
            <p className="text-xs text-slate-400 ">React.js</p>
          </div>
          {/* JavaScript Card  */}
          <div className="flex flex-col place-items-center border border-[#FFEA2E]/40 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#FFEA2E] font-bold mb-1">JS</span>
            <p className="text-xs text-slate-400 ">JavaScript</p>
          </div>
          {/* JWT Card  */}
          <div className="flex flex-col place-items-center border border-[#FF0808]/50 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#FF0808] font-bold mb-1">JWT</span>
            <p className="text-xs text-slate-400 ">JWT Auth</p>
          </div>
          {/* Git Card  */}
          <div className="flex flex-col place-items-center border border-[#FF8708]/50 px-5 py-4 rounded-xl">
            <span className="text-xl text-[#FF8708] font-bold mb-1">Git</span>
            <p className="text-xs text-slate-400 ">Git</p>
          </div>
          {/* API Card  */}
          <div className="flex flex-col place-items-center border border-[#8b5cf6]/50 px-4 py-4 rounded-xl">
            <span className="text-xl text-[#8b5cf6] font-bold mb-1">API</span>
            <p className="text-xs text-slate-400 ">Rest API</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
