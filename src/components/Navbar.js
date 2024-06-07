import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../styles/Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const [showWorkspaceButtons, setShowWorkspaceButtons] = useState(false);
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname.startsWith("/workspace")) {
      setShowWorkspaceButtons(true);
    } else {
      setShowWorkspaceButtons(false);
    }
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleWorkspaceToggle = () => {
    setShowWorkspaceButtons((prevState) => !prevState);
    if (location.pathname !== "/workspace") {
      setActivePath((prevState) =>
        prevState === "/workspace" ? "/" : "/workspace"
      );
    }
  };

  const handleButtonClick = (path) => {
    setActivePath(path);
    setShowWorkspaceButtons(
      path === "/workspace" || path.startsWith("/workspace/")
    );
  };

  const getButtonVariant = (path) => {
    if (location.pathname === "/user-info") {
      return "text";
    }
    if (path === "/workspace" && showWorkspaceButtons) {
      return "contained";
    }
    return activePath === path ? "contained" : "text";
  };

  const getButtonTextColor = (path) => {
    if (location.pathname === "/user-info") {
      return theme.palette.button.unchoosed.color;
    }
    return activePath === path ||
      (path === "/workspace" && showWorkspaceButtons)
      ? theme.palette.button.choosed.color
      : theme.palette.button.unchoosed.color;
  };

  const commonButtonStyles = {
    width: "90%",
    m: 0,
    mb: 1,
    fontSize: "0.5rem",
    "@media (min-width:960px)": {
      fontSize: "12px", // Font size for large screens
    },
  };

  const getChildButtonStyles = (path) => {
    return activePath === path
      ? theme.palette.btnChild.choosed
      : theme.palette.btnChild.unchoosed;
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRight: "1px solid #D9D9D9",
        height: "100vh",
        bgcolor: "#fff",
        position: {
          sm: "absolute",
          md: "absolute",
          lg: "absolute",
          xs: "absolute",
        },
        minWidth: "215px",
        zIndex: 9999,
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack
        spacing={1}
        sx={{
          left: 0,
          top: 0,
          boxSizing: "border-box",
          p: 4,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.text.third, fontWeight: "bold" }}
            component={Link}
            to="/dashboard"
          >
            HERON
          </Typography>
          <Box sx={{ flex: 1, mb: 3, mt: 3 }}>
            <Box
              sx={{
                borderBottom: "2px solid",
                borderColor: "#D9D9D9",
              }}
            />
          </Box>
          <Typography sx={{ color: theme.palette.text.secondary, pl: 2 }}>
            MAIN
          </Typography>
        </Box>

        <Button
          variant={getButtonVariant("/dashboard")}
          component={Link}
          to="/dashboard"
          onClick={() => handleButtonClick("/dashboard")}
          sx={
            activePath === "/dashboard"
              ? theme.palette.button.choosed
              : {
                  ...theme.palette.button.unchoosed,
                  color: getButtonTextColor("/dashboard"),
                }
          }
          startIcon={<HomeIcon />}
        >
          Dashboard
        </Button>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Button
            fullWidth
            variant={getButtonVariant("/workspace")}
            onClick={handleWorkspaceToggle}
            component={Link}
            to="/workspace"
            sx={
              activePath === "/workspace" || showWorkspaceButtons
                ? theme.palette.button.choosed
                : {
                    ...theme.palette.button.unchoosed,
                    color: getButtonTextColor("/workspace"),
                  }
            }
            startIcon={<HomeRepairServiceIcon />}
          >
            Workspace
            {showWorkspaceButtons ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </Button>
          {showWorkspaceButtons && (
            <>
              <Button
                className="child-btn"
                size="medium"
                variant={getButtonVariant("/workspace/javacourse")}
                component={Link}
                to="/workspace/javacourse"
                onClick={() => handleButtonClick("/workspace/javacourse")}
                sx={{
                  ...commonButtonStyles,
                  ...getChildButtonStyles("/workspace/javacourse"),
                  mt: 1,
                }}
              >
                Java Udemy Course
              </Button>

              <Button
                className="child-btn"
                size="medium"
                variant={getButtonVariant("/workspace/kanji")}
                component={Link}
                to="/workspace/kanji"
                onClick={() => handleButtonClick("/workspace/kanji")}
                sx={{
                  ...commonButtonStyles,
                  ...getChildButtonStyles("/workspace/kanji"),
                }}
              >
                30 kanji a day
              </Button>
              <Button
                className="child-btn"
                size="medium"
                variant={getButtonVariant("/workspace/uiuxcourse")}
                component={Link}
                to="/workspace/uiuxcourse"
                onClick={() => handleButtonClick("/workspace/uiuxcourse")}
                sx={{
                  ...commonButtonStyles,
                  ...getChildButtonStyles("/workspace/uiuxcourse"),
                }}
              >
                UI/UX Course
              </Button>
              <Button
                className="child-btn"
                size="small"
                variant={getButtonVariant("/workspace/createworkspace")}
                component={Link}
                to="/workspace/createworkspace"
                onClick={() => handleButtonClick("/workspace/createworkspace")}
                sx={{
                  ...commonButtonStyles,
                  ...getChildButtonStyles("/workspace/createworkspace"),
                }}
              >
                New Workspace
              </Button>
            </>
          )}
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
            mb: 2,
            borderTop: "2px solid #D8DDE4",
            paddingTop: 4,
            color: "#757575",
          }}
        >
          <HelpOutlineIcon sx={{ mr: 1, color: "#757575" }} /> Help
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
            color: "#757575",
            "&:hover": {
              color: "#5051F9",
            },
          }}
          component={Link}
          to="/signin"
        >
          <LogoutIcon
            sx={{
              mr: 1,
            }}
          />{" "}
          Logout Account
        </Box>
      </Box>
    </Box>
  );
}
