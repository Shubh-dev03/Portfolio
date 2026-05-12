function Navbar() {
  return (
    <div>
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
                href="./About.jsx"
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
    </div>
  );
}

export default Navbar;
