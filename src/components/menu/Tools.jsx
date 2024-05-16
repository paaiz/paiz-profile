import "@/styles/components/menu/Tools.css";
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiGoogle,
  SiCss3,
  SiHtml5,
  SiCplusplus,
  SiNodedotjs,
  SiVisualstudiocode,
  SiMongodb,
  SiNetlify,
  SiVercel,
  SiExpress,
  SiPython,
  SiNextdotjs,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "react-tooltip";

export default function Tools() {
  return (
    <>
      <div className="tools-bg">
        <div className="tools-header">
          <h1>Tools</h1>
          <p>A list of my daily basis tools and other things that I choose to learn for.</p>
        </div>

        <div className="tech-bg">
          {technologies.map((tech, index) => (
            <div className="tech-items">
              <a href={tech.link} key={index} target="_blank" rel="noreferrer">
                <tech.icon
                  color="default"
                  data-tooltip-id={tech.name}
                  data-tooltip-content={tech.name}
                />
              </a>
              <Tooltip id={tech.name} style={{ backgroundColor: "black" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const technologies = [
  {
    icon: SiJavascript,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiReact,
    name: "React",
    link: "https://react.dev/",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    icon: SiExpress,
    name: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },

  {
    icon: SiHtml5,
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: SiCss3,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: SiPython,
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    icon: SiCplusplus,
    name: "C++",
    link: "https://cplusplus.com/",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: SiGithub,
    name: "Github",
    link: "https://github.com",
  },
  {
    icon: SiGoogle,
    name: "Google",
    link: "https://google.com",
  },
  {
    icon: SiVisualstudiocode,
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
  },
  {
    icon: SiNetlify,
    name: "Netlify",
    link: "https://www.netlify.com/",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    link: "https://vercel.com/",
  },
];
