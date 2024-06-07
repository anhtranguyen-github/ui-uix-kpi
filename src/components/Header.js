import React from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import {
  LightMode as LightModeIcon,
  NightlightOutlined as NightlightOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
  LogoutOutlined as LogoutOutlinedIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import avatar from "../assets/images/avatar.png";

const Header = ({ onMenuClick, isNavbarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    if (location.pathname === "/user-info/setting") {
      setActiveButton("settings");
    } else {
      setActiveButton(null);
    }
  }, [location]);

  const handleSettingsClick = () => {
    navigate("/user-info/setting");
  };
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#fff", boxShadow: "none", p: "12px 0px 12px 30px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MenuIcon
          onClick={onMenuClick}
          sx={{
            color: "#5051F9",
            cursor: "pointer",
            display: { sm: "block", md: "block", lg: "none" },
          }}
        />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            bgcolor: "#F3F7FA",
            boxShadow: "none",
            borderRadius: "7px",
            display: { md: "flex", sm: "none", xs: "none" },
          }}
        >
          <InputBase placeholder="Search anything" sx={{ ml: 1, flex: 1 }} />
          <IconButton
            type="button"
            sx={{
              p: "10px",
              h: "20px",
              w: "20px",
              ":hover": { backgroundColor: "#F3F7FA" },
            }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Typography
          variant="h6"
          sx={{
            color: "#5051F9",
            fontWeight: "bold",
            display: { md: "none", sm: "block" },
          }}
        >
          HERON
        </Typography>
        <Box
          sx={{
            display: "flex",
            display: { sm: "none", lg: "flex", xs: "none" },
          }}
        >
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <IconButton
            onClick={handleSettingsClick}
            sx={{
              color: activeButton === "settings" ? "#fff" : "#000",
              backgroundColor:
                activeButton === "settings" ? "#5051F9" : "transparent",
              "&:hover": {
                backgroundColor:
                  activeButton === "settings" ? "#5051F9" : "transparent",
              },
            }}
          >
            <SettingsIcon
              sx={{
                color: activeButton === "settings" ? "#fff" : "#000",
              }}
            />
          </IconButton>
          <NotificationsNoneOutlinedIcon
            sx={{
              color: "#000",
              display: { sm: "none", xs: "none", lg: "block", md: "block" },
            }}
          />
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            component={Link}
            to="/user-info"
          />
          <KeyboardArrowDownOutlinedIcon sx={{ color: "#5051F9" }} />
          <LogoutOutlinedIcon sx={{ color: "#D55F5A" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
