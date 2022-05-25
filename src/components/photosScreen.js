import React, { useState } from "react";

import PhotosBG from "../assets/svg/photos_screen.svg";

import "../scss/photosScreen.scss";

import BackIcon from "../assets/svg/backicon.svg";

import RTVLogo1 from "../assets/images/logos/rtv1.png";
import RTVLogo2 from "../assets/images/logos/rtv2.png";
import FRLogo from "../assets/images/logos/fr.png";
import RTableLogo from "../assets/images/logos/rtable.png";
import RReportLogo from "../assets/images/logos/rreport.png";

import PRFlyer from "../assets/images/flyers/pr.png";
import ProdFlyer from "../assets/images/flyers/prod.png";
import TechFlyer from "../assets/images/flyers/tech.png";

import GeneralPoster from "../assets/images/posters/general.png";
import FRPoster from "../assets/images/posters/fr.png";

import AndyBday from "../assets/images/birthday/andy.png";
import JackiBday from "../assets/images/birthday/jacki.png";
import JaredBday from "../assets/images/birthday/jared.png";
import KateBday from "../assets/images/birthday/kate.png";
import SandraBday from "../assets/images/birthday/sandra.png";

import Moss from "../assets/images/nature/moss.jpg";
import Mushrooms from "../assets/images/nature/mushrooms.jpg";
import Sky from "../assets/images/nature/sky.jpg";

import Portrait01 from "../assets/images/portraits/portrait01.jpg";
import Portrait02 from "../assets/images/portraits/portrait02.jpg";

import Mag01 from "../assets/images/magazine/mag01.jpg";
import Mag02 from "../assets/images/magazine/mag02.jpg";
import Mag03 from "../assets/images/magazine/mag03.jpg";
import Mag04 from "../assets/images/magazine/mag04.jpg";
import Mag05 from "../assets/images/magazine/mag05.jpg";

export default function PhotosScreen(props) {
  const [photos, setPhotos] = useState([
    {
      mainImage: Portrait01,
      title: "Portraits",
      description:
        "While working as a video editor, I also had the opportunity to take professional portraits for other employees. Over the course of two years, I photographed around 100 individuals and edited those photos to a high standard. Unfortunately, I don't know any of those individuals well enough to ask their permission to use the photos. These are actually two test shots I took of my friends while setting up the camera/lights. I've edited them as best I can to try and replicate the level of quality I'd normally aim for.",
      images: [Portrait01, Portrait02],
    },
    {
      mainImage: Moss,
      title: "Nature Photos",
      description:
        "I love hiking and taking photos while I'm out. I'm not an expert by any means, but I'm confident with a camera and I can get at least a few good shots whenever I go. These are some of my favorites.",
      images: [Sky, Moss, Mushrooms],
    },
    {
      mainImage: JaredBday,
      title: "Birthday Cards",
      description:
        "At the height of the COVID-19 pandemic, while my office was working from home, I was asked to help create personalized birthday cards for each of my coworkers since we weren't able to meet and celebrate like we normally would. I absolutely loved working on these, it was some of the most fun I've ever had at work. These were all signed by my other coworkers; for the sake of their privacy, I have blurred out those signatures.",
      images: [AndyBday, JackiBday, JaredBday, KateBday, SandraBday],
    },
    {
      mainImage: Mag01,
      title: "Student Magazine",
      description:
        "As part of my college coursework, I was asked to create an issue of a student magazine as part of a group. I was solely responsible for the design and layout; I also edited articles written by my peers. These are just a few spreads from that magazine.",
      images: [Mag01, Mag02, Mag03, Mag04, Mag05],
    },
    {
      mainImage: RTVLogo1,
      title: "RTV Logos",
      description:
        "While in college, I held the role of assistant technical director for a student organization called Rowdy TV. My responsibilities included creating logos for the organization and for some of the shows we produced. I also helped delegate design and video work to other students.",
      images: [RTVLogo1, RTVLogo2, FRLogo, RTableLogo, RReportLogo],
    },
    {
      mainImage: ProdFlyer,
      title: "RTV Flyers",
      description:
        "While a member of Rowdy TV, I was also responsible for producing flyers for the organization. These were distributed to attract new members and to promote upcoming fundraisers and events.",
      images: [ProdFlyer, TechFlyer, PRFlyer],
    },
    {
      mainImage: GeneralPoster,
      title: "RTV Posters",
      description:
        "While a member of Rowdy TV, I was also responsible for producing posters for the organization. These were put up around campus either to attract new members or to promote the shows we produced.",
      images: [GeneralPoster, FRPoster],
    },
  ]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const renderSelectedPhoto = () => {
    if (Number.isInteger(selectedPhoto)) {
      return (
        <div className="photos-screen-popout">
          <div className="photos-screen-popout-description">
            <h1>{photos[selectedPhoto].title}</h1>
            <p>{photos[selectedPhoto].description}</p>
            <button
              onClick={() => {
                setSelectedPhoto(null);
              }}
            >
              <img src={BackIcon} />
            </button>
          </div>
          <div className="photos-screen-popout-images">
            {photos[selectedPhoto].images.map((image) => {
              return (
                <img
                  src={image}
                  alt={image}
                  arrayLength={photos[selectedPhoto].images.length}
                />
              );
            })}
          </div>
          ;
        </div>
      );
    }
  };

  return (
    <div className="photos-screen">
      <img src={PhotosBG} />
      <div className="photos-screen-flexbox">
        {photos.map((photo, i) => {
          return (
            <div
              className="photos-screen-flexbox-item"
              onClick={() => setSelectedPhoto(i)}
            >
              <img src={photo.mainImage} />
              <div className="photos-screen-flexbox-item-overlay" />
              <h1>{photo.title}</h1>
            </div>
          );
        })}
      </div>
      {renderSelectedPhoto()}
    </div>
  );
}
