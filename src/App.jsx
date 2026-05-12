import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { HiOutlineMail, HiLightBulb } from "react-icons/hi";

function App() {
  return (
    <div className="bg-[#080d1a] min-h-screen w-full ">
      {/* Navbar Starts Here */}
      <div className=" flex justify-between h-24 text-white  font-semibold ml-4 pt-2">
        <div className="text-xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
          &#60;SB&#47;&#62;
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row gap-8 text-white font-semibold text-[#9ca3af]">
            <li>
              {" "}
              <a
                className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                href="#"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                href="#"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="md:hidden mr-2 text-slate-500 text-2xl">&#9776;</div>
          <button className=" hidden md:block bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold mr-6 px-4 py-1.5 rounded-lg">
            Let's Connect{" "}
          </button>
        </div>
      </div>
      {/* Navbar Ends here */}

      {/* Home Starts here */}
      {/* Left Side part */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="ml-6 flex flex-col space-y-12 ">
          <h1 className="text-4xl md:text-7xl text-white font-bold">
            Hi, I'm{" "}
            <span className=" bg-gradient-to-r bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
              Shubham <br /> Bharti
            </span>
          </h1>{" "}
          <h1 className="text-[#7c3aed] text-3xl font-bold mt-6 mb-6">
            &#47;&#47; <span className="text-slate-500">Problem Solver</span>
          </h1>{" "}
          <p className=" text-balance text-[#9ca3af] text-m leading-[1.6]">
            Final-yar CS student building RESTful backends with Node.js,
            Express.js, and MongoDB. Expanding into React to become a full-stack
            engineer. Passionate about creating scalable APIs and solving
            real-world problems.
          </p>
          <div>
            <button className="bg-gradient-to-r bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] mr-6 mt-10 mb-2 md:px-6 py-3 px-4 py-2 rounded-lg text-white font-bold transition transform duration-300 hover:scale-[1.1]">
              View Projects &rarr;
            </button>
            <button className="border-2 border-slate-400 md:px-6 py-3 px-4 py-2 rounded-lg text-white font-bold transition transform duration-300 hover:scale-[1.1]">
              <div className="flex ">
                {" "}
                <FaDownload className="size={16} mr-3" />
                Download CV
              </div>
            </button>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4">
            <p className="text-slate-500">Find me on</p>
            <ul className="flex flex-row items-center gap-4 list-none">
              <li>
                <a
                  href="https://github.com/Shubh-dev03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#8b5cf6] transition duration-300"
                >
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#8b5cf6] transition duration-300"
                >
                  <FaLinkedin size={22} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:your@email.com"
                  className="text-slate-400 hover:text-[#8b5cf6] transition duration-300"
                >
                  <HiOutlineMail size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side part */}
        <div className="relative flex items-center justify-center w-[350px] h-[350px] mx-[10rem] my-[4rem]">
          {/* Outer Glow */}
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] blur-2xl opacity-20"></div>

          {/* Main Circle */}
          <div className="relative w-[340px] h-[340px] rounded-full border border-cyan-400/40 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            {/* Inner Content */}
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                SB
              </h1>
              <p className="text-sm text-gray-400 mt-1">Full-stack Developer</p>
            </div>
          </div>

          {/* Floating Badge - APIs */}
          <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
            <p className="text-cyan-300 font-semibold text-sm">18+</p>
            <p className="text-xs text-gray-400">API Endpoints</p>
          </div>

          <div className="absolute ml-[14rem] mb-[18rem] bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
            <p className="text-[#8b5cf6] font-semibold text-sm">2+</p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>

          {/* Floating Badge - MERN */}
          <div className="absolute right-0 bottom-16 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
            <p className="text-pink-400 font-semibold text-sm">MERN</p>
            <p className="text-xs text-gray-400">Tech Stack</p>
          </div>
        </div>
      </div>
      {/* Home Ends here */}

      {/* About Section Starts here*/}

      {/* Main Container Div */}
      <div className=" ">
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
        <div className="text-white  flex flex-col md:flex-row justify-between">
          <div className=" rounded-3xl px-8 py-8 m-4 md:ml-[8rem]  text-balance max-w-[31rem] bg-[#0f1628]/60   ">
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
            <div className="mt-8 flex flex-wrap">
              <span
                className="px-2.5  py-1.5 mr-2 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blr-md shadow-[0_0_10px_#22d3ee33]
              from-[#06b6d4]/30 hover:to-[#22d3ee]/30
               hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                Node.js
              </span>
              <span
                className="px-2.5  py-1.5 mr-2 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blr-md shadow-[0_0_10px_#22d3ee33]
              from-[#06b6d4]/30 hover:to-[#22d3ee]/30
               hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                Express.js
              </span>
              <span
                className="px-2.5  py-1.5 mr-2 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blr-md shadow-[0_0_10px_#22d3ee33]
              from-[#06b6d4]/30 hover:to-[#22d3ee]/30
               hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                MongoDb
              </span>
              <span
                className="px-2.5  py-1.5 mr-2 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blr-md shadow-[0_0_10px_#22d3ee33]
              from-[#06b6d4]/30 hover:to-[#22d3ee]/30
               hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                React
              </span>
              <span
                className="px-2.5  py-1.5 mr-2 rounded-full text-sm font-medium text-[#67e8f9] bg-gradient-to-r from[#06b6d4]/20 to-[#22d3ee]/20 border border-[#22d3ee]/30 backdrop-blr-md shadow-[0_0_10px_#22d3ee33]
              from-[#06b6d4]/30 hover:to-[#22d3ee]/30
               hover:shadow-[0_0_15px_#22d3ee66] transition-all duration-300"
              >
                JavaScript
              </span>
            </div>
          </div>
          {/* About Right side */}
          <div className="">
            {/* Right-side 1st Card */}
            <div className="flex gap-6  mb-[1.5rem] bg-[#0f1628] ml-[2rem] mr-[8rem] px-4 py-4 h-[8rem] w-[28rem] md:w-[32rem] text-balance rounded-xl ">
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl text-[#7c3aed] border-2 border-[#7c3aed]/40 bg-[#0f1628]">
                {" "}
                <FaCode />{" "}
              </div>
              <div>
                <span>
                  <p className="font-bold mb-2">Backend Architecture</p>
                  <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                    {" "}
                    Building RESTful APIs with clean separation of
                    concerns,proper error handling and scalable design patterns.
                  </p>
                </span>
              </div>
            </div>
            {/* right-side 2nd Card */}
            <div className=" flex gap-6 mb-[1.5rem] bg-[#0f1628] ml-[2rem] mr-[8rem] px-4 py-4 h-[8rem] w-[28rem] md:w-[32rem] text-balance rounded-xl ">
              <div>
                {" "}
                <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl text-[#67e8f9] bg-[#22d3ee]/10 border border-[#22d3ee]/40 ">
                  {" "}
                  <HiLightBulb />{" "}
                </div>
              </div>
              <div>
                {" "}
                <span>
                  <p className="font-bold mb-2 ">Security-First Approach</p>
                  <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                    {" "}
                    Implementing JWT authentication, bcrypt password hashing,
                    and input validation to ensure secure applications.
                  </p>
                </span>
              </div>
            </div>
            {/* right-side 3rd card */}
            <div className=" flex gap-6 mb-[1.5rem] bg-[#0f1628] ml-[2rem] mr-[8rem] px-4 py-4 h-[8rem] w-[28rem] md:w-[32rem] text-balance rounded-xl ">
              {" "}
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl text-[#ec4899] bg-[#ec4899]/10 border border-[#ec4899]/40">
                {" "}
                <FaRocket />{" "}
              </div>
              <div>
                <div>
                  <span>
                    <p className="font-bold mb-2 ">Continuous learning</p>
                    <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                      {" "}
                      Actively expanding into React and full-stack development
                      while mastering backend technologies.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            {/* right-side 4th card */}
            <div className="flex gap-6 mb-[1.5rem] bg-[#0f1628] ml-[2rem] mr-[8rem] px-4 py-4 h-[8rem] w-[28rem] md:w-[32rem] text-balance rounded-xl ">
              {" "}
              <div className="mt-3 ml-2 px-3 py-3 h-10 w-10 rounded-xl text-[#7c3aed] border-2 border-[#7c3aed]/40 bg-[#0f1628]">
                {" "}
                <FaUsers />{" "}
              </div>{" "}
              <div>
                {" "}
                <span>
                  <p className="font-bold mb-2">Real-World solutions</p>
                  <p className="text-balance text-sm text-slate-400 leading-[1.6]">
                    {" "}
                    Creating practical applications like ride-sharing platforms
                    and expense trackers that solve actual problems
                  </p>
                </span>
              </div>
            </div>
          </div>
          {/* Right Side ends here */}
        </div>
        {/* left side bottom 4 cards grid */}
        <div className="md:ml-[8rem] max-w-[31rem] flex flex-wrap gap-8">
          <div className=" flex flex-col justify-center place-items-center text-bold h-24  w-[14rem] rounded-xl   bg-[#0f1628] pb-8 pt-6">
            <p className="text-3xl font-bold text-[#7c3aed]">2026</p>
            <p className="text-slate-400">Graduating Year</p>
          </div>
          <div className=" flex flex-col justify-center place-items-center text-bold h-24  w-[14rem] rounded-xl  bg-[#0f1628] pb-8 pt-6">
            <p className="text-3xl font-bold text-[#06b6d4]">2</p>
            <p className="text-slate-400">Major Projects</p>
          </div>
          <div className=" flex flex-col justify-center place-items-center text-bold h-24  w-[14rem] rounded-xl  bg-[#0f1628] pb-8 pt-6">
            <p className="text-3xl font-bold text-[#ec4899]">18+</p>
            <p className="text-slate-400">API Endpoints</p>
          </div>
          <div className=" flex flex-col justify-center place-items-center text-bold h-24  w-[14rem] rounded-xl  bg-[#0f1628] pb-8 pt-6">
            <p className="text-3xl font-bold text-[#7c3aed]">8+</p>
            <p className="text-slate-400">Technologies</p>
          </div>
        </div>
      </div>
      {/* About Secton Ends Here */}

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
        <div className="flex flex-wrap gap-4 justify-center ">

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
        
        {/* Expertise Frontend - Backend - Databases*/}
        {/* Parent div */}
        <div className="ml-16 mt-16 mb-[500px]">

        </div>
      </div>
    </div>
  );
}

export default App;
