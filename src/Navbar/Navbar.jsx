import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="logo flex justify-between items-center p-5">
        <FaBars className="lg:hidden" />
        <nav className=" flex lg:block sm:hidden">
          <ul className=" flex gap-32 text-xl font-semibold">
            <li className="nav-link hover:text-[orange] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link hover:text-[orange]  cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-link hover:text-[orange]  cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link hover:text-[orange]  cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
