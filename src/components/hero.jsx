import { FiArrowRight } from "react-icons/fi";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  return (
   

    <section
      id="hero"
      className="relative rounded-t-xl w-[100%] h-[500px] mb-[20px] mx-auto px-4 py-[100px] flex flex-col items-center justify-center text-center bg-[#0b0b0c]  overflow-hidde"
    >
     
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_20%,transparent_75%)]" />

      <div className="relative z-10 flex flex-col items-center max-w-[900px]">

        <div className="inline-flex items-center gap-[9px] rounded-full border border-[#FF6B35]/35 bg-[#FF6B35]/8 px-4 py-2 pl-3 text-[13px] font-semibold text-[#FF9466] mb-[20px]">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B35] opacity-75" />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FF6B35]" />
          </span>
          Available for work
        </div>

       
        <h1 className=" italic sm:px-10 md:px-20 font-medium text-[20px] md:text-[80px] leading-[0.98] tracking-[-0.01em] text-[#F7F4EF] mb-2">
          Ogunsakin Damilola Loveth
        </h1>

        
        <p className="italic sm:px-8 md:px-16 text-[12px] md:text-[16px] leading-[1.5] text-[#c9c5be] max-w-[640px] mb-[20px]">
          I'm a 
           <span className="not-italic text-[#FF9466] bg-[#FF6B35]/10 px-1.5 rounded-sm ">
          UI/UX designer and Developer
           </span>
           who turns scattered ideas into focused, confident interfaces that products actually need.
        </p>

     
        <div className="flex items-center gap-[14px] flex-wrap justify-center mb-[58px]">
          
          <a
            href="#projects"
            className=" items-center gap-[9px] rounded-full bg-[#FF6B35] px-[26px] py-[10px] text-[15px] font-medium text-[#f1f1f1] transition-all hover:-translate-y-0.5 hover:bg-[#ff7c4d]"
          >
            See my work
          </a>

          <a
            href="#contact"
            className=" items-center rounded-full border border-white/20 px-[26px] py-[10px] text-[15px] font-medium text-[#f1f1f1] transition-all hover:-translate-y-0.5 hover:border-white/50"
          >
            Hire me
          </a>
        </div>

           {/* socials here */}

        {/* <div className="flex gap-3">
          <a
            href="#"
            aria-label="Behance"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 text-[#cfcbc4] transition-all hover:-translate-y-0.5 hover:border-[#FF6B35] hover:text-[#FF6B35]"
          >
            
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 text-[#cfcbc4] transition-all hover:-translate-y-0.5 hover:border-[#FF6B35] hover:text-[#FF6B35]"
          >
           
          </a>
        </div> */}
      </div>
    </section>
  );
}
export default Hero;
