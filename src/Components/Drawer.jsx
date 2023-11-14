import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link, Outlet, useLocation } from "react-router-dom";
import Switcherrr from "./Swicher";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
    const { pathname } = useLocation();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="text-[black] text-center">
        <div className="">
          <Switcherrr/>
        </div>
        <Link to="/">
          <p
            className="text-[28px] font-semibold"
            style={{ color: pathname == "/" ? "red" : "black" }}
          >
            Home
          </p>
        </Link>
        <Link to="/about" className="hidden sm:block">
          <p
            className="text-[28px] font-semibold"
            style={{ color: pathname == "/about" ? "red" : "black" }}
          >
            About
          </p>
        </Link>
        <Link to="/servicess" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/servicess" ? "red" : "black" }}>
            Services
          </p>
        </Link>
        <Link to="/gellery" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/gellery" ? "red" : "black" }}>
            Gallery
          </p>
        </Link>
        <Link to="/contact" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/contact" ? "red" : "black" }}>
            Contact
          </p>
        </Link>
        <Link to="/process" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/process" ? "red" : "black" }}>
            Story
          </p>
        </Link>
        <Link to="/career" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/career" ? "red" : "black" }}>
            Careers
          </p>
        </Link>
        <Link to="/news" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/news" ? "red" : "black" }}>News</p>
        </Link>
        <Link to="/ourstory" className="text-[28px] font-semibold">
          <p style={{ color: pathname == "/ourstory" ? "red" : "black" }}>
            Our Story
          </p>
        </Link>
      </div>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <MenuOpenIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
