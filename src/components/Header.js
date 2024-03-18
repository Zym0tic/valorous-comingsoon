import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import data
import { headerData } from "../data";
//import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
// import Socials from "./Socials";
//import icons
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  //destructure header data
  const { logo } = headerData;
  //header state
  const [isActive, setIsActive] = useState(false);
  //nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "h-[100px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } fixed bg-header left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <Link to="/">
          <img className="w-[188px] h-[90px]" src={logo} alt="Valorous logo" />
        </Link>
        {/* nav hidden mobile*/}
        <div className="hidden lg:flex">
          <Nav />
        </div>
        {/* nav menu btn hidden desktop*/}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden absolute right-[5%] bg-header text-dark p-2 rounded-md cursor-pointer"
        >
          <TiThMenu className="text-3xl" />
        </div>
        {/* nav mobile */}
        <div
          className={`${navMobile ? "max-h-full" : "max-h-0"} ${
            isActive
            ? "top-[100px] lg:top-[110px]"
            : "top-[120px] lg:top-[150px]"
          } fixed bg-header w-full h-full left-0 -z-10 transition-all duration-300`}        
          >
          <NavMobile closeNavMobile={navMobile => setNavMobile(!navMobile)}/> 
        </div>
  {/* social icons hidden show on desktop */}
  <div className="hidden xl:flex">
    {/* <Socials /> */}
  </div>
      </div>
    </header>
  );
};

export default Header;