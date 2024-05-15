import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <div className="bgimg">
        <div className="contact">
          <h1 className="text-5xl font-bold text-white py-4">CONTACT</h1>
        </div>
      </div>
      <div className="get">
        <h1 className="text-5xl font-bold  py-4">GET IN TOUCH </h1>
        <p className="text-3xl font-bold  py-4">Contact Form</p>
        <p className="text-2xl font-semibold  py-4">
          Send me your questions, comments, or suggestions!
        </p>
      </div>

      <div class="bg-sky-500  items-center justify-center h-full w-[500px] mx-auto rounded-3xl mb-10">
        <div class="max-w-[460px] bg-black-dark items-center gap-20 p-5 rounded-3xl px-20">
          <div class="">
            <img src="assets/signup-background.svg" alt="" />
            <img src="assets/teamwork.svg" alt="" class="absolute top-36" />
          </div>

          <div class="max-w-80 grid gap-5">
            <h1 class="text-5xl font-bold text-white text-center">CONTACT</h1>
            <p class="text-dull-white text-center">
              "Adventure awaits those who are willing to explore."
            </p>
            <form action="" class="space-y-6 text-white">
              <div class="relative">
                <div class="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                  <i class="fa-solid fa-envelope-open"></i>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <div class="relative">
                <div class="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                  <i class="fa-solid fa-lock"></i>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <div class="relative">
                <div class="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                  <i class="fa-solid fa-lock"></i>
                </div>
                <input
                  type="text"
                  placeholder="Message"
                  class="w-80 h-32 bg-white-light py-2 px-12 rounded focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <button class="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2">
                Send
              </button>
            </form>
            <div class="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
              <p className="text-center">
                "Life is a beautiful adventure. Embrace the journey and cherish
                the memories along the way."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
