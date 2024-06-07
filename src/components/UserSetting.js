import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import bg1 from "../assets/images/background-1.png";
import bg2 from "../assets/images/background-2.png";
import bg3 from "../assets/images/background-3.png";
import bg4 from "../assets/images/background-4.png";
import bg5 from "../assets/images/background-4.png";
export default function UserSetting() {
  return (
    <Box>
      <Typography variant="h6" color="#5051F9">
        Theme Color
      </Typography>
      <Box
        sx={{
          p: 4,
          backgroundColor: "#fff",
          borderRadius: "16px",
          mb: 2,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={2.4}>
            <Box
              component="img"
              src={bg1}
              sx={{
                width: "190px",
                height: "138px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              component="img"
              src={bg2}
              sx={{
                width: "190px",
                height: "138px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              component="img"
              src={bg3}
              sx={{
                width: "190px",
                height: "138px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              component="img"
              src={bg4}
              sx={{
                width: "190px",
                height: "138px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
          <Grid item xs={2.4}>
            <Box
              component="img"
              src={bg5}
              sx={{
                width: "190px",
                height: "138px",
                borderRadius: "16px",
                objectFit: "cover",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h6" color="#5051F9">
        Setting Weight
      </Typography>
      <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: "16px" }}>
        <Typography variant="body1" color="initial" mb={1}>
          Change max height
        </Typography>
        <TextField
          fullWidth
          id="outlined-uncontrolled"
          placeholder="Enter max height"
        ></TextField>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Button variant="contained">Save</Button>
          <Button variant="outlined" sx={{ bgcolor: "#fff", color: "#5051F9" }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
