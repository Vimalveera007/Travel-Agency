import React from "react";
import { Parallax } from "react-parallax";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import logo from "../image/vklogo.png"
import "../Landing/Landing.css";

const Landing = () => {
  return (
    <>
      <Parallax strength={600} bgImage={img2} className="img w-full h-screen ">
        <div className="content">
          <p>
          " Traveling – it leaves you speechless, then <br />turns you into a storyteller  "
          </p>
          <img src={logo} alt="" />
        </div>
      </Parallax>
      <Parallax strength={500} bgImage={img1} className="img w-full h-screen ">
        <div className=" main-content">
          <p>"Adventure awaits those who dare to explore beyond the boundaries of their comfort zones"</p>
        </div>
      </Parallax>
    </>
  );
};

export default Landing;
