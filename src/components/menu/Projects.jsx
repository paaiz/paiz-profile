import "@/styles/components/menu/Projects.css";

import { useState, useRef } from "react";
import projects from "../../assets/projects";

export default function Projects() {
  const [hovered, setHovered] = useState(projects.map(() => false));
  const [animationFinished, setAnimationFinished] = useState(projects.map(() => false));

  const [clicked, setClicked] = useState(projects.map(() => false));

  const hoverBarRefs = useRef([]);

  const updateState = (index, callback, setter) => {
    setter((prev) => prev.map((state, i) => (i === index ? callback(state) : state)));
  };

  const handleClick = (index) => {
    updateState(index, (hoveredState) => !hoveredState, setHovered);
    updateState(index, (clickedState) => !clickedState, setClicked);

    console.log(`Clicked index: ${index}. State: ${clicked[index]}`);
  };

  const handleAnimationFinished = (index) => {
    const hoverBar = hoverBarRefs.current[index];
    const width = hoverBar ? hoverBar.offsetWidth : 0;
    const isExpanded = width > 0;

    updateState(index, () => isExpanded, setAnimationFinished);
    console.log(`Animation finished for index ${index}. State: ${animationFinished[index]}`);
  };

  const ProjectDetails = ({ projectItems, index }) => {
    return (
      <div
        className={`details-bg ${clicked[index] ? "slide-up" : "slide-down"}`}
        onTransitionEnd={() => handleAnimationFinished(index)}
      >
        <div className="project-details">
          <div>
            <h1>{projectItems.projectName}</h1>

            <div className="project-tools">
              {projectItems.tech.map((logo, i) => (
                <logo.name key={i} color="default" />
              ))}
            </div>
          </div>
          <p>{projectItems.projectDescription}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="projects-header">
        <h1 className="title">Projects</h1>
        <p className="paragraph">A list of projects I have created ever since I started coding. </p>
      </div>

      {/* <strong>
        <h1
          style={{
            color: "white",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Work in Progress.
        </h1>
      </strong> */}
      {projects.map((value, index) => (
        <div
          key={index}
          className="cards-container"
          style={{
            backgroundImage: `url(${value.projectImage})`,
          }}
          onClick={() => handleClick(index)}
          onTransitionEnd={() => handleAnimationFinished(index)}
        >
          <div className="bg-low">
            <div
              className={`hover-bar ${hovered[index] ? "hovered" : ""}`}
              ref={(el) => (hoverBarRefs.current[index] = el)}
            ></div>
          </div>

          <ProjectDetails projectItems={value} index={index} />
        </div>
      ))}
    </>
  );
}
