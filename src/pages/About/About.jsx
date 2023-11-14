import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Switcherrr from "../../Components/Swicher";

const About = () => {
  const { pathname } = useLocation();
  return (
    <div className="dark:bg-[#272727] dark:text-[white] px-30px]">
      <div className="py-[40px]" id="about">
        <div className="flex items-center gap-[50px] xs:justify-center md:justify-around">
          <div className="">
            <img className="hidden xl:block" src="src/assets/DB-.svg" alt="" />
          </div>
          <div className="text-[white] py-[20px] flex items-center gap-[50px]">
            <Link to="/">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/" ? "red" : "white" }}
              >
                Home
              </p>
            </Link>
            <Link to="/about">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/about" ? "red" : "white" }}
              >
                About
              </p>
            </Link>
            <Link to="/servicess" className="hidden sm:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/servicess" ? "red" : "white" }}
              >
                Services
              </p>
            </Link>
            <Link to="/gellery" className="hidden sm:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/gellery" ? "red" : "white" }}
              >
                Gallery
              </p>
            </Link>
            <Link to="/contact" className="hidden sm:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/contact" ? "red" : "white" }}
              >
                Contact
              </p>
            </Link>
            <Link to="/process" className="hidden md:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/process" ? "red" : "white" }}
              >
                Story
              </p>
            </Link>
            <Link to="/career" className="hidden lg:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/career" ? "red" : "white" }}
              >
                Careers
              </p>
            </Link>
            <Link to="/news" className="hidden lg:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/news" ? "red" : "white" }}
              >
                News
              </p>
            </Link>
            <Link to="/ourstory" className="hidden lg:block">
              <p
                className="text-[18px] font-semibold"
                style={{ color: pathname == "/ourstory" ? "red" : "white" }}
              >
                Our Story
              </p>
            </Link>
            <div className="hidden lg:block">
              <Switcherrr />
            </div>
            <div className="lg:hidden ">
              <Drawer />
            </div>
          </div>
        </div>
        <h1 className="xs:text-[26px] md:text-[52px] font-semibold text-[white] xs:w-[90%] md:w-[40%] text-center m-auto py-[100px]">
          About our story - We are the best team
        </h1>
      </div>
      <div
        className="flex  flex-wrap justify-center gap-[7%] items-center py-[80px]"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          className="xs:w-[80%] lg:w-[35%] xs:py-[25px] md:py-[0px]"
          src="src/assets/Rectangle 31.svg"
          alt=""
        />
        <div className="xs:w-[80%] lg:w-[35%]">
          <h1 className="xs:text-[20px] md:text-[30px] font-semibold text-[#056088]">
            Here were the story begins
          </h1>
          <p className="md:py-[40px]  md:text-[18px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <p className=" md:text-[18px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className=" py-[60px]">
        <div
          className="flex gap-[50px] flex-wrap justify-center items-center py-[70px]"
          id="aboutt"
        >
          <div className="xs:w-[77%] lg:w-[35%] text-[white]">
            <h1 className="text-[30px] ">We love to make perfect home</h1>
            <p className="text-[18px]">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <img
            className="xs:w-[77%] lg:w-[35%]"
            src="src/assets/ryan1111.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
