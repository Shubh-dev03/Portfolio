import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Hero() {
  return (
    <div>
      <section>
        <div className="px-6 md:px-16 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side Content */}
          <div className="flex flex-col max-w-xl">
            <h1 className="text-4xl md:text-7xl text-[#1C1917] font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#3730A3] to-[#0D9488] bg-clip-text text-transparent">
                Shubham <br /> Bharti
              </span>
            </h1>

            <h2 className="text-[#3730A3] text-3xl font-bold mt-6 mb-6">
              &#47;&#47;{" "}
              <span className="text-[#78716C]">Backend Developer</span>
            </h2>

            <p className="text-balance text-[#78716C] text-base leading-[1.7]">
              Final-year CS student building RESTful backends with Node.js,
              Express.js, and MongoDB. Expanding into React to become a
              full-stack engineer. Passionate about creating scalable APIs and
              solving real-world problems.
            </p>

            <div className="flex gap-6 mt-10 mb-2">
              <a
                href="#projects"
                className="inline-block bg-gradient-to-r from-[#3730A3] to-[#0D9488]
                px-4 md:px-6 py-2 md:py-3 rounded-lg text-white font-bold
                transition-transform duration-300 hover:scale-105"
              >
                View Projects →
              </a>

              <a
                href="/Shubham_Dev_Resume.pdf"
                download
                className="inline-flex items-center border border-[#F0E6D3]
                bg-[#FFF8EE]
                px-4 md:px-6 py-2 md:py-3 rounded-lg
                text-[#1C1917] font-bold
                transition-all duration-300 hover:border-[#3730A3]"
              >
                <FaDownload className="mr-3" size={16} />
                Download CV
              </a>
            </div>

            <div className="flex flex-row items-center gap-4 mt-4">
              <p className="text-[#78716C]">Find me on</p>

              <ul className="flex flex-row items-center gap-4 list-none">
                <li>
                  <a
                    href="https://github.com/Shubh-dev03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#78716C] hover:text-[#3730A3] transition duration-300"
                  >
                    <FaGithub size={22} />
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/in/shubham-s-bharti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#78716C] hover:text-[#0D9488] transition duration-300"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:shubhambharti478@gmail.com"
                    className="text-[#78716C] hover:text-[#D97706] transition duration-300"
                  >
                    <HiOutlineMail size={22} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex items-center justify-center w-[280px] h-[280px] md:w-[350px] md:h-[350px] shrink-0">
            {/* Outer Glow */}
            <div
              className="absolute w-full h-full rounded-full blur-2xl opacity-10"
              style={{
                background: "linear-gradient(135deg, #3730A3, #0D9488)",
              }}
            />

            {/* Main Circle */}
            <div
              className="relative w-[340px] h-[340px] rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: "#FFF8EE",
                border: "1px solid #F0E6D3",
              }}
            >
              <div className="text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[#3730A3] to-[#0D9488] bg-clip-text text-transparent">
                  SB
                </h1>

                <p className="text-sm text-[#78716C] mt-1">
                  Full-stack Developer
                </p>
              </div>
            </div>

            {/* API Badge */}
            <div
              className="absolute bottom-10 left-0 px-4 py-2 rounded-xl shadow-md"
              style={{
                background: "#FFF8EE",
                border: "1px solid #F0E6D3",
              }}
            >
              <p className="text-[#0D9488] font-semibold text-sm">18+</p>

              <p className="text-xs text-[#78716C]">API Endpoints</p>
            </div>

            {/* Projects Badge */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-md"
              style={{
                background: "#FFF8EE",
                border: "1px solid #F0E6D3",
              }}
            >
              <p className="text-[#3730A3] font-semibold text-sm">2+</p>

              <p className="text-xs text-[#78716C]">Projects</p>
            </div>

            {/* MERN Badge */}
            <div
              className="absolute right-0 bottom-16 px-4 py-2 rounded-xl shadow-md"
              style={{
                background: "#FFF8EE",
                border: "1px solid #F0E6D3",
              }}
            >
              <p className="text-[#D97706] font-semibold text-sm">MERN</p>

              <p className="text-xs text-[#78716C]">Tech Stack</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
