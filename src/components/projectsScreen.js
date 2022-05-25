import React, { useState } from "react";

import ProjectsBG from "../assets/svg/project_screen.svg";

import "../scss/projectsScreen.scss";

export default function ProjectsScreen(props) {
  const [frameRef, setFrameRef] = useState("https://houseplantthermostat.com");

  return (
    <div className="projects-screen">
      <img src={ProjectsBG} />
      <div className="descriptions-container">
        <p>&#123;</p>
        <p>
          <span>"projects"</span>: [
        </p>
        <div style={{ margin: "0 0 0 2rem" }}>
          <p>&#123;</p>
          <p>
            <span>"name"</span>: "Houseplant Thermostat",
          </p>
          <p>
            <span>"description"</span>: "This Gatsby web app allows users to
            list all the houseplants they keep in their home and gives
            recomendations for what temperature their thermostat should be set
            at in order to optimize growth. It also gives recomendations for
            relative humidity and lists basic datapoints for each plant.",
          </p>
          <p>
            <span>"liveLink"</span>:
            <a
              onClick={() => {
                setFrameRef("https://houseplantthermostat.com");
              }}
            >
              &nbsp;&#x22;houseplantthermostat.com&#x22;
            </a>
          </p>
          <p>
            <span>"newTab"</span>:
            <a href={"https://www.houseplantthermostat.com"} target="_blank">
              &nbsp;&#x22;houseplantthermostat.com&#x22;
            </a>
          </p>
          <p>
            <span>"githubLink"</span>:
            <a
              href={"https://github.com/williamdoesdev/houseplantthermostat"}
              target="_blank"
            >
              &nbsp;&#x22;github.com/williamdoesdev/houseplantthermostat&#x22;
            </a>
          </p>
          <p>&#125;,</p>
          <p>&#123;</p>
          <p>
            <span>"name"</span>: "Upvotes",
          </p>
          <p>
            <span>"description"</span>: "This React web app allows users to vote
            on a list of user-generated topics organized into categories. A
            Node/Express/MongoDB backend stores all data related to the topics
            as well as user data, which includes usernames, email addresses,
            passwords (which are hashed and salted), and whether or not the user
            is an admin.",
          </p>
          <p>
            <span>"liveLink"</span>:
            <a
              onClick={() => {
                setFrameRef("https://www.williamdoes.dev/upvotes");
              }}
            >
              &nbsp;&#x22;williamdoes.dev/upvotes&#x22;
            </a>
          </p>
          <p>
            <span>"newTab"</span>:
            <a href={"https://www.williamdoes.dev/upvotes"} target="_blank">
              &nbsp;&#x22;williamdoes.dev/upvotes&#x22;
            </a>
          </p>
          <p>
            <span>"githubLink"</span>:
            <a
              href={"https://github.com/williamdoesdev/upvotes"}
              target="_blank"
            >
              &nbsp;&#x22;github.com/williamdoesdev/upvotes&#x22;
            </a>
          </p>
          <p>&#125;,</p>
          <p>&#123;</p>
          <p>
            <span>"name"</span>: "This Website",
          </p>
          <p>
            <span>"description"</span>: "That's right, this page! It's built
            using react-three/fiber and features a basic contact form which
            sends me an email using AWS SES.",
          </p>
          <p>
            <span>"githubLink"</span>:{" "}
            <a
              href={"https://github.com/williamdoesdev/3jsportfolio"}
              target="_blank"
            >
              &nbsp;&#x22;github.com/williamdoesdev/3jsportfolio&#x22;
            </a>
          </p>
          <p>&#125;</p>
        </div>
        <p>&#93;</p>
        <p>&#125;</p>
      </div>
      <iframe className="live-frame" src={frameRef}></iframe>
    </div>
  );
}
