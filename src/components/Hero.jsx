import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <div>
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
    </div>
  );
}

export default Hero;
