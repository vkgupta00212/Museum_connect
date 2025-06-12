/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import necessary components from react-router-dom
import Logo from "../assets/MesuemConnectLogo.png"; // Adjust path to your logo
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import "./Navbar.css"; // Adjust path to your CSS file

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // Manage drawer state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Check login state on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Update login state based on token presence
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    localStorage.setItem("userLoggedIn", "false"); // Update localStorage
    setIsLoggedIn(false); // Update login state
    navigate("/login"); // Redirect to login page
  };

  // Dynamic menu options
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Ticket", icon: <InfoIcon />, path: "/ticket" },
    { text: "Canteen", icon: <CommentRoundedIcon />, path: "/canteen" },
    { text: "Login", icon: <PersonIcon />, path: "/login" },
  ];

  return (
    <nav>
      {/* Main Navbar */}
      <div className="allNav">
        {/* Logo */}
        <div className="nav-logo-container">
          <Link to="/">
            <img src={Logo} alt="Museum Connect Logo" />
          </Link>
        </div>

        {/* Links for Desktop View */}
        <div className="navbar-links-container">
          {menuOptions.map((item, index) =>
            item.path ? (
              <Link key={index} to={item.path}>
                {item.text}
              </Link>
            ) : (
              <button
                className="primary-button"
                key={index}
                onClick={item.action}
              >
                {item.text}
              </button>
            )
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer for Mobile View */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                {item.path ? (
                  <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={item.action}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
