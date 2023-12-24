import "@/styles/components/menu/Tools.css";
import {
  SiJavascript,
  SiReact,
  SiDiscord,
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
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "react-tooltip";

const technologies = [
  {
    icon: SiJavascript,
    name: "JavaScript",
    link: "https://example.com",
  },
  {
    icon: SiReact,
    name: "React",
    link: "https://example.com",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    link: "https://example.com",
  },
  {
    icon: SiExpress,
    name: "Express",
    link: "https://example.com",
  },
  {
    icon: SiHtml5,
    name: "HTML",
    link: "https://example.com",
  },
  {
    icon: SiCss3,
    name: "CSS",
    link: "https://example.com",
  },
  {
    icon: SiPython,
    name: "Python",
    link: "https://example.com",
  },
  {
    icon: SiCplusplus,
    name: "C++",
    link: "https://example.com",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    link: "https://example.com",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    link: "https://example.com",
  },
  {
    icon: SiDiscord,
    name: "Discord",
    link: "https://example.com",
  },
  {
    icon: SiGithub,
    name: "Github",
    link: "https://example.com",
  },
  {
    icon: SiGoogle,
    name: "Google",
    link: "https://example.com",
  },

  {
    icon: SiVisualstudiocode,
    name: "Visual Studio Code",
    link: "https://example.com",
  },
  {
    icon: SiNetlify,
    name: "Netlify",
    link: "https://example.com",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    link: "https://example.com",
  },
];

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
              <a href={tech.link} key={index}>
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
