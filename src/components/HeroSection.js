import React from "react";
import HeroImg from "../assets/images/Riwa-profile-pic.jpeg";
import Button from "./Button";
import PText from "./PText";

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span> Hello, This is</span>
          <span>Riwa Dorjee Sherpa</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am a Full Stack Developer, Graphic Designer, Photographer and
            Videographer. I love creating new contents and help business grow. I
            can help you to execute your vison.
          </PText>
          <Button btnLink="/projects" btnText="check my works here" />
        </div>
      </div>
    </div>
  );
}
