import { Link, NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  // const newDate = new Date();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0b0b0c] text-[#f1f1f1] px-4 md:px-6 py-6">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 items-center border-b border-gray-400 pb-6">
        <div>
          {/* <h1 className="text-xl font-bold ">
            DEL<span className="text-[#f83151]">DESIGNS</span>
          </h1> */}

          <NavLink
            to="/"
            onClick={scrollToTop}
            className="font-bold text-[16px]"
          >
            D L
            <span className="inline-block ml-1 w-1.5 h-1.5 rounded-full bg-[#FF6B35] translate-y-[1px]"></span>
          </NavLink>

          <p className="text-[#f1f1f1] mt-4   text-[14px] ">
            Crafting interfaces that feel as good as they look.Transforming
            complex ideas into seamless digital experiences.
          </p>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="https://github.com/Damilola1700"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-[#f1f1f1] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/damilola-ogunsakin-/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-[#f1f1f1] rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://wa.me/2349037697233"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-[#f1f1f1] rounded-full flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            <FaWhatsapp />
          </a>

          <a
            // href="#"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=lovethdamilola206@gmail.com&su=Project%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            className="w-10 h-10 border border-[#f1f1f1] rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex ">
          <button
            onClick={scrollToTop}
            className="  text-[14px]  border border-[#f1f1f1] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            Back to top
            <FaArrowUp />
          </button>
        </div>
      </div>

      <div className=" text-[14px] justify-between items-center gap-4 pt-2 text-[#f1f1f1]">
        {/* <p>© {newDate.getFullYear()} DELDESIGNS. All rights reserved.</p> */}

        <p className=" text-[14px] text-center">
          Designed & built by DL.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
