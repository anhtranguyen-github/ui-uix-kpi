import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function CreateLabelCard({ onClose }) {
  const [selectedColor, setSelectedColor] = useState("#5051F9");
  const [labelName, setLabelName] = useState();

  const setDefaultColor = () => {
    setSelectedColor("#5051F9");
  };

  const handleLabelNameChange = (event) => {
    setLabelName(event.target.value);
  };

  const colors = [
    "#5051F9",
    "#000000",
    "#D8DDE4",
    "#FF1B6B",
    "#1EA7FF",
    "#2F3093",
    "#525252",
    "#FFD600",
    "#4CAF50",
    "#FF9800",
    "#9C27B0",
    "#00BCD4",
    "#E91E63",
    "#FFEB3B",
    "#607D8B",
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0%",
        left: "0%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        borderRadius: 2,
        zIndex: 1400,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignSelf: "unset",
        }}
      >
        <IconButton onClick={onClose}>
          <ArrowBackIosNewIcon
            sx={{
              fontSize: "13px",
              border: "1px solid #D8DDE4",
              p: "5px",
              borderRadius: "10px",
            }}
          />
        </IconButton>

        <Typography
          variant="h7"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#5051F9",
            fontWeight: "bold",
          }}
        >
          Create Label
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon
            sx={{
              fontSize: "13px",
              border: "1px solid #D8DDE4",
              p: "5px",
              borderRadius: "10px",
            }}
          />
        </IconButton>
      </Stack>

      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "270px",
            height: "38px",
            borderRadius: "4px",
            bgcolor: selectedColor,
            display: "flex",
            alignItems: "center",
            pl: 1,
          }}
        >
          <Typography variant="body1" color="#fff">
            {labelName}
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body1" color="#5051F9">
        Title
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        placeholder="Enter label title"
        variant="outlined"
        value={labelName} // Set the value of the TextField to labelName state
        onChange={handleLabelNameChange} // Call handleLabelNameChange when the input changes
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            height: "40px",
            p: 0,
          },
          "& .MuiInputBase-input": {
            height: "100%",
            padding: "0 14px",
            display: "flex",
            alignItems: "center",
          },
        }}
      />

      <Typography variant="body1" color="#5051F9">
        Select a color
      </Typography>
      <Grid container spacing={1}>
        {colors.map((color, index) => (
          <Grid item xs={2.4} key={index}>
            <Box
              onClick={() => handleColorClick(color)}
              sx={{
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                bgcolor: color,
                cursor: "pointer", // Add pointer cursor to indicate it's clickable
              }}
            ></Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          color: "#5051F9",
          height: "40px",
          mt: 2,
          bgcolor: "#fff",
          "&:hover": {
            bgcolor: "rgba(80, 81, 249, 0.1)",
          },
        }}
        startIcon={<CloseIcon />}
        onClick={setDefaultColor}
      >
        Remove color
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{ bgcolor: "#5051F9", mb: 1, mt: 2, height: "40px" }}
        onClick={onClose}
      >
        Create a new label
      </Button>
    </Box>
  );
}
