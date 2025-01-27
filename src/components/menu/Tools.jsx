import "@/styles/components/menu/Tools.css";

import { Tooltip } from "react-tooltip";
import technologies from "../../assets/technologies";

export default function Tools() {
  return (
    <>
      <div className="tools-bg">
        <div className="tools-header">
          <h1 className="title">Tools</h1>
          <p className="paragraph">
            A list of my daily basis tools and other things that I choose to learn for.
          </p>
        </div>

        <div className="tech-bg">
          {technologies.map((tech, index) => (
            <div className="tech-items" key={index}>
              <a href={tech.link} target="_blank" rel="noreferrer">
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
