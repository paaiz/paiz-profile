import "@/styles/index.css";

import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";

import About from "@/components/menu/About";
import Projects from "@/components/menu/Projects";
import Tools from "@/components/menu/Tools";
import Social from "@/components/menu/Social";

import BornTime from "@/components/BornTime";
import Callsign from "@/components/Callsign";
import Loader from "@/components/Loader";

export default function App() {
  const [panel, setPanel] = useState(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const content = [
    { name: "About", unique: "about" },
    { name: "Projects", unique: "projects" },
    { name: "Tools", unique: "tools" },
    { name: "Social Media", unique: "social" },
  ];

  const socials = [
    { icon: SiGithub, link: "https://github.com/paaiz" },
    { icon: SiLinkedin, link: "https://linkedin.com/in/faizdzaki/" },
  ];

  const components = {
    about: <About />,
    projects: <Projects />,
    tools: <Tools />,
    social: <Social />,
  };

  const PanelComponent = ({ panel }) => {
    return components[panel] || null;
  };

  const closePanel = () => {
    setIsPanelVisible(false);
    setTimeout(() => setPanel(null), 650);
  };

  useEffect(() => {
    setIsPanelVisible(panel !== null);
  }, [panel]);

  return (
    <>
      <div
        className="panel"
        data-appear={isPanelVisible}
        style={{
          overflow: isPanelVisible ? "auto" : "hidden",
        }}
      >
        <div className="hamburger-container">
          <button className="hamburger" onClick={() => closePanel()}>
            <span className="line"></span>
          </button>
        </div>

        <PanelComponent panel={panel} />
      </div>

      <div className="container" data-appear={panel == null}>
        <div className="content">
          <div className="content-container">
            <Callsign />

            <div className="main-header">
              <h1>Hey, I'm Faiz Dzaki</h1>
              <p>
                You can call me Paiz. And I'm a
                <i>
                  <u>full-stack developer</u>{" "}
                </i>
                wanted to know more.
              </p>
            </div>

            <div className="menu">
              <ul>
                {content.map((value, index) => {
                  return (
                    <li key={index} onClick={() => setPanel(value.unique)}>
                      {value.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="footer">
            <div className="separator">
              <div className="social-media">
                {socials.map((value, index) => (
                  <a href={value.link} style={index === 0 ? { marginLeft: 0 } : {}} key={index}>
                    <value.icon />
                  </a>
                ))}
              </div>
              <p>This website made with ❤️ by Paiz.</p>
            </div>
            <BornTime />
          </div>
        </div>

        <Loader />
      </div>
    </>
  );
}
