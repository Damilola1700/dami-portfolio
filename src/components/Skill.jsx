// function Skills() {
//   return (
//    <section id="skill" className="h-[700px] text-white -blue-500 scroll-mt-24">
//       <h2>My skills</h2>
//       <p>
//         I'm a UI/UX designer and frontend developer.
//       </p>
//     </section>
//   );
// }
// export default Skills;

import { FaFigma, FaReact, FaGitAlt, FaGithub, FaGoogle } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "UI/UX", level: 98 },
    { name: "Design System", level: 90 },
    { name: "Wireframe & Prototype ", level: 92 },
    { name: "Responsive Design", level: 97 },

    { name: "Tailwind", level: 96 },
    { name: "JavaScript", level: 94 },
    { name: "React", level: 95 },
    { name: "GitHub", level: 90 },
  ];

  const tools = [
    { name: "Figma", icon: FaFigma },
    { name: "MongoDB", icon: SiMongodb },
    { name: "React", icon: FaReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git", icon: FaGitAlt },
    { name: "Google Docs", icon: FaGoogle },
    { name: "GitHub", icon: FaGithub },
  ];

  return (
   
   <section
  id="skill"
  className="min-h-screen bg-[#0b0b0c] text-white px-5 sm:px-6 md:px-10 py-16 md:py-24"
>
  <div className="text-left mb-16">
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-[1px] bg-[#FF6B35]"></span>
      <p className="text-[#FF6B35] text-[12px] tracking-[3px] font-medium italic">
        Skills
      </p>
    </div>
  </div>

  <div className="max-w-[1400px] mx-auto mb-[50px]">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="
            min-h-[40px]
            px-2
            rounded-xl
            border border-white/10
            bg-white/[0.02]
            flex gap-2
            items-center
            justify-center
            transition-all duration-300
            hover:border-[#FF6B35]/40
            hover:bg-white/[0.04]
            hover:-translate-y-1
          "
        >
          <tool.icon className="text-lg shrink-0" />
          <span className="text-sm text-[#f1f1f1] truncate">{tool.name}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="max-w-[1400px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[12px] md:text-[14px] font-medium">
              {skill.name}
            </h3>
            <span className="text-[#FF6B35] text-sm">{skill.level}%</span>
          </div>

          <div className="w-full h-[6px] rounded-full bg-[#171719] border border-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#FF6B35]"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Skills;
