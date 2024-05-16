import "@/styles/components/Loader.css";

import { useEffect, useState } from "react";

import texts from "../assets/loadingMessages";

export default function Loader() {
  const [transition, setTransition] = useState(false);
  const [display, setDisplay] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    setLoadingText(texts[Math.floor(Math.random() * texts.length)]);

    setTimeout(() => {
      setTransition(true);

      setTimeout(() => {
        setDisplay(true);
      }, 300);
    }, 5000);
  }, []);

  return (
    <div
      className="initial-loading"
      transition-state={`${transition}`}
      display-state={`${display}`}
    >
      <div className="loading-icon">
        <p>{loadingText}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="32"
          height="32"
          style={{ shapeRendering: "auto", display: "block", background: "transparent" }}
        >
          <g>
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#faf9f6"
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
            <g></g>
          </g>
        </svg>
      </div>
    </div>
  );
}
