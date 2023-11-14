import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Swiper4 from "../../Components/Swiper4";
import Switcherrr from "../../Components/Swicher";
const Process = () => {
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
          Process details : Build villa two floors
        </h1>
      </div>
      <div className="flex justify-center flex-wrap px-[20px] py-[70px] items-center gap-[50px] 2xl:mb-[190px]">
        <div className="xs:w-[80%] lg:w-[30%]">
          <h1 className="text-[#056088] sm:text-[30px] font-semibold">
            Villa De Borusdz
          </h1>
          <p className="py-[20px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <div className="flex justify-between flex-wrap sm:text-[23px] font-semibold">
            <p className="text-[#056088]">Budget : $90.000</p>
            <p className="text-[#056088]">Time : 3 months</p>
          </div>
        </div>
        <div className="">
          <img src="src/assets/img1212.svg" alt="" />
        </div>
      </div>
      <div className="" id="newss">
        <div className=" w-[74%] m-auto 2xl:relative bottom-[200px]" id="newsss">
          <img
            className="m-auto pt-[150px]"
            src="src/assets/ant-design_play-circle-filled.svg"
            alt=""
          />
          <div className="flex justify-end">
            <div className="xs:w-[80%] md:w-[30%] bg-gradient-to-r from-[#056088] p-[40px] to-[#023957] mt-[70px]">
              <p>This is the timelapse video that shows how the villa builds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-[25px] py-[60px] justify-center gap-[20px] 2xl:relative bottom-[150px]">
        <img src="src/assets/imggg.svg" alt="" />
        <img src="src/assets/img (1)fg.svg" alt="" />
        <img src="src/assets/img (2)gfg.svg" alt="" />
      </div>
      <div className="w-[70%] m-auto 2xl:mt-[-150px] py-[50px]">
        <Swiper4/>
      </div>
    </div>
  );
};

export default Process;
