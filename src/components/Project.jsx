import image from "../assets/easyklean.png";
import shopExtra from "../assets/shopExtra.png";

import summary from "../assets/summary.png";
import landing from "../assets/landing.png";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "EasyKlean",
      description: "Laundry and cleaning servicce website.",
      image: image,
      category: "Design",
      technologies: ["Figma"],
      liveLink:
        "https://www.behance.net/gallery/244231829/Laundry-service-website",
      githubLink: "null",
    },

    {
      id: 2,
      title: "ShopExtra",
      description: "Ecommerce for a luxury fashion brand.",
      image: shopExtra,
      category: "Dev Work",
      technologies: ["javascript"],
      liveLink: "https://github.com/Damilola1700",
      githubLink: "https://github.com/Damilola1700",
    },

      {
      id: 3,
      title: "GetIt",
      description: "A delivery app casestudy.",
      image: summary,
      category: "Design",
      technologies: ["Figma"],
      liveLink: "null",
      githubLink: "null",
    },

       {
      id: 4,
      title: "RIKO",
      description: "A responsive blog website,where user can view blog,post blog and interact.",
      image: landing,
      category: "Dev Work",
      technologies: ["React","MongoDB"],
      liveLink: "https://riko-blog-one.vercel.app/",
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

      

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 pt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-3xl overflow-hidden border border-[#2b2b32] bg-[#111114] hover:border-[#FF6B35]/40 transition duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#18181c]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[14px] sm:text-[15px] font-medium text-[#f1f1f1] group-hover:text-[#FF6B35] transition duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[#FF6B35]/70 text-xs font-mono">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[#ffffff]/60 mt-2 leading-relaxed text-[12px] sm:text-[13px]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-[#2b2b32]/40">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-0.5 rounded-md bg-[#18181c] border border-[#2b2b32] text-[#f1f1f1]/60 text-[10px] uppercase tracking-wider"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35] hover:bg-[#e85b29] text-white text-[11px] sm:text-[12px] font-medium transition whitespace-nowrap self-start sm:self-auto w-full sm:w-auto"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      

    </section>
  );
}

export default Project;
