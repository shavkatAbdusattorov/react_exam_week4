import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Switcherrr from "../../Components/Swicher";

const News = () => {
  const { pathname } = useLocation();
  return (
    <div className="dark:bg-[#272727] dark:text-[white]">
      <div className="py-[40px]" id="about">
        <div className="flex items-center gap-[50px] xs:justify-center md:justify-around">
          <div className="">
            <img className="hidden sm:block" src="src/assets/DB-.svg" alt="" />
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
            <Link to="/about" className="hidden sm:block">
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
            <Link to="/contact" className="">
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
            <div className="">
              <Switcherrr/>
            </div>
            <div className="lg:hidden ">
              <Drawer />
            </div>
          </div>
        </div>
        <h1 className="xs:text-[26px] md:text-[52px] font-semibold text-[white] xs:w-[90%] md:w-[60%] text-center m-auto py-[100px]">
          Article and news about property and constructions
        </h1>
      </div>
      <div className="py-[60px] md:mt-[190px]" id="newss">
        <div className=" w-[88%] m-auto 2xl:relative bottom-[150px]" id="new">
          <div className="pt-[280px] flex flex-wrap text-[white] justify-around">
            <h1 className="md:text-[42px] md:py-[40px] font-semibold">
              Today’s property news
            </h1>
            <p className="xs:w-[90%] xs:py-[30px] sm:py-[0px] md:w-[25%] md:py-[40px] md:text-[18px]">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry'
            </p>
          </div>
        </div>
      </div>
      <div className=" 2xl:relative bottom-[200px]">
        <div className="py-[50px] md:mx-[50px] flex flex-wrap justify-center gap-[30px]">
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (7).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Tips of the week
              </h1>
              <p className="py-[10px]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry'
              </p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Read more
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (8).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[22px] font-semibold text-[#056088]">
                House price is high now
              </h1>
              <p className="py-[10px]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry'
              </p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Read more
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (6).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[22px] font-semibold text-[#056088]">
                Good investment in property
              </h1>
              <p className="py-[10px]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry'
              </p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Read more
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-[37px] pb-[40px] font-semibold text-[#056088] text-center">
          See more
        </h1>
      </div>
    </div>
  );
};

export default News;
