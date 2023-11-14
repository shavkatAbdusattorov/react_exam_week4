import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="">
        
      </div>
      <Outlet />
      <div
        className="dark:bg-[#272727] dark:text-[white]"
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
      >
        <div className="bg-[#023957] py-[80px] flex justify-evenly flex-wrap gap-[50px] px-[60px] items-center text-[white]">
          <div className="">
            <img src="src/assets/DB-.svg" alt="" />
            <h1 className="text-[20px] py-[30px]">
              Lizenzo street number 12 <br /> Jakarta, Indonesia
            </h1>
            <button className="bg-gradient-to-r from-[#056088] to-[#09A7CA] px-[40px] py-[10px]">
              Get directions
            </button>
          </div>
          <div className="">
            <h1 className="text-[23px] font-medium py-[25px]">Menu</h1>
            <p className="pb-[10px]">Home</p>
            <p className="pb-[10px]">About</p>
            <p className="pb-[10px]">Gallery</p>
            <p className="pb-[10px]">Service</p>
          </div>
          <div className="">
            <h1 className="text-[23px] font-medium py-[25px]">Contact</h1>
            <p className="pb-[10px]">E-mail</p>
            <p className="pb-[10px]">Mobile</p>
            <p className="pb-[10px]">Whatsapp</p>
            <p className="pb-[10px]">Fax</p>
          </div>
          <div className="">
            <h1 className="text-[23px] font-medium py-[25px]">Career</h1>
            <p className="pb-[10px]">Job</p>
            <p className="pb-[10px]">Part-time</p>
            <p className="pb-[10px]">Internship</p>
            <p className="pb-[10px]">Service</p>
          </div>
          <div className="">
            <h1 className="text-[23px] font-medium py-[25px]">Business</h1>
            <p className="pb-[10px]">Affiliate</p>
            <p className="pb-[10px]">Collaboration</p>
            <p className="pb-[10px]">Investment</p>
            <p className="pb-[10px]">People</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-center text-[17px] text-[black] py-[30px] ">
            2021 - Copyright ZHB Studio
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Layout;
