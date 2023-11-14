import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Drawer from "../../Components/Drawer";
import Swiper2 from "../../Components/Swiper2";
import Switcherrr from "../../Components/Swicher";
import axios from "axios";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { fileToBase64 } from "../../utils/fileToBase64"
import Modal from "@mui/material/Modal";
import { SketchPicker } from "react-color";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Gellery = () => {

  const [imageedit, setimageedit] = useState(null)
  const [nameedit, setnameEdit] = useState("")
  const [descriptionedit, setdescriptionedit] = useState("")
  const [buttonnedit, setbuttonnedit] = useState("")
  const [idx, setIdx] = useState(null)
  const [coloredit, setcoloeredit]=useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const [open2, setOpen2] = React.useState(false);
   const handleOpen2 = () => setOpen(true);
   const handleClose2 = () => setOpen(false);
  const [img, setImg] = useState(null);
  const [bgColor, setBgColor] = useState("");
  const [Button, setButton] = useState("")
  const [description, setdescription] = useState("")
  const [iname, setiname] = useState("")
  const [textSearch, settextSearch] = useState("");
 
  

  const Api = "http://localhost:3000/data";
   const setApi = `http://localhost:3000/data?q=${textSearch}`;
  const [todus, settodus] = useState([]);

  const handleImage = async (event) => {
    // console.log(event.target.files[0]);
    let file = await fileToBase64(event.target.files[0]);
    setImg(file);
  };

   const handleColor = (e) => {
     setBgColor(e.hex);
  };
   const handleImageEdit = async (event) => {
     let file = await fileToBase64(event.target.files[0]);
    setimageedit(file);
   };
   const handleColorEdit = (e) => {
     setcoloeredit(e.hex);
   };

  
  // -------------------get------------------------------
  async function getData() {
    try {
      const { data } = await axios.get(
        textSearch.trim().length == 0 ? Api : setApi
      );
      settodus(data);
    } catch (error) {
      console.log(error);
    }
  }


  
  // -----------------------------------Add users--------------------------


  async function Adduser() {

    try {
      let user = {
        img: img,
        name: iname,
        description: description,
        btn: Button,
        color: bgColor,
      };
      const { data } = await axios.post(Api, user)
      getData();
      setOpen(false);
      setButton("")
      setImg(null)
      setdescription("")
      setiname("")
    } catch (error) {
      console.log(err);
    }
  }

  // -----------------------delete -------------------------
  async function deleteData(id) {
    try {
      let { data } = await axios.delete(`${Api}/${id}`);
      getData();
      console.log(data);
      // setDelNot(true);
    } catch (error) {}
  }
  // -----------------------------Edit-------------------------------
 function hendlEdit(e) {
   setOpen2(true);
   setbuttonnedit(e.btn)
   setnameEdit(e.name)
   setimageedit(e.img)
   setdescriptionedit(e.description)
   setIdx(e.id);
   setcoloeredit(e.color)
  }
  

  async function Edituser() {
    try {
      const { data } = await axios.put(`${Api}/${idx}`, {
        name: nameedit,
        description: descriptionedit,
        img: imageedit,
        color: coloredit,
        bnt: buttonnedit,
      })
      getData()
      setOpen2(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [iname, textSearch]);

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
              <Switcherrr />
            </div>
            <div className="lg:hidden ">
              <Drawer />
            </div>
          </div>
        </div>
        <h1 className="xs:text-[26px] md:text-[52px] font-semibold text-[white] xs:w-[90%] md:w-[60%] text-center m-auto py-[100px]">
          Here some our best works
        </h1>
      </div>
      <div className="py-[80px]">
        <div className="py-[50px] md:mx-[50px] flex flex-wrap justify-center gap-[30px]">
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img.svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Interior design
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (1).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Build modern house
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (2).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Build villa two floors
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="py-[50px] md:mx-[50px] flex flex-wrap justify-center gap-[30px]">
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (5).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Modern interior design
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (3).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[22px] font-semibold text-[#056088]">
                Renovation co working room
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
          <div
            className="xs:w-[80%] sm:w-[45%] lg:w-[28%]"
            style={{ boxShadow: "0px  5px 10px #000" }}
          >
            <img className="m-auto" src="src/assets/img (4).svg" alt="" />
            <div className="px-[30px] py-[24px]">
              <h1 className="text-[26px] font-semibold text-[#056088]">
                Real estate house
              </h1>
              <p className="py-[10px]">3 Months work time</p>
              <button className="text-[white] bg-gradient-to-r from-[#056088] to-[#09A7CA]  px-[28px] py-[16px]">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-[37px] font-semibold text-[#056088] text-center">
          See more
        </h1>
      </div>
      <div className="w-[70%] m-auto pb-[70px]">
        <Swiper2 />
      </div>
      <div className="">
        <div className="flex justify-around">
          <div className="">
            <input
              value={textSearch}
              onChange={(e) => settextSearch(e.target.value)}
              className="text-[24px] outline-none border-[2px] px-[20px] py-[4px] rounded-[20px] dark:text-black"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-[25px] font-medium text-[white] px-[38px] py-[12px] rounded-[15px] bg-[blue]"
              onClick={handleOpen}
            >
              +Add new users
            </button>
          </div>
        </div>
        <div className="">
          <div className="">
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="flex justify-center"
            >
              <Box className="bg-[#fff] w-[800px] h-[600px] py-[20px] my-[50px]">
                <div className="">
                  <div className="flex justify-center gap-[20px]">
                    <input
                      className="w-[350px] px-[30px] py-[12px] rounded-[14px] bg-[gray] text-[black]"
                      type="file"
                      onChange={(event) => handleImage(event)}
                    />
                    <input
                      className="w-[350px] px-[30px] py-[12px] rounded-[14px] bg-[gray] text-[black]"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setiname(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center gap-[20px] pt-[20px]">
                    <input
                      className="w-[350px] px-[30px] py-[12px] rounded-[14px] bg-[gray] text-[black]"
                      type="text"
                      placeholder="description"
                      onChange={(e) => setdescription(e.target.value)}
                    />
                    <input
                      className="w-[350px] px-[30px] py-[12px] rounded-[14px] bg-[gray] text-[black]"
                      type="text"
                      placeholder="Button"
                      onChange={(e) => setButton(e.target.value)}
                    />
                  </div>
                  <div className="py-[20px] flex justify-center gap-[40px]">
                    <SketchPicker
                      color={bgColor}
                      onChangeComplete={handleColor}
                    />
                    <img src={img} />
                  </div>
                  <div className="flex justify-around pt-[50px]">
                    <button
                      className="text-[26px] text-white bg-[green] px-[34px] py-[5px] rounded-[15px]"
                      onClick={() => {
                        Adduser();
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="text-[26px] text-white bg-[#6fb2fb] px-[34px] py-[5px] rounded-[15px]"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-[60px] gap-[40px]">
          {todus.map((e) => {
            return (
              <div
                className="w-[27 %] shadow-2xl"
                key={e.id}
                style={{
                  // boxShadow: "0px 5px 10px #000",
                  backgroundColor: `${e.color}`,
                }}
              >
                <img src={e.img} alt="" />
                <div className="px-[30px] py-[25px]">
                  <h1 className="text-[#056088] text-[30px] font-medium">
                    {e.name}
                  </h1>
                  <div className={`flex items-center justify-between`}>
                  <p className="py-[10px] pb-[18px]">{e.description}</p>
                    <button>
                      <EditIcon onClick={() => hendlEdit(e)} />
                    </button>
                    {/* <button onClick={() => hendlEdit(e)}>Edit</button> */}
                    <div className="flex gap-[40px]">
                      <div className="">
                        <DeleteIcon
                          color="error"
                          onClick={() => deleteData(e.id)}
                        />
                      </div>
                      <div className=""></div>
                      <div className=""></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex justify-center"
          >
            <Box className="bg-[#fff] w-[800px] py-[20px] my-[50px]">
              <h1 className="text-[35px] font-semibold text-center text-[gray] py-[70px]">Edit user</h1>
              <div className="flex justify-center flex-wrap gap-[30px]">
                
                  
                    <input
                      className="px-[30px] py-[10px] rounded-[12px] bg-[gray] outline-none mr-[20px]"
                      value={nameedit}
                      type="text"
                      name=""
                      id=""
                      onChange={(e)=>setnameEdit(e.target.value)}
                    />
                    <input
                      className="px-[30px] py-[10px] rounded-[12px] bg-[gray] outline-none "
                      value={descriptionedit}
                      type="text"
                      onChange={(e)=>setdescriptionedit(e.target.value)}
                    />
                  
                    <input
                      className="px-[30px] py-[10px] rounded-[12px] bg-[gray] outline-none mr-[20px]"
                      value={buttonnedit}
                      type="text"
                      onChange={(e)=>setbuttonnedit(e.target.value)}
                    />
                    <input
                      className="px-[30px] py-[10px] rounded-[12px] bg-[gray] outline-none"
                      value={coloredit}
                      type="text"
                      onChange={(e)=>setcoloeredit(e.target.value)}
                    />
                  
                  
                  <input
                    className="px-[30px] py-[10px] rounded-[12px] bg-[gray] outline-none"
                    value={imageedit}
                    type="text"
                    onChange={(e)=>setimageedit(e.target.value)}
                  />
                  </div>
                <div className="flex justify-around pt-[50px]">
                  <button
                    className="text-[26px] text-white bg-[green] px-[34px] py-[5px] rounded-[15px]"
                    onClick={() => {
                      Edituser();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="text-[26px] text-white bg-[#6fb2fb] px-[34px] py-[5px] rounded-[15px]"
                    onClick={() => setOpen2(false)}
                  >
                    Close
                  </button>
                </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Gellery;
