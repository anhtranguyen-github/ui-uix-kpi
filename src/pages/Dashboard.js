import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import img1 from "../assets/images/dashboard-1.png";
import img2 from "../assets/images/dashboard-2.png";
import img3 from "../assets/images/dashboard-3.png";
import img4 from "../assets/images/dashboard-4.png";
import img5 from "../assets/images/dashboard-5.png";
import img6 from "../assets/images/dashboard-6.png";
export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            component="img"
            src={img1}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            component="img"
            src={img2}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box
            component="img"
            src={img3}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Typography variant="h6" color="#232360" mb={2}>
        Upcoming Task
      </Typography>
      <Box
        component="img"
        src={img5}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          mb: 2,
        }}
      ></Box>
      <Box
        component="img"
        src={img6}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      ></Box>
    </Box>
  );
}
