import React from "react";
import { Card, Grid, Box, Button, Typography } from "@mui/material";
import img1 from "../assets/images/a1.jpg";
import img2 from "../assets/images/a2.jpg";
import img3 from "../assets/images/a3.jpg";
import img4 from "../assets/images/a4.jpg";
import img5 from "../assets/images/a5.jpg";
import img6 from "../assets/images/a6.jpg";
import img7 from "../assets/images/a7.jpg";
import img8 from "../assets/images/a8.jpg";
import img9 from "../assets/images/a9.jpg";
import img10 from "../assets/images/a10.jpg";
import img11 from "../assets/images/a11.jpg";
import img12 from "../assets/images/a12.jpg";
import img21 from "../assets/images/b1.jpg";
import img22 from "../assets/images/b2.jpg";
import img23 from "../assets/images/b3.jpg";
import img24 from "../assets/images/b4.jpg";
import img25 from "../assets/images/b5.jpg";
import img26 from "../assets/images/b6.jpg";

import "../styles/AllBackgroundCard.css";

export default function AllBackgroundCard({ handleCloseBackground }) {
  const imagesA = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
  ];
  const imagesB = [
    img21, img22, img23, img24, img25, img26
  ];

  const imageBoxStyle = {
    width: "70px",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const imageBoxStyle2 = {
    width: "70px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <Card
      sx={{
        width: "300px",
        boxSizing: "border-box",
        borderRadius: "20px",
        position: {
          xs: "absolute",
          sm: "absolute",
          md: "absolute",
          lg: "fixed",
        },
        bottom: { xs: "0", sm: "0", md: "0", lg: "132px" },
        right: { xs: "18%", sm: "18%", md: "18%", lg: "20px" },
        zIndex: 100,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.5)",
        p: 3.5, // margin left to separate from NewBoardCard
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h6" color="initial">
            Photos
          </Typography>
        </Box>
        <Button
          className="small-btn"
          variant="contained"
          sx={{ bgcolor: "#5051F9" }}
        >
          Choose your device
        </Button>
      </Box>
      <Grid container spacing={2}>
        {imagesA.map((img, index) => (
          <Grid item xs={4} key={index}>
            <Box
              onClick={handleCloseBackground}
              component="img"
              src={img}
              sx={imageBoxStyle}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          mb: 2,
          mt: 2,
        }}
      >
        <Typography variant="h6" color="initial">
          Colors
        </Typography>
        <Button
          className="small-btn"
          variant="contained"
          sx={{ bgcolor: "#5051F9" }}
        >
          See more
        </Button>
      </Box>
      <Grid container spacing={2}>
        {imagesB.map((img, index) => (
          <Grid item xs={4} key={index}>
            <Box
              component="img"
              src={img}
              sx={imageBoxStyle2}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
