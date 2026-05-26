import { FaCar, FaCoins, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <section id="projects">
        <div className="flex flex-col items-center mt-10">
          <p className="text-[#3730A3] tracking-[0.3rem] mb-2 uppercase">
            Portfolio
          </p>

          <div className="font-bold text-4xl text-[#1C1917] text-center">
            Projects That Define My Craft
          </div>

          {/* UnderLine */}
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#3730A3] to-[#0D9488] mb-12"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-16">
          {/* CampusRide Card */}
          <div className="flex flex-col bg-[#FFF8EE] border border-[#F0E6D3] flex-1 max-w-[31rem] rounded-xl px-6 py-4 mb-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex gap-4">
              <span className="mt-2 text-[#3730A3]">
                <FaCar />
              </span>

              <div>
                <h1 className="font-bold text-xl text-[#1C1917]">CampusRide</h1>

                <p className="text-xs border border-[#3730A3] text-[#3730A3] rounded-lg bg-[#EEF2FF] px-2 py-1 w-20 m-2">
                  Full Stack
                </p>
              </div>
            </div>

            <p className="text-balance text-[#78716C]">
              A full-stack ride-sharing platform for campus students with 10+
              RESTful API endpoints. Features JWT authentication, bcrypt
              password hashing, ride creation, search, booking, and cancellation
              modules with 4 optimized MongoDB collections.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                Node.js
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                Express.js
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                MongoDB
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                JWT
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                bcrypt
              </span>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-2 mt-4 place-items-center text-[#78716C] hover:text-[#3730A3] transition-colors duration-200">
                <span className="text-xs">
                  <FaExternalLinkAlt />
                </span>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://campus-ride-fullstack-project.vercel.app/login"
                  className="text-xs font-bold"
                >
                  Live Demo
                </a>
              </div>

              <div className="flex gap-2 mt-4 place-items-center text-[#78716C] hover:text-[#3730A3] transition-colors duration-200">
                <span className="text-xs">
                  <FaGithub />
                </span>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Shubh-dev03/CampusRide-Fullstack-Project.git"
                  className="text-xs font-bold"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Expense Tracker Card */}
          <div className="flex flex-col bg-[#FFF8EE] border border-[#F0E6D3] flex-1 max-w-[31rem] rounded-xl px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex gap-4">
              <span className="mt-2 text-[#D97706]">
                <FaCoins />
              </span>

              <div>
                <h1 className="font-bold text-xl text-[#1C1917]">
                  Expense Tracker
                </h1>

                <p className="text-xs text-[#0D9488] border border-[#0D9488] rounded-lg bg-[#E6FFFA] px-2 py-1 w-20 m-2">
                  Backend
                </p>
              </div>
            </div>

            <p className="text-balance text-[#78716C]">
              A backend API to track daily expenses with full CRUD operations
              across 3 modules: transactions, categories, and summaries. Built
              with protected routes using middleware-based authentication and
              comprehensive input validation.
            </p>

            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                Node.js
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                Express.js
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                MongoDB
              </span>

              <span className="bg-[#FFFBF5] text-xs border border-[#F0E6D3] text-[#78716C] px-3 py-1 rounded-lg">
                REST API
              </span>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-2 mt-4 place-items-center text-[#78716C] hover:text-[#0D9488] transition-colors duration-200">
                <span>
                  <FaGithub />
                </span>

                <a
                  href="https://github.com/Shubh-dev03/ExpenseTracker_Backend.git"
                  target="_blank"
                  rel="noopener noreferrer"
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
