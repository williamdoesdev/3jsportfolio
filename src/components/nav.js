import React from "react";

import "../scss/nav.scss"

export default function Nav(props) {

    const handleChangeCameraPos = (pos) => {
        props.onChangeCameraPos(pos)
    }

    const handleChangeCameraLook = (look) => {
        props.onChangeCameraLook(look)
    }

    const handleToggleOrbitControls = () => {
        props.onToggleOrbitControls()
    }

    return (
        <nav>
            <div className="header-logo-container">
                <h1>William Does.</h1>
                <div></div>
            </div>
            <ul>
                <li>
                    <a onClick={() => {
                        handleChangeCameraPos([-0.4, 0.9, 0.3])
                        handleChangeCameraLook([-0.4, 0.9, 2])
                        handleToggleOrbitControls()
                    }}>About Me</a>
                </li>
                <li>
                    <a onClick={() => {
                        handleChangeCameraPos([0, 0.75, -0.5])
                        handleChangeCameraLook([-1, 0.75, -0.7])
                        handleToggleOrbitControls()
                    }}>Projects</a>
                </li>
                <li>
                    <a onClick={() => {
                        handleChangeCameraPos([-0.25, 0.6, -1.25])
                        handleChangeCameraLook([-0.35, 0, -1.275])
                        handleToggleOrbitControls()
                    }}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}