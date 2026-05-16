import { FaCode, FaRocket, FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

function About() {
  return (
    <div>
      <section id="about">
        {/* intro Div */}
        <div className="text-white flex flex-col items-center ">
          <p className="text-[#7c3aed] tracking-[0.3rem]">Who I am</p>
          <div className="font-bold text-4xl">
            Crafting digital Experiences with Purpose
          </div>
          {/* UnderLine */}
          <div className="mt-8 h-1 w-16 rounded-full  bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mb-12"></div>
        </div>

        {/* Left-side Description Card */}
        <div className="text-white flex flex-col md:flex-row justify-between px-6 md:px-16 gap-8">
          {/* Left Column: Description + Stats */}
          <div className="flex flex-col flex-1 max-w-[31rem]">
            <div className="rounded-3xl px-8 py-8 text-balance bg-[#0f1628]/60">
              <p className="mb-4">
                I'm a final-year Computer Science student at Sandip University,
                passionate about building robust backend systems that power modern
                web applications.
                <br />
                <br /> My journey started with building RESTful APIs using Node.js{" "}
                and Express.js. I've developed complete backend systems like
                CampusRide - a ride-sharing platform with authentication,search,
                and booking modules using MongoDB. <br />
                <br /> Currently, I'm expanding into React to become a full-stack
                engineer. I'm actively seeking internship opportunities where I
                can contribute to real-world systems and grow as a developer.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from-[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blur-md shadow-[0_0_10px_#22d3ee33] hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300">
                  Node.js
                </span>
                <span className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from-[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blur-md shadow-[0_0_10px_#22d3ee33] hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300">
                  Express.js
                </span>
                <span className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from-[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blur-md shadow-[0_0_10px_#22d3ee33] hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300">
                  MongoDb
                </span>
                <span className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from-[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blur-md shadow-[0_0_10px_#22d3ee33] hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300">
                  React
                </span>
                <span className="px-2.5 py-1.5 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from-[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blur-md shadow-[0_0_10px_#22d3ee33] hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Stats grid — inside left column */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex flex-col justify-center place-items-center h-24 w-[14rem] rounded-xl bg-[#0f1628] pb-8 pt-6">
                <p className="text-3xl font-bold text-[#7c3aed]">2026</p>
                <p className="text-slate-400">Graduating Year</p>
              </div>
              <div className="flex flex-col justify-center place-items-center h-24 w-[14rem] rounded-xl bg-[#0f1628] pb-8 pt-6">
                <p className="text-3xl font-bold text-[#06b6d4]">2</p>
                <p className="text-slate-400">Major Projects</p>
              </div>
              <div className="flex flex-col justify-center place-items-center h-24 w-[14rem] rounded-xl bg-[#0f1628] pb-8 pt-6">
                <p className="text-3xl font-bold text-[#ec4899]">18+</p>
                <p className="text-slate-400">API Endpoints</p>
              </div>
              <div className="flex flex-col justify-center place-items-center h-24 w-[14rem] rounded-xl bg-[#0f1628] pb-8 pt-6">
                <p className="text-3xl font-bold text-[#7c3aed]">8+</p>
                <p className="text-slate-400">Technologies</p>
              </div>
            </div>
          </div>

          {/* About Right side */}
          <div className="flex flex-col flex-1 max-w-[32rem] gap-6">
            {/* Right-side 1st Card */}
            <div className="flex gap-6 bg-[#0f1628] px-4 py-4 text-balance rounded-xl">
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 shrink-0 rounded-xl text-[#7c3aed] border-2 border-[#7c3aed]/40 bg-[#0f1628]">
                <FaCode />
              </div>
              <div>
                <p className="font-bold mb-2">Backend Architecture</p>
                <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                  Building RESTful APIs with clean separation of
                  concerns, proper error handling and scalable design patterns.
                </p>
              </div>
            </div>
            {/* right-side 2nd Card */}
            <div className="flex gap-6 bg-[#0f1628] px-4 py-4 text-balance rounded-xl">
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 shrink-0 rounded-xl text-[#67e8f9] bg-[#22d3ee]/10 border border-[#22d3ee]/40">
                <HiLightBulb />
              </div>
              <div>
                <p className="font-bold mb-2">Security-First Approach</p>
                <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                  Implementing JWT authentication, bcrypt password hashing,
                  and input validation to ensure secure applications.
                </p>
              </div>
            </div>
            {/* right-side 3rd card */}
            <div className="flex gap-6 bg-[#0f1628] px-4 py-4 text-balance rounded-xl">
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 shrink-0 rounded-xl text-[#ec4899] bg-[#ec4899]/10 border border-[#ec4899]/40">
                <FaRocket />
              </div>
              <div>
                <p className="font-bold mb-2">Continuous learning</p>
                <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                  Actively expanding into React and full-stack development
                  while mastering backend technologies.
                </p>
              </div>
            </div>
            {/* right-side 4th card */}
            <div className="flex gap-6 bg-[#0f1628] px-4 py-4 text-balance rounded-xl">
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 shrink-0 rounded-xl text-[#7c3aed] border-2 border-[#7c3aed]/40 bg-[#0f1628]">
                <FaUsers />
              </div>
              <div>
                <p className="font-bold mb-2">Real-World solutions</p>
                <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                  Creating practical applications like ride-sharing platforms
                  and expense trackers that solve actual problems
                </p>
              </div>
            </div>
          </div>
          {/* Right Side ends here */}
        </div>
      </section>
    </div>
  );
}

export default About;
