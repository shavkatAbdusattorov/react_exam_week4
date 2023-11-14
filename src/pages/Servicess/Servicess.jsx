import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Switcherrr from "../../Components/Swicher";

const Servicess = () => {
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
            <div className="hidden lg:block">
              <Switcherrr/>
            </div>
            <div className="lg:hidden ">
              <Drawer />
            </div>
          </div>
        </div>
        <h1 className="xs:text-[26px] md:text-[52px] font-semibold text-[white] xs:w-[90%] md:w-[60%] text-center m-auto py-[100px]">
          Our team services
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px] py-[40px]">
        <div
          className="p-[40px] text-start text-[white] xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%]"
          id="bggf"
        >
          <img
            className=""
            src="src/assets/ic_baseline-design-services.svg"
            alt=""
          />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Design building/house
          </h1>
          <p>We have an architect for design new buildings</p>
        </div>
        <div className="p-[40px] text-start xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%] ">
          <img className="" src="src/assets/mdi_sofa.svg" alt="" />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Design building/house
          </h1>
          <p>We have an architect for design new buildings</p>
        </div>
        <div className="p-[40px] text-start xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%] ">
          <img className="" src="src/assets/bx_bxs-building-house.svg" alt="" />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Design building/house
          </h1>
          <p>We have an architect for design new buildings</p>
        </div>
        <div className="p-[40px] text-start xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%] ">
          <img
            className=""
            src="src/assets/ic_baseline-construction.svg"
            alt=""
          />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Design building/house
          </h1>
          <p>We have an architect for design new buildings</p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap px-[30px] gap-[15px] py-[60px] items-center">
        <img
          className="xs:w-[80%] md:w-[50%] lg:w-[40%]"
          src="src/assets/BGGG.svg"
          alt=""
        />
        <div
          className="px-[20px] md:px-[40px] py-[100px] text-[white] xs:w-[80%] md:w-[50%]"
          id="idd"
        >
          <h1 className="sm:text-[30px] font-semibold ">
            Design building / house
          </h1>
          <p className="sm:text-[18px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap px-[30px] gap-[15px] py-[60px] items-center">
        <div
          className="px-[20px] md:px-[40px] py-[100px] text-[white] xs:w-[80%] md:w-[50%]"
          id="idd"
        >
          <p className="sm:text-[18px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
        <img
          className="xs:w-[80%] md:w-[50%] lg:w-[40%]"
          src="src/assets/BGcvbnmxcvbnmxncvbnmxcgnvbnmcn vbmb.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Servicess;
