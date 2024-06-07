import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function MainPage() {
  const theme = useTheme();
  const isLgOrSmaller = useMediaQuery(theme.breakpoints.down("lg"));
  const [isNavbarVisible, setIsNavbarVisible] = useState(!isLgOrSmaller);

  const toggleNavbarVisibility = () => {
    setIsNavbarVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsNavbarVisible(!isLgOrSmaller);
  }, [isLgOrSmaller]);

  return (
    <div>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {isNavbarVisible && (
          <Box
            sx={{
              width: "18%",
              position: "absolute",
              height: "100vh",
              zIndex: 1,
            }}
          >
            <Navbar />
          </Box>
        )}
        <Box
          sx={{
            marginLeft: { sm: "0", md: "0", lg: "18%", xs: "0" },
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              position: "fixed",
              width: { lg: "82%", md: "100%", sm: "100%", xs: "100%" },
              zIndex: 1,
            }}
          >
            <Header
              onMenuClick={toggleNavbarVisibility}
              isNavbarVisible={isNavbarVisible}
            />
          </Box>
          <Box
            sx={{
              marginTop: "88px",
              padding: 2,
              overflowY: "auto",
              flexGrow: 1,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
