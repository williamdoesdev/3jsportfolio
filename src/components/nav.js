import React, { useState } from "react";

import "../scss/nav.scss";

export default function Nav(props) {
  const [showNav, setShowNav] = useState(true);

  const renderNav = () => {
    if (showNav) {
      return (
        <ul>
          <li>
            <a
              onClick={() => {
                props.onChangeCameraPos([-0.4, 0.9, 0.3]);
                props.onChangeCameraLook([-0.4, 0.9, 2]);
                props.onToggleOrbitControls();
                setShowNav(!showNav);
              }}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onChangeCameraPos([-0.4, 0.75, -0.34]);
                props.onChangeCameraLook([-2, 0.75, -0.34]);
                props.onToggleOrbitControls();
                props.onRenderMonitorScreen(2);
                setShowNav(!showNav);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onChangeCameraPos([-0.3, 0.75, -0.96]);
                props.onChangeCameraLook([-0.5, 0.75, -1.015]);
                props.onToggleOrbitControls();
                props.onRenderMonitorScreen(3);
                setShowNav(!showNav);
              }}
            >
              Design/Photography
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onChangeCameraPos([-0.25, 0.6, -1.25]);
                props.onChangeCameraLook([-0.35, 0, -1.275]);
                props.onToggleOrbitControls();
                props.onRenderMonitorScreen(4);
                setShowNav(!showNav);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <a
              onClick={() => {
                props.onToggleOrbitControls();
                props.onRenderMonitorScreen(0);
                setShowNav(!showNav);
              }}
            >
              Back
            </a>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav>
      {/* <div className="header-logo-container">
        <h1>William Does.</h1>
        <div></div>
      </div> */}
      {renderNav()}
    </nav>
  );
}
