import { FaCar, FaCoins, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="">
      <section id="projects">
        <div className="text-white flex flex-col items-center mt-10 ">
          <p className="text-[#7c3aed] tracking-[0.3rem] mb-2">Portfolio</p>
          <div className="font-bold text-4xl">
            Projects That Define My Craft
          </div>
          {/* UnderLine */}
          <div className="mt-6 h-1 w-16 rounded-full  bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mb-12"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-16">
          {/* CampusRide Card */}
          <div className="flex flex-col bg-[#0f1628] flex-1 max-w-[31rem] rounded-xl px-6 py-4 mb-6">
            <div className="flex gap-4 ">
              <span className="mt-2">
                <FaCar />
              </span>
              <div>
                {" "}
                <h1 className="font-bold text-xl">CampusRide</h1>
                <p className="text-xs border-1 text-[#8b5cf6] border-[#8b5cf6] rounded-lg bg-[#8b5cf6]/10 px-2 py-1 w-20 m-2">
                  Full Stack
                </p>
              </div>
            </div>
            <p className="text-balance">
              A full-stack ride-sharing platform for campus students with 10+
              RESTful API endpoints. Features JWT authentication, bcrypt
              password hashing, ride creation, search, booking, and cancellation
              modules with 4 optimized MongoDB collections.
            </p>
            <div className="mt-4 flex gap-2 ">
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                Node.js
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                Express.js
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                MongoDB
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                JWT
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                bcrypt
              </span>
            </div>{" "}
            <div className="flex gap-4 ">
              {" "}
              <div className="flex gap-2 mt-4 place-items-center hover:text-[#8b5cf6]">
                <span className="text-xs">
                  {" "}
                  <FaExternalLinkAlt />
                </span>
                <a
                  target="_blank"
                  href="https://campus-ride-fullstack-project.vercel.app/login"
                  className="text-xs font-bold"
                >
                  Live Demo
                </a>
              </div>
              <div className="flex gap-2 mt-4 place-items-center hover:text-[#8b5cf6]">
                <span className="text-xs">
                  {" "}
                  <FaGithub />
                </span>
                <a
                  target="_blank"
                  href="https://github.com/Shubh-dev03/CampusRide-Fullstack-Project.git"
                  className="text-xs font-bold"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Expense Tracker Card */}
          <div className="flex flex-col bg-[#0f1628] flex-1 max-w-[31rem] rounded-xl px-6 py-4">
            <div className="flex gap-4 ">
              <span className="mt-2">
                <FaCoins />
              </span>
              <div>
                {" "}
                <h1 className="font-bold text-xl">Expense Tracker</h1>
                <p className="text-xs  text-[#06b6d4] border-1 border-[#06b6d4] rounded-lg bg-[#22d3ee]/10 px-2 py-1 w-20 m-2">
                  Backend
                </p>
              </div>
            </div>
            <p className="text-balance">
              A backend API to track daily expenses with full CRUD operations
              across 3 modules: transactions, categories, and summaries. Built
              with protected routes using middleware-based authentication and
              comprehensive input validation.
            </p>
            <div className="mt-4 flex gap-2 ">
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                Node.js
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                Express.js
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                MongoDB
              </span>
              <span className="bg-black text-xs border-1 border-slate-400 text-slate-400 px-3 py-1 rounded-lg">
                REST API
              </span>
            </div>{" "}
            <div className="flex gap-4 ">
              {" "}
              {/* <div className="flex gap-2 mt-4 place-items-center hover:text-[#06b6d4]">
                <span className="text-xs">
                  {" "}
                  <FaExternalLinkAlt />
                </span>
              </div> */}
              <div className="flex gap-2 mt-4 place-items-center hover:text-[#06b6d4]">
                <span>
                  <FaGithub />
                </span>
                <a
                  href="https://github.com/Shubh-dev03/ExpenseTracker_Backend.git"
                  target="_blank"
                  className="text-xs font-bold"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
