
import image from "../assets/easyclean.png"
import shopExtra from "../assets/shopExtra.png";
import eeee from "../assets/jobnest.png";
import dashboard from "../assets/dashboard.png";
import getit from "../assets/getit.png";
import landing from "../assets/riko.png";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "EasyKlean",
      description: "A Laundry and cleaning service website.",
      image: image,
      category: "Design",
      technologies: ["Figma", "Behance"],
      liveLink:
        "https://www.behance.net/gallery/244231829/Laundry-service-website",
      githubLink: "null",
    },

    {
      id: 2,
      title: "Admin Dashboard & Management",
      description:
        "A centralized dashboard designed to help administrators monitor and manage the platform.",
      image: dashboard,
      category: "Design",
      technologies: ["Figma", "Behance"],
      liveLink: "https://www.behance.net/gallery/256238595/Admin-Dashboard",
      githubLink: "null",
    },

    {
      id: 3,
      title: "ShopExtra",
      description: "Ecommerce fashion brand website.",
      image: shopExtra,
      category: "Dev Work",
      technologies: ["Javascript", "Vercel"],
      liveLink: "https://github.com/Damilola1700",
      githubLink: "https://github.com/Damilola1700",
    },

    {
      id: 4,
      title: "GetIt",
      description: "A Delivery App UX Casestudy",
      image: getit,
      category: "Design",
      technologies: ["Figma", "Behance"],
      liveLink:
        "https://www.behance.net/gallery/256526059/GetIt-Delivery-Casestudy",
      githubLink: "null",
    },

    {
      id: 5,
      title: "RIKO",
      description:
        "A responsive blog and social website,user can view blog,post blog and interact.",
      image: landing,
      category: "Dev Work",
      technologies: ["React", "MongoDB", "Github", "Vercel", "Rest API"],
      liveLink: "https://riko-blog-one.vercel.app/",
      githubLink: "null",
    },

    {
      id: 6,
      title: "JobNest",
      description:
        "A responsive job search website,user can view jobs,compare and apply for roles.",
      image: eeee,
      category: "Dev Work",
      technologies: ["React", "Rest API"],
      liveLink: "https://jobnest-delta.vercel.app/",
      githubLink: "null",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-10 py-12 md:py-20 scroll-mt-24 text-white bg-[#0a0a0c]"
    >
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <span className="w-6 h-[1px] bg-[#FF6B35]"></span>
        <p className="text-[#FF6B35] text-[12px] tracking-[3px] font-medium uppercase italic">
          Projects
        </p>
      </div>

      <div className="flex  justify-center gap-2.5 md:gap-4 overflow-x-auto sm:overflow-visible pb-4 mb-4 md:mb-6">
        {["All", "Design", "Dev Work"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 sm:px-8 py-2 rounded-full text-[12px] font-medium transition duration-300 border flex-shrink-0 ${
              activeFilter === filter
                ? "bg-[#FF6B35] border-[#FF6B35] text-white"
                : "border-[#2b2b32] text-[#f1f1f1]/50 hover:text-white hover:border-[#ffffff]/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 pt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between min-h-[420px]  rounded-3xl overflow-hidden border border-[#2b2b32] bg-[#111114] transition-all duration-300 hover:border-[#FF6B35]/60 hover:shadow-[0_0_40px_rgba(255,107,53,0.18)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full  h-full   object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition duration-500"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/95 group-hover:from-black/20 group-hover:via-black/40 transition duration-500" />

            <div className="relative z-10 flex items-center justify-between p-5">
              <span className="px-3 py-1 rounded-full border border-[#FF6B35]/40 bg-black/20 backdrop-blur-sm text-[#FF6B35] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FF6B35] text-white text-[10px] sm:text-[11px] font-bold tracking-wider">
                {String(project.id).padStart(2, "0")}
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-white group-hover:text-[#FF6B35] transition duration-300">
                {project.title}
              </h3>

              <p className="mt-2 text-white/80 leading-relaxed text-[13px] sm:text-[14px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 rounded-md bg-black/50 border border-white/15 text-white/80 text-[10px] sm:text-[11px] font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.liveLink && (
                <div className="mt-5 pt-4 border-t border-white/10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ff6b35] group-hover:text-[#FF6B35]  text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide transition duration-300"
                  >
                    View Live Demo
                    <FaArrowRight className="text-[12px] group-hover:translate-x-1 transition duration-300" />
                  </a>
                </div>
              )}
            </div>

            {/* bottom bar hover */}
            <div
              className="absolute bottom-0 left-0 h-[3px] w-full bg-[#FF6B35] origin-left transition-transform duration-500
              scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
