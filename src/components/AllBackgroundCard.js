import React from "react";
import { Card, Grid, Box, Button, Typography } from "@mui/material";
import img1 from "../assets/images/img-1.jpg";
import "../styles/AllBackgroundCard.css";
export default function AllBackgroundCard({ handleCloseBackground }) {
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
          Chose your divice
        </Button>
      </Box>
      <Grid container spacing={2}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={4} key={index}>
            <Box
              oncclick={handleCloseBackground}
              component="img"
              src={img1}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
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
        {[...Array(6)].map((_, index) => (
          <Grid item xs={4} key={index}>
            <Box
              component="img"
              src={img1}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
