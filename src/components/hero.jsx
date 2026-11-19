import { FiArrowRight } from "react-icons/fi";


import TextEffect from "./TextEffect";
import IdCard from "./Card";

function Hero() {
  return (
  
<section
  id="hero"
  className="relative mx-auto mb-[20px] grid min-h-[500px] w-full grid-cols-1 items-center gap-8 overflow-hidden rounded-t-xl bg-[#0b0b0c] px-5  text-center md:px-10 lg:min-h-[600px] lg:grid-cols-2 lg:gap-6 lg:px-10 lg:py-0 lg:text-left"
>

  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_20%,transparent_75%)]" />

 
  <div className="relative z-10 order-2 mx-auto flex w-full max-w-[700px] flex-col items-center lg:mx-0 lg:items-start lg:order-1">
                         
    
    <div className="mb-[20px] inline-flex items-center gap-[9px] rounded-full border border-[#FF6B35]/35 bg-[#FF6B35]/8 px-4 py-2 pl-3 text-[13px] font-semibold text-[#FF9466]">
      <span className="relative flex h-[7px] w-[7px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B35] opacity-75" />
        <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#FF6B35]" />
      </span>
      Available for work
    </div>

  
    <h1 className="mb-4 text-[36px] font-medium italic leading-[1.05] tracking-[-0.03em] text-[#F7F4EF] sm:text-[50px] md:text-[64px] lg:text-[65px] xl:text-[76px]">
      Ogunsakin Damilola Loveth
    </h1>

   
    <p className="mb-[25px] max-w-[580px] text-[13px] italic leading-[1.7] text-[#c9c5be] sm:text-[15px] md:text-[16px]">
      I'm a
      <span className="rounded-sm  px-1.5 not-italic text-[#FF9466]">
        <TextEffect
          text="UI/UX Designer|Web Developer|Web Designer"
          speed={80}
          deleteSpeed={40}
          hold={1800}
        />
      </span>
      that turns scattered ideas into focused, clear interfaces that
      products actually need.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
      <a
        href="#projects"
        className="flex gap-1 items-center rounded-full bg-[#FF6B35] px-[26px] py-[11px] text-[15px] font-medium text-[#f1f1f1] transition-all hover:-translate-y-0.5 hover:bg-[#ff7c4d]"
      >
        View my work <FiArrowRight/>
      </a>

      <a
        href="#contact"
        className="rounded-full border border-white/20 px-[26px] py-[11px] text-[15px] font-medium text-[#f1f1f1] transition-all hover:-translate-y-0.5 hover:border-white/50"
      >
        Contact me
      </a>
    </div>
  </div>

  
  <div className="relative z-10 order-1 flex w-full items-center justify-center lg:order-2 lg:justify-end">
     
    <div className="w-full max-w-[420px]">
      <IdCard />
    </div>
  </div>
</section>


  );
}
export default Hero;
