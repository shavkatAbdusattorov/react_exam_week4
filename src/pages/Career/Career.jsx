import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Switcherrr from "../../Components/Swicher";

const Career = () => {
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
          Have a briliant idea? Join with us. We have an oppurtunity for you
        </h1>
      </div>
      <div className="p-[50px] flex justify-center flex-wrap gap-[30px]">
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Senior architect
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Head of constructions
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Drafter
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
      </div>
      <div className="p-[50px] flex justify-center flex-wrap gap-[30px]">
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            UI/UX Designer
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Driver
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Designer
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
      </div>
      <div className="p-[50px] flex justify-center flex-wrap gap-[30px]">
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Web developer
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Interior designer
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
        <div
          className="p-[25px] xs:w-[97%] sm:w-[43%] md:w-[48%] lg:w-[30%]"
          style={{ boxShadow: "0px  5px 10px #000" }}
        >
          <h1 className="text-[29px] font-semibold text-[#056088] pb-[18px]">
            Interior designer
          </h1>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/bx_bxs-time-five.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/ph_bag-simple-fill.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <div className="flex items-center gap-[10px] pb-[10px]">
            <img src="src/assets/fa-solid_money-bill-wave-alt.svg" alt="" />
            <h1>5+ years experience</h1>
          </div>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[38px] py-[16px]">
            Details
          </button>
        </div>
      </div>
      <h1 className="text-[30px] font-semibold text-center text-[#056088] pb-[50px]">
        See more
      </h1>
    </div>
  );
};

export default Career;
