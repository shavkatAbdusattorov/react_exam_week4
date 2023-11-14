import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Swiper3 from "../../Components/Swiper3";
import Switcherrr from "../../Components/Swicher";

const Ourstory = () => {
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
          Read some story from clients!
        </h1>
      </div>
      <div className="py-[50px] flex flex-wrap justify-center gap-[30px]">
        <div className="xs:w-[80%] md:w-[46%] lg:w-[26%] p-[20px]" id="our">
          <img src="src/assets/Ellipse 6.svg" alt="" />
          <p className="py-[18px] text-[white]">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h1 className="text-[white]">- Mr. James</h1>
        </div>
        <div className="xs:w-[80%] md:w-[46%] lg:w-[26%] p-[20px]">
          <img src="src/assets/Ellipse 6 (1).svg" alt="" />
          <p className="py-[18px] ">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h1 className="">- Mr. Ahmed</h1>
        </div>
        <div className="xs:w-[80%] md:w-[46%] lg:w-[26%] p-[20px]">
          <img src="src/assets/Ellipse 6 (2).svg" alt="" />
          <p className="py-[18px] ">
            I really happy to see the result my new home. It’s really good house
            and good price too. And they work so fast becasue they have the best
            team. Once again, thankyou. I really appreciate it.
          </p>
          <h1 className="">- Mr. Marco</h1>
        </div>
      </div>
      <div className="xs:w-[95%] md:w-[30%] m-auto">
        <Swiper3/>
      </div>
      <div
        className="flex justify-center flex-wrap items-center  gap-[100px] py-[100px]"
        id="BG"
      >
        <img src="src/assets/Ellipse 61234.svg" alt="" />
        <div className="xs:w-[80%] md:w-[40%] text-[white]">
          <h1 className="md:text-[39px] font-semibold">
            Mr. James’s says : “I’m so happy!”
          </h1>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className="py-[50px]">
        <h1 className="sm:text-[37px] font-bold text-[#056088] text-center my-[20px]">
          Mr. James’s villa
          <div className="flex justify-center flex-wrap gap-[30px] px-[40px] py-[30px]  ">
            <img src="src/assets/imgdfghjklmnb cvbhgvhvb.svg" alt="" />
            <img src="src/assets/img (1)cvhbnm,..svg" alt="" />
            <img src="src/assets/img (2)xcbvnbnm,njhkgv bn.svg" alt="" />
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Ourstory;
