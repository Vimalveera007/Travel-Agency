import React, { useState } from "react";
import "./Blog.css";
import nature from "../img/nature.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import bgvideo from "../img/mountain.mp4";
import video from "../img/nature.mp4";
import spot1 from "../img/spot1.jpg"
import spot2 from "../img/spot2.jpg"
import spot3 from "../img/spot3.webp"
import spot4 from "../img/spot4.jpg"
import spot5 from "../img/spot5.jpg"
import spot6 from "../img/spot6.jpg"
import spot7 from "../img/spot7.jpg"
import spot8 from "../img/spot8.jpg"
import spot9 from "../img/spot9.jpg"
const Blog = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="blog">
        <div className="explore">
          <img src={nature} alt="" className="img w-full h-screen" />
          <div className="passage">
            <h1 className="text-5xl font-bold text-white pb-8">
              EXPLORE . DREAM . DISCOVER
            </h1>
            <p className="text-2xl font-semibold text-white w-[80%] text-center pb-8">
              This is world travel blog featuring beautiful destinations,new
              experiences and hidden places all around the global.
            </p>
            <button
              className="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={toggleModal}
            >
              Start Exploring
            </button>
          </div>
          {modal && (
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title text-2xl text-bolder text-center"
                      id="staticBackdropLabel"
                    >
                      Adventure Video
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <video src={video} autoPlay loop muted></video>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary my-3"
                      data-bs-dismiss="modal"
                      onClick={toggleModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="post">
          <h4 className="text-3xl font-bold justify-center text-center">
            Travel Guides
          </h4>
          <h4 className="text-2xl  justify-center text-center text-gray-500 py-3">
            Popular travel blog posts & guides
          </h4>
          <div className="blog-post">
            <div className="video">
              <Link href="">
                <iframe
                  width="350"
                  height="250"
                  src="https://www.youtube.com/embed/WJH2iFVTgwc?si=asWWIBKJZnmWkzRp"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Link>
              <p className="text-2xl font-bold py-2">The Tourism Decade</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <Link>
                <iframe
                  width="350"
                  height="250"
                  src="https://www.youtube.com/embed/UWKhvzdnctY?si=VRgXTeBySZd0bnnG"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Link>

              <p className="text-2xl font-bold py-2">15 Countries to visit</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <Link href="">
                <iframe
                  width="350"
                  height="250"
                  src="https://www.youtube.com/embed/5myfOaVzKw0?si=hSIwxz3_yaHuovvm"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Link>
              <p className="text-2xl font-bold py-2">Virtual Tour</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
          </div>

          <div className="blog-post">
            <div className="video">
              <Link href="">
                <iframe
                  width="350"
                  height="250"
                  src="https://www.youtube.com/embed/_e8BFrAPedM?si=FALRVrA5GtQc2GeO"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Link>
              <p className="text-2xl font-bold py-2">The Tourism Decade</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <iframe
                width="350"
                height="250"
                src="https://www.youtube.com/embed/ZjFzkhrqIZs?si=j5pybE14HhIYd1-o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="text-2xl font-bold py-2">15 Countries to visit</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <iframe
                width="350"
                height="250"
                src="https://www.youtube.com/embed/BFS9n4B_2xA?si=t07Q9l6k3cIc8rl_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="text-2xl font-bold py-2">Virtual Tour</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
          </div>

          <div className="blog-post">
            <div className="video">
              <iframe
                width="350"
                height="250"
                src="https://www.youtube.com/embed/B8S2jhWwTDg?si=Y5CPGholXfyLMyI9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="text-2xl font-bold py-2">The Tourism Decade</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <iframe
                width="350"
                height="250"
                src="https://www.youtube.com/embed/y6E1L6KVwYw?si=dxaeXdPdWWf92eM3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="text-2xl font-bold py-2">15 Countries to visit</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
            <div className="video">
              <iframe
                width="350"
                height="250"
                src="https://www.youtube.com/embed/AneAgyUxBsg?si=E-DS9vc-Borm18Nl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="text-2xl font-bold py-2">Virtual Tour</p>
              <p className="text-xm py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div className="blogbgvideo w-full">
          <video src={bgvideo} loop autoPlay></video>
        </div>

        <div className="hike my-8">
          <h4 className="text-3xl font-bold justify-center text-center">
            Hike Spots
          </h4>
          <h4 className="text-2xl  justify-center text-center text-gray-500 py-3">
            "The journey is the reward." With each step, we felt closer to
            nature, understanding John Muir's words: "In every walk with nature,
            one receives far more than he seeks."
          </h4>
          <div className="hikespot">
            <div className="hikeimg">
             <img src={spot1} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot2} alt="" />
              <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot3} alt="" />
              <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
          </div>
          <div className="hikespot">
            <div className="hikeimg">
             <img src={spot4} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot5} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot6} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
          </div>
          <div className="hikespot">
             <div className="hikeimg">
             <img src={spot7} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot8} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
           <div className="hikeimg">
             <img src={spot9} alt="" />
             <p className="hikedetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, hic.</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Blog;
