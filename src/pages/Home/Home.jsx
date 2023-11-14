import React, { useEffect,useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer"
import Swiper from "../../Components/Swiper"
import Switcherrr from "../../Components/Swicher";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Home = () => {

  const Api = "http://localhost:3000/data";
  const [todus,settodus]=useState([])
   
  async function getData() {
    try {
      const { data } = await axios.get(Api)
      settodus(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  },[])

  useEffect(() => {
    AOS.init();
  }, []);
   const { pathname } = useLocation();
  return (
    <div className="dark:bg-[#272727] dark:text-[white]">
      <div
        className="flex "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="xs:hidden md:block w-[36%] text-[white] py-[40px]"
          id="bg"
        >
          <img
            className="xs:hidden md:block sm:ml-[40px]  md:ml-[70px] lg:ml-[100px] xl:ml-[140px]"
            src="src/assets/DB-.svg"
            alt=""
          />
          <div className="py-[70px] relative left-[160px]">
            <h1 className="xs:text-[24px] md:text-[39px] font-bold xs:w-[500%] sm:w-[100%]">
              We build your dream house well and professionally
            </h1>
            <p className="py-[20px]">
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen
            </p>
            <button className="xs:hidden sm:block bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
              Contact us
            </button>
          </div>
        </div>
        <div
          className="flex items-center flex-wrap xs:w-[100%] md:w-[64%] pb-[390px] justify-evenly text-[white] py-[40px]"
          id="bgg"
        >
          <Link to="/">
            <p style={{ color: pathname == "/" ? "red" : "white" }}>Home</p>
          </Link>
          <Link to="/about">
            <p style={{ color: pathname == "/about" ? "red" : "white" }}>
              About
            </p>
          </Link>
          <Link to="/servicess" className="hidden sm:block">
            <p style={{ color: pathname == "/servicess" ? "red" : "white" }}>
              Services
            </p>
          </Link>
          <Link to="/gellery" className="hidden sm:block">
            <p style={{ color: pathname == "/gellery" ? "red" : "white" }}>
              Gallery
            </p>
          </Link>
          <Link to="/contact" className="hidden sm:block">
            <p style={{ color: pathname == "/contact" ? "red" : "white" }}>
              Contact
            </p>
          </Link>
          <Link to="/process" className="hidden md:block">
            <p style={{ color: pathname == "/process" ? "red" : "white" }}>
              Story
            </p>
          </Link>
          <Link to="/career" className="hidden lg:block">
            <p style={{ color: pathname == "/career" ? "red" : "white" }}>
              Careers
            </p>
          </Link>
          <Link to="/news" className="hidden lg:block">
            <p style={{ color: pathname == "/news" ? "red" : "white" }}>News</p>
          </Link>
          <Link to="/ourstory" className="hidden lg:block">
            <p style={{ color: pathname == "/ourstory" ? "red" : "white" }}>
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
      <div
        className="flex justify-center flex-wrap gap-[10%] py-[80px] w-[88%] m-auto dark:bg-[#272727] dark:text-white"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="xs:w-[80%] 2xl:w-[45%] m-auto">
          <div className="flex xs:justify-center 2xl:justify-start gap-[20px]">
            <div className="">
              <img
                className="pb-[20px]"
                src="src/assets/Rectangle 5.svg"
                alt=""
              />
              <img src="src/assets/Rectangle 6.svg" alt="" />
            </div>
            <div className="">
              <img
                className="pb-[20px]"
                src="src/assets/Rectangle 8.svg"
                alt=""
              />
              <img src="src/assets/Rectangle 7.svg" alt="" />
            </div>
          </div>
          <div className="border-[2px] m-auto relative bottom-[270px] hidden 2xl:block bg-[#fff] w-[140px] pb-[24px]  rounded-[100px]">
            <img
              className="m-auto"
              src="src/assets/noto-v1_check-mark.svg"
              alt=""
            />
            <p className="text-[#056088] mt-[-10px] text-center ">
              Pro licensed
            </p>
          </div>
        </div>
        <div className="xs:w-[80%] 2xl:w-[45%] xs:text-center 2xl:text-start xs:pt-[50px] 2xl:py-[0px]">
          <h1 className="text-[#056088] text-[30px] font-medium">
            Our company
          </h1>
          <p className="text-[21px] py-[18px]">
            Debuilds is a team of architects, interior design, and contractors
            who help our clients not only to build their dream building, but
            also to feel comfortable after the building is used.
          </p>
          <p className="text-[21px]">We already handled</p>
          <div className="flex flex-wrap gap-[30px] xs:justify-center  md:justify-between  py-[18px] text-[21px] font-medium">
            <p className="text-[#056088]">50+ Clients</p>
            <p className="text-[#056088]">30+ House</p>
            <p className="text-[#056088]">20+ Building</p>
          </div>
          <button className="bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[32px] py-[16px]">
            See more
          </button>
        </div>
      </div>
      <div className="xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[23%] m-auto text-center">
        <h1 className="text-[#056088] text-[27px] font-semibold">
          Our services
        </h1>
        <p className="py-[13px]">
          Our services include building new buildings and renovating old
          buildings
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px] py-[40px]">
        <div
          className="p-[40px] text-start text-[white] xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%]"
          id="bggf"
          data-aos="zoom-out-right"
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
        <div
          className="p-[40px] text-start xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[21%] "
          data-aos="zoom-out-left"
        >
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

      <div className="">
        <div className="w-[80%] m-auto flex py-[40px] justify-around">
          <input className="px-[35px] w-[30%] py-[1px] rounded-[13px] outline-none bg-[#c8c8c8] text-[20px]" type="text" placeholder="Search" />
          <button className="text-[25px] bg-[green] px-[40px] py-[13px] rounded-[13px] font-medium text-[white]">+Add new users</button>
        </div>
        <div className="flex justify-center gap-[40px]">
          {todus.map((e) => {
            return (
              <div
                className="w-[28%]"
                style={{
                  backgroundColor: e.color,
                  boxShadow: "0px  6px 10px #000",
                }}
                key={e.id}
              >
                <img className="w-[100%]" src={e.img} alt="" />
                <div className="px-[30px] py-[20px]">
                  <h1 className="text-[30px] font-medium">{e.name}</h1>
                  <p>{e.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="xs:w-[80%] sm:w-[47%] md:w-[31%] xl:w-[23%] m-auto text-center xl:pt-[60px] 2xl:mb-[-200px]">
        <h1 className="text-[#056088] text-[27px] font-semibold">
          Our benefits
        </h1>
        <p className="py-[13px]">
          Here our benefits if you collaboration with our team
        </p>
      </div>
      <div className="w-[50%] m-auto 2xl:pt-[190px]">
        <Swiper />
      </div>
      <div className="flex  flex-wrap justify-center gap-[50px] w-[100%] py-[60px] 2xl:relative top-[190px]">
        <div
          className="p-[60px] md:px-[100px] text-center text-[white] xs:w-[80%] sm:w-[45%] lg:w-[28%] "
          id="bggff"
        >
          <img
            className="m-auto"
            src="src/assets/akar-icons_circle-check-fill.svg"
            alt=""
          />
          <h1 className="py-[16px] text-[23px] font-semibold">Flexible time</h1>
          <p>We work wherever you ready to builds. Work fast and profesional</p>
        </div>
        <div
          className="p-[40px] md:px-[70px] text-center text-[white] xs:w-[80%] sm:w-[45%] lg:w-[28%] "
          id="bggfg"
        >
          <img
            className="m-auto"
            src="src/assets/akar-icons_circle-check-fill.svg"
            alt=""
          />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Customizable design
          </h1>
          <p>
            We can design your buildings, but we open if you want to customize
            your design or if you have architect
          </p>
        </div>
        <div
          className="p-[40px] md:px-[70px] text-center text-[white] xs:w-[80%] sm:w-[45%] lg:w-[28%] "
          id="bggfgh"
        >
          <img
            className="m-auto"
            src="src/assets/akar-icons_circle-check-fill.svg"
            alt=""
          />
          <h1 className="py-[16px] text-[23px] font-semibold">
            Negotiable price
          </h1>
          <p>
            Yes, we’re open to negotiate the price with you, and we will give
            the best price for our lovely clients
          </p>
        </div>
      </div>
      <div className="my-[80px]" id="img">
        <div className="xs:w-[80%] sm:w-[47%] md:w-[31%] text-[white] xl:w-[21%] m-auto text-center pt-[60px] 2xl:pt-[190px]">
          <h1 className=" text-[27px] font-semibold">Our works</h1>
          <p className="py-[13px]">
            Here our some of the best the result when we build some buildings,
            houses, and also interior designs
          </p>
        </div>
        <div className="flex justify-center flex-wrap py-[40px] gap-[15px] px-[25px]">
          <div className="flex gap-[15px] items-center">
            <div className="">
              <img
                className="pb-[15px]"
                src="src/assets/Rectangle 15.svg"
                alt=""
              />
              <img src="src/assets/Rectangle 18.svg" alt="" />
            </div>
            <div className="">
              <img src="src/assets/Rectangle 16.svg" alt="" />
            </div>
          </div>
          <div className="">
            <img
              className="pb-[15px]"
              src="src/assets/Rectangle 14.svg"
              alt=""
            />
            <img src="src/assets/Rectangle 17.svg" alt="" />
          </div>
          <div className="">
            <div className="flex gap-[15px]">
              <div className="">
                <img src="src/assets/Rectangle 19.svg" alt="" />
              </div>
              <div className="">
                <img
                  className="pb-[15px]"
                  src="src/assets/Rectangle 20.svg"
                  alt=""
                />
                <img src="src/assets/Rectangle 22.svg" alt="" />
              </div>
            </div>
            <img
              className="pt-[15px]"
              src="src/assets/Rectangle 21.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap ">
          <div className="bg-[#fff] m-auto xs:w-[80%] md:w-[50%] my-[20px] lg:w-[25%] lg:h-[60vh] xl:h-[50vh] 2xl:h-[38vh] p-[50px]">
            <h1 className="text-[#056088] text-[27px] font-medium">
              What our clients say?
            </h1>
            <p className="py-[15px]">
              See what our clients say about their new home
            </p>
            <button className=" bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
              See more
            </button>
          </div>
          <div
            className="xs:w-[80%] m-auto my-[20px] lg:w-[60%] flex justify-center py-[70px]"
            id="imgg"
          >
            <div className="bg-gradient-to-r from-[#056088] xs:hidden md:block w-[40%] text-[white] to-[#023957] 2xl:relative top-[120px] left-[275px]">
              <img
                className="relative bottom-[50px] right-[40px]"
                src="src/assets/Ellipse 6.svg"
                alt=""
              />
              <p className="px-[40px] pb-[15px] mt-[-50px]">
                I really happy to see the result my new home. It’s really good
                house and good price too. And they work so fast becasue they
                have the best team. Once again, thankyou. I really appreciate
                it.
              </p>
              <h1 className="px-[40px] pb-[20px]">- Mr. Roberto</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap xs:justify-center gap-[20px] md:justify-around py-[50px] px-[20px]">
        <h1 className="text-[26px] font-medium text-[#056088]">Our Partners</h1>
        <img src="src/assets/J.construct.svg" alt="" />
        <img src="src/assets/Arch.svg" alt="" />
        <img src="src/assets/Whix.co.svg" alt="" />
        <img src="src/assets/DZIKRA.svg" alt="" />
      </div>
      <div className="my-[60px] w-[74%] m-auto" id="mih">
        <img
          className="m-auto pt-[280px]"
          src="src/assets/ant-design_play-circle-filled.svg"
          alt=""
        />
        <div className="flex justify-end">
          <div className="xs:w-[80%] md:w-[30%] bg-gradient-to-r from-[#056088] p-[40px] to-[#023957] mt-[70px]">
            <p>This is the timelapse video that shows how our teams work</p>
          </div>
        </div>
      </div>
      <div className="py-[80px]">
        <div
          className="w-[90%] py-[40px] m-auto dark:bg-[#272727] dark:text-white"
          id="BG"
        >
          <h1 className="pt-[50px] text-center text-[white] md:text-[55px] font-bold w-[50%] m-auto">
            Want to get our offer updates and news?
          </h1>
          <p className="py-[20px] w-[40%] text-white md:text-[22px] m-auto">
            Submit your e-mail and we will give you update about information and
            discount. Every single week. (not spamming)
          </p>
          <div className=" flex md:w-[50%] gap-[30px] flex-wrap m-auto">
            <input
              className="xs:w-[70%] m-auto md:w-[70%] px-[50px] py-[15px] outline-none"
              type="text"
              placeholder="Enter your e-mail here"
            />
            <button className=" bg-gradient-to-r m-auto xs:my-[10px] from-[#056088] to-[#09A7CA]  px-[38px] text-[white] py-[16px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
