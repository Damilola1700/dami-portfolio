import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0c]/80 px-5 py-4 text-white backdrop-blur-2xl md:px-[50px]">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            onClick={scrollToTop}
            className="font-bold text-[16px]"
          >
            D L
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[1px] rounded-full bg-[#FF6B35]"></span>
          </NavLink>

         
          <div className="hidden items-center md:flex">
            <a
              href="#about"
              className="mr-10 text-[14px] text-white transition-colors hover:text-[#FF6B35]"
            >
              About
            </a>

            <a
              href="#projects"
              className="mr-10 text-[14px] text-white transition-colors hover:text-[#FF6B35]"
            >
              Projects
            </a>

            <a
              href="#skill"
              className="mr-10 text-[14px] text-white transition-colors hover:text-[#FF6B35]"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-[14px] text-white transition-colors hover:text-[#FF6B35]"
            >
              Contact
            </a>
          </div>

       
          <a
            href="/CV.pdf"
            className="hidden rounded-full bg-[#FF6B35] px-6 py-2 text-[12px] font-medium text-[#FBFDFA] transition-transform hover:scale-105 md:block"
          >
            My CV
          </a>

        
          <div className="relative md:hidden">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />

            <label
              htmlFor="menu-toggle"
              className="flex  cursor-pointer items-center justify-center "
            >
              <FiMenu className="text-xl" />
            </label>

            <div className="pointer-events-none absolute right-0 top-14 w-56 translate-y-[-10px] rounded-2xl border border-white/10 bg-[#1A1D22] p-5 opacity-0 shadow-xl transition-all duration-300 peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:opacity-100">
              <div className="flex flex-col gap-5">
                <a
                  href="#about"
                  className="text-[14px] text-white transition-colors hover:text-[#FF6B35]"
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="text-[14px] text-white transition-colors hover:text-[#FF6B35]"
                >
                  Projects
                </a>

                <a
                  href="#skill"
                  className="text-[14px] text-white transition-colors hover:text-[#FF6B35]"
                >
                  Skills
                </a>

                <a
                  href="#contact"
                  className="text-[14px] text-white transition-colors hover:text-[#FF6B35]"
                >
                  Contact
                </a>

                <a
                  href="/CV.pdf"
                  className="rounded-full bg-[#FF6B35] px-5 py-2 text-center text-[12px] font-medium text-[#FBFDFA]"
                >
                  My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
