import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import bg1 from "../assets/images/background-1.png";
import bg2 from "../assets/images/background-2.png";
import bg3 from "../assets/images/background-3.png";
import bg4 from "../assets/images/background-4.png";
import bg5 from "../assets/images/background-5.png";

export default function UserSetting() {
  const [selectedBg, setSelectedBg] = useState(null);

  const handleSelectBg = (bg) => {
    setSelectedBg(bg === selectedBg ? null : bg);
  };

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
        <Grid container spacing={1}>
          {[bg1, bg2, bg3, bg4, bg5].map((bg, index) => (
            <Grid key={index} item xs={2.4}>
              <Box
                component="img"
                src={bg}
                sx={{
                  width: "190px",
                  height: "138px",
                  borderRadius: "16px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                  cursor: "pointer", // Thêm cursor pointer để chỉ ra rằng hình ảnh có thể click
                  border: selectedBg === bg ? "2px solid #5051F9" : "2px solid transparent", // Thêm viền xanh khi được chọn
                }}
                onClick={() => handleSelectBg(bg)}
              />
            </Grid>
          ))}
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
        />
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
