import React from "react";

import HTMLIcon from "../assets/svg/html.svg";
import CSSIcon from "../assets/svg/css.svg";
import JSIcon from "../assets/svg/js.svg";
import MongoIcon from "../assets/svg/mongo.svg";
import NodeIcon from "../assets/svg/node.svg";
import ReactIcon from "../assets/svg/react.svg";
import IllIcon from "../assets/svg/ill.svg";
import IndIcon from "../assets/svg/ind.svg";
import AEIcon from "../assets/svg/ae.svg";
import PSIcon from "../assets/svg/ps.svg";
import LRIcon from "../assets/svg/lr.svg";

import "../scss/startScreen.scss";

export default function StartScreen(props) {
  return (
    <div className="start-screen">
      <div className="start-title-container">
        <h1>William Does.</h1>
        <div className="start-title-cursor"></div>
      </div>
      <div className="start-icons-grid">
        <img src={HTMLIcon} style={{ gridRowStart: 1, gridColumnStart: 1 }} />
        <img src={CSSIcon} style={{ gridRowStart: 1, gridColumnStart: 2 }} />
        <img src={JSIcon} style={{ gridRowStart: 1, gridColumnStart: 3 }} />
        <img src={ReactIcon} style={{ gridRowStart: 2, gridColumnStart: 1 }} />
        <img src={NodeIcon} style={{ gridRowStart: 2, gridColumnStart: 2 }} />
        <img src={MongoIcon} style={{ gridRowStart: 2, gridColumnStart: 3 }} />
        <img
          src={IllIcon}
          designIcon="true"
          style={{ gridRowStart: 1, gridColumnStart: 1 }}
        />
        <img
          src={IndIcon}
          designIcon="true"
          style={{ gridRowStart: 1, gridColumnStart: 2 }}
        />
        <img
          src={AEIcon}
          designIcon="true"
          style={{ gridRowStart: 1, gridColumnStart: 3 }}
        />
        <img
          src={PSIcon}
          designIcon="true"
          style={{ gridRowStart: 2, gridColumnStart: 1 }}
        />
        <img
          src={LRIcon}
          designIcon="true"
          style={{ gridRowStart: 2, gridColumnStart: 2 }}
        />
      </div>
      <div className="start-link">
        <a
          onClick={() => {
            props.onToggleOrbitControls();
            props.onToggleStartScreen(0);
          }}
        >
          Click Here to Meet Me.
        </a>
      </div>
    </div>
  );
}
