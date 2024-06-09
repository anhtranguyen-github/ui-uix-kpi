import React from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  Typography,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
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
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        ></Box>
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
          <IconButton
            onClick={handleClick}
            sx={{
              color: "#000",
              display: { sm: "none", xs: "none", lg: "block", md: "block" },
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: 2 }}
      >
        <Box
          sx={{ mt: 2, width: "90%", maxWidth: "90vw", maxHeight: "90vh" }}
        >
          {/* <Typography variant="h6" sx={{ p: 2 }}>
            Thông báo
          </Typography> */}
          <List>
            <ListItem>
              <Card sx={{ width: "100%", boxShadow: "none" }}>
                {" "}
                {}
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={18}>
                      <Typography variant="h6" component="div" color="#5051F9">
                        Toast Title
                      </Typography>
                      <Typography variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the ...
                      </Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant="body2" color="#5051F9">
                            1 hour ago
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          container
                          justifyContent="flex-end"
                          alignItems="flex-end"
                        >
                          <Button size="small" disableRipple>
                            View detail
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </ListItem>

            <ListItem>
              <Card sx={{ width: "100%", boxShadow: "none" }}>
                {" "}
                {/* Đặt boxShadow thành "none" để loại bỏ đổ bóng */}
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={18}>
                      <Typography variant="h6" component="div" color="#5051F9">
                        Toast Title
                      </Typography>
                      <Typography variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the ...
                      </Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant="body2" color="#5051F9">
                            1 hour ago
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          container
                          justifyContent="flex-end"
                          alignItems="flex-end"
                        >
                          <Button size="small" disableRipple>
                            View detail
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </ListItem>

            <ListItem>
              <Card sx={{ width: "100%", boxShadow: "none" }}>
                {" "}
                {/* Đặt boxShadow thành "none" để loại bỏ đổ bóng */}
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={18}>
                      <Typography variant="h6" component="div" color="#C00000">
                        Lời nhắc: Quá hạn hoàn thành
                      </Typography>
                      <Typography variant="body2">
                        Công việc "[Tên công việc]" đã trễ hạn từ ngày [Hạn
                        chót]. Đến nay đã trễ [Số ngày] ngày.
                      </Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant="body2" color="#5051F9">
                            1 hour ago
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          container
                          justifyContent="flex-end"
                          alignItems="flex-end"
                        >
                          <Button size="small" disableRipple>
                            View detail
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </ListItem>

            <ListItem>
              <Card sx={{ width: "100%", boxShadow: "none" }}>
                {" "}
                {/* Đặt boxShadow thành "none" để loại bỏ đổ bóng */}
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={18}>
                      <Typography variant="h6" component="div" color="#5051F9">
                        Toast Title
                      </Typography>
                      <Typography variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the ...
                      </Typography>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant="body2" color="#5051F9">
                            1 hour ago
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          container
                          justifyContent="flex-end"
                          alignItems="flex-end"
                        >
                          <Button size="small" disableRipple>
                            View detail
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </ListItem>

            {/* Repeat the above ListItem block for other notifications */}
          </List>
        </Box>
      </Popover>
    </AppBar>
  );
};

export default Header;
