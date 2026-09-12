import { FaBriefcase, FaCode, FaCheckCircle } from "react-icons/fa";

function About() {
  // return (
  //   <section
  //     id="about"
  //     className=" h-[600px] sm:h-[700px] text-white pt-[20px] px-10 rounded-xl justify-center scroll-mt-24 "
  //   >
      

  //     <div className="text-left mb-16">
  //       <div className="flex items-center gap-2 mb-3">
  //         <span className="w-6 h-[1px] bg-[#FF6B35]"></span>
  //         <p className="text-[#FF6B35] text-[12px] tracking-[3px] font-medium  italic">
  //           About Me
  //         </p>
  //       </div>

  //       {/* <h2 className="text-[16px] md:text-[20px] font-bold">
  //         SKILLS AND TOOLSTACK
  //       </h2> */}
  //     </div>

  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
        
  //       <div>
  //         <p className="text-[#f1f1f1] text-[15px] leading-8 text-left font-normal">
  //           I'm a Product Design Engineer who bridges design and development to
  //           create functional digital experiences. My focus is on simplifying
  //           tasks that can feel overwhelming for first-time users and turning
  //           them into experiences that feel clear, reassuring, and effortless to
  //           navigate.
  //           <br />
  //           <br />
  //           My knowledge of development also allows me to collaborate with
  //           developers when bringing these designs to life. I understand the
  //           balance between what makes an experience work for the user and what
  //           is feasible to implement, ensuring that the designs I hand over are
  //           both user-centred and practical.
  //         </p>
  //       </div>

  //       {/* RIGHT - PROFILE / STATS */}
  //       <div className="border border-[#2b2b32]  rounded-2xl p-10 border-t-[#FF6B35]">
        
  //         <div className="flex items-center gap-5 pb-6 border-b border-[#2b2b32] ">
  //           <div className="w-14 h-14 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center">
  //             <span className="text-[#FF6B35] text-xl font-bold">DL</span>
  //           </div>

  //           <div>
  //             <h3 className="text-[16px] font-semibold text-[#f1f1f1]">
  //               Damilola Loveth
  //             </h3>

  //             <p className="text-[#f1f1f1]/50 mt-1 text-[14px]">
  //               Design Engineer · Nigeria
  //             </p>
  //           </div>
  //         </div>

  //         <div className="flex items-center gap-5 py-6 border-b border-[#2b2b32] ">
  //           <div className="w-12 h-12 rounded-full border border-[#303038] flex items-center justify-center">
  //             <FaBriefcase className="text-[#FF6B35] text-lg" />
  //           </div>

  //           <div>
  //             <h3 className="text-[16px] font-medium text-[#f1f1f1]">2+ years</h3>

  //             <p className="text-[#f1f1f1]/50 text-[14px] font-normal">Professional experience</p>
  //           </div>
  //         </div>

          
  //         <div className="flex items-center gap-5 py-6 border-b border-[#2b2b32]">
  //           <div className="w-12 h-12 rounded-full border border-[#303038] flex items-center justify-center">
  //             <FaCode className="text-[#FF6B35] text-lg" />
  //           </div>

  //           <div>
  //             <h3 className="text-[16px] font-medium text-[#f1f1f1]">
  //               10+ projects
  //             </h3>

  //             <p className="text-[#f1f1f1]/50 text-[14px] font-normal">Designed & developed</p>
  //           </div>
  //         </div>

          
  //         <div className="flex items-center gap-5 pt-6">
  //           <div className="w-12 h-12 rounded-full border border-[#303038] flex items-center justify-center">
  //             <FaCheckCircle className="text-[#FF6B35] text-lg" />
  //           </div>

  //           <div>
  //             <h3 className="text-[16px] font-medium text-[#f1f1f1]">
  //               100% committed
  //             </h3>

  //             <p className="text-[#f1f1f1]/50 text-[14px] font-normal">To quality & user experience</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* <div>
  //       <p>
  //         I'm a Product Design Engineer who bridges design and development to
  //         create functional digital experiences. My focus is on simplifying
  //         tasks that can feel overwhelming for first-time users and turning them
  //         into experiences that feel clear, reassuring, and effortless to
  //         navigate. 

  //         My knowledge of development also allows me to collaborate
  //         with developers when bringing these designs to life. I understand the
  //         balance between what makes an experience work for the user and what is
  //         feasible to implement, ensuring that the designs I hand over are both
  //         user-centred and practical.
  //       </p>
  //     </div> */}

  //     {/* <div>
  //       <div>
  //        <p>damilola loveth</p>
  //       <p>design engineer . Nigeria</p>
  //       </div>
  //      <div>
  //        <p>2+ experience</p>
  //      </div>
  //     </div> */}
  //   </section>
  // );


  return (
    <section
      id="about"
      className="h-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 rounded-xl scroll-mt-24 text-white bg-[#0a0a0c]"
    >
      {/* Section Title */}
      <div className="text-left mb-8 md:mb-12 lg:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#FF6B35]"></span>
          <p className="text-[#FF6B35] text-[12px] tracking-[3px] font-medium uppercase italic">
            About Me
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Bio Column */}
        <div className="space-y-5 md:space-y-6">
          <p className="text-[#f1f1f1] text-[14px] sm:text-[15px] leading-7 sm:leading-8 text-left font-normal">
            I'm a Product Design Engineer who bridges design and development to
            create functional digital experiences. My focus is on simplifying
            tasks that can feel overwhelming for first-time users and turning
            them into experiences that feel clear, reassuring, and effortless to
            navigate.
          </p>
          <p className="text-[#f1f1f1] text-[14px] sm:text-[15px] leading-7 sm:leading-8 text-left font-normal">
            My knowledge of development also allows me to collaborate with
            developers when bringing these designs to life. I understand the
            balance between what makes an experience work for the user and what
            is feasible to implement, ensuring that the designs I hand over are
            both user-centred and practical.
          </p>
        </div>

        {/* Right Profile Stats Box */}
        <div className="border border-[#2b2b32] rounded-2xl p-5 sm:p-8 lg:p-10 border-t-[#FF6B35] bg-[#111114]">
          
          {/* Header Block */}
          <div className="flex items-center gap-4 sm:gap-5 pb-5 border-b border-[#2b2b32]">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[#FF6B35] text-lg sm:text-xl font-bold">DL</span>
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#f1f1f1]">
                Damilola Loveth
              </h3>
              <p className="text-[#f1f1f1]/50 mt-0.5 text-[13px] sm:text-[14px]">
                Design Engineer · Nigeria
              </p>
            </div>
          </div>

          {/* Experience Row */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 border-b border-[#2b2b32]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#303038] flex items-center justify-center flex-shrink-0">
              <FaBriefcase className="text-[#FF6B35] text-base sm:text-lg" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#f1f1f1]">2+ years</h3>
              <p className="text-[#f1f1f1]/50 text-[13px] sm:text-[14px] font-normal">Professional experience</p>
            </div>
          </div>

          {/* Project Volume Row */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 border-b border-[#2b2b32]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#303038] flex items-center justify-center flex-shrink-0">
              <FaCode className="text-[#FF6B35] text-base sm:text-lg" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#f1f1f1]">10+ projects</h3>
              <p className="text-[#f1f1f1]/50 text-[13px] sm:text-[14px] font-normal">Designed & developed</p>
            </div>
          </div>

          {/* Commitment Row */}
          <div className="flex items-center gap-4 sm:gap-5 pt-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#303038] flex items-center justify-center flex-shrink-0">
              <FaCheckCircle className="text-[#FF6B35] text-base sm:text-lg" />
            </div>
            <div>
              <h3 className="text-[15px] sm:text-[16px] font-medium text-[#f1f1f1]">100% committed</h3>
              <p className="text-[#f1f1f1]/50 text-[13px] sm:text-[14px] font-normal">To quality & user experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}
export default About;
