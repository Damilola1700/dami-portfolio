

import {
  FaWhatsapp,
  FaLinkedinIn,
  // FaInstagram,
  FaBehance,
  FaEnvelope,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[700px]  text-white px-5 sm:px-6 md:px-10  py-10 md:py-16 scroll-mt-24"
    >
      
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#FF6B35]"></span>

          <span className="text-[#FF6B35] text-[12px] tracking-[3px] font-medium italic">
            Contact
          </span>
        </div>

       
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <p className="text-[#f1f1f1]/90 text-[12px] md:text-[14px] leading-5 max-w-3xl mb-8">
            Have an idea worth building? Let's turn it into a thoughtful,
            functional digital experience. Reach out and let's get started.
          </p>

          <div className="max-w-3xl">
            <a
              href="https://wa.me/2349037697233"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-[#24242b]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-[#303038] flex items-center justify-center">
                  <FaWhatsapp className="text-[#FF6B35] text-lg" />
                </div>

                <div>
                  <h3 className="text-sm font-medium">WhatsApp</h3>

                  <p className="text-[#f1f1f1]/50 text-sm ">
                    +234 903 7697 233
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-[#555563] text-xl group-hover:text-[#FF6B35] transition" />
            </a>

         
            <a
              href="https://www.linkedin.com/in/damilola-ogunsakin-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-[#24242b]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-[#303038] flex items-center justify-center">
                  <FaLinkedinIn className="text-[#FF6B35] text-lg" />
                </div>

                <div>
                  <h3 className="text-sm font-medium">LinkedIn</h3>

                  <p className="text-[#f1f1f1]/50 text-sm ">
                    linkedin.com/in/damilola-ogunsakin
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-[#555563] text-xl group-hover:text-[#FF6B35] transition" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=lovethdamilola206@gmail.com&su=Project%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-[#24242b]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-[#303038] flex items-center justify-center">
                  <FaEnvelope className="text-[#FF6B35] text-lg" />
                </div>

                <div>
                  <h3 className="text-sm font-medium">Email</h3>

                  <p className="text-[#f1f1f1]/50 text-sm ">
                    lovethdamilola206@gmail.com
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-[#555563] text-xl group-hover:text-[#FF6B35] transition" />
            </a>

          
            <a
              href="https://www.behance.net/damilolalovethBE"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-5 border-b border-[#24242b]"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-[#303038] flex items-center justify-center">
                  <FaBehance className="text-[#FF6B35] text-lg" />
                </div>

                <div>
                  <h3 className="text-sm font-medium">Behance</h3>

                  <p className="text-[#f1f1f1]/50 text-sm">
                    behance.net/damilolalovethBE
                  </p>
                </div>
              </div>

              <FiArrowUpRight className="text-[#555563] text-xl group-hover:text-[#FF6B35] transition" />
            </a>
          </div>
        </div>

       
        <div className="border border-[#2b2b32] border-t-[#FF6B35] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[350px]">
          <div className="w-18 h-18 rounded-3xl border border-[#FF6B35]/30 bg-[#FF6B35]/10 flex items-center justify-center mb-7">
            <FaWhatsapp className="text-[#FF6B35] text-3xl" />
          </div>
         
          <h3 className="text-[16px] md:text-[20px] font-bold text-[#e9e7ef] mb-3">
            Chat on WhatsApp
          </h3>

          <p className="text-[#f1f1f1]/50 text-[14px] leading-5 max-w-md mb-8 px-10">
            Fastest way to reach me. I respond to all project inquiries within a
            few hours.
          </p>

    
          <a
            href="https://wa.me/2349037697233"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#FF6B35] hover:bg-[#e85b29] text-white font-medium text-[16px] py-3 rounded-full transition duration-300 "
          >
            Let's Talk On WhatsApp
          </a>

         
        </div>
      </div>
    </section>

    

  );
}

export default Contact;
