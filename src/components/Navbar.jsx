function Navbar() {
  return (
    <div>
      {/* Navbar Starts Here */}
      <nav className=" fixed top-0 left-0 w-full z-50 bg-[#020817]  text-white  font-semibold">
        <div className="max-w-7xl mx-auto flex justify-between h-14 items-center px-6 ">
          <div className=" text-xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
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
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[#0f1628] p-1.5 rounded-lg  hover:text-[#8b5cf6]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="md:hidden mr-2 text-slate-500 text-2xl">
              &#9776;
            </div>
            <button className=" hidden md:block bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-semibold mr-6 px-4 py-1.5 rounded-lg">
              Let's Connect{" "}
            </button>
          </div>
        </div>
      </nav>
      {/* Navbar Ends here */}
    </div>
  );
}

export default Navbar;
