import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Switcherrr from "../../Components/Swicher";

const Contact = () => {
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
          Need some consultation or want to collaborarion with us? Let’s
          connect!
        </h1>
      </div>
      <div className="flex flex-wrap px-[50px] justify-center items-center py-[90px]">
        <div className="">
          <img src="src/assets/Rectangle 31.svg" alt="" />
        </div>
        <div className="bg-[#F5F5F5] xs:w-[100%] py-[10px] my-[20px] lg:w-[45%]">
          <h1 className="py-[20px] sm:text-[23px] font-medium px-[40px] text-[#056088]">
            Let’s talk about anything you need
          </h1>
          <div className="flex justify-center gap-[20px]">
            <input
              className="w-[42%] py-[8px] rounded-[7px] outline-none px-[20px]"
              type="text"
              placeholder="Your name/company name"
            />
            <input
              className="w-[42%] py-[8px] rounded-[7px] outline-none px-[20px]"
              type="text"
              placeholder="Phone/E-mail"
            />
          </div>
          <form className="py-[20px]" action="">
            <textarea
              className="w-[87%] m-auto flex justify-center py-[8px] rounded-[7px] outline-none px-[20px]"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </form>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[28px] py-[16px] mx-[47px]">
            Submit
          </button>
        </div>
      </div>
      <div className="py-[30px]">
        <h1 className="text-[#056088] text-[24px] font-medium text-center px-[30px]">
          Or contact us via e-mails or even mobile call or Whatsapp messages
        </h1>
        <div className="flex justify-center gap-[20px] py-[27px] mx-[30px] flex-wrap">
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[36px] py-[16px] ">
            E-mails
          </button>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[36px] py-[16px] ">
            Whatsapp
          </button>
          <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA] text-[white] px-[36px] py-[16px] ">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
