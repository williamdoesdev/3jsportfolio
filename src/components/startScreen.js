import React from "react";

export default function StartScreen() {
  return (
    <div className="start-screen">
      <div className="start-title-container">
        <h1>William Does.</h1>
        <div className="start-title-cursor"></div>
      </div>
      <div className="start-icons-container">
        <div className="start-icons-flexbox">
          <img src={HTMLIcon} style={{ gridRowStart: 1, gridColumnStart: 1 }} />
          <img src={CSSIcon} style={{ gridRowStart: 1, gridColumnStart: 2 }} />
          <img src={JSIcon} style={{ gridRowStart: 1, gridColumnStart: 3 }} />
          <img
            src={ReactIcon}
            style={{ gridRowStart: 2, gridColumnStart: 1 }}
          />
          <img src={NodeIcon} style={{ gridRowStart: 2, gridColumnStart: 2 }} />
          <img
            src={MongoIcon}
            style={{ gridRowStart: 2, gridColumnStart: 3 }}
          />
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
      </div>
    </div>
  );
}
