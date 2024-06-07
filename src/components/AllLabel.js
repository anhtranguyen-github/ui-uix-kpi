import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Checkbox,
  IconButton,
  InputBase,
  FormControlLabel,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Label from "./Label";
import CreateLabelCard from "./CreateLabelCard"; // Import your CreateLabelCard component

export default function AllLabel({ onClose }) {
  const [isCreateLabelCardOpen, setIsCreateLabelCardOpen] = useState(false); // State to manage CreateLabelCard visibility

  const handleCreateLabelClick = () => {
    setIsCreateLabelCardOpen(true); // Show CreateLabelCard when button is clicked
  };

  const handleCloseCreateLabelCard = () => {
    setIsCreateLabelCardOpen(false); // Hide CreateLabelCard when close icon is clicked
  };
  return (
    <Box
      sx={{
        position: {
          lg: "fixed",
          md: "absolute",
          sm: "absolute",
          xs: "absolute",
        },
        top: "50%",
        left: {lg:"85%", md:"50%", sm:"50%", xs:"50%"},
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 2,
        borderRadius: 2,
        zIndex: 1300,
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
        <Typography
          variant="h7"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#5051F9",
            fontWeight: "bold",
          }}
        >
          Labels
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
      <Paper
        component="form"
        sx={{
          p: "1px 2px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#F3F7FA",
          boxShadow: "none",
          borderRadius: "7px",
        }}
      >
        <IconButton
          type="button"
          sx={{
            p: "5px",
            h: "20px",
            w: "20px",
            ":hover": {
              backgroundColor: "#F3F7FA",
            },
          }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search anything"
          sx={{
            ml: 1,
            flex: 1,
          }}
        />
      </Paper>
      <Stack spacing={1} direction={"column"} mt={2}>
        {[1, 2, 3, 4].map((index) => (
          <Stack
            key={index}
            spacing={1}
            direction={"row"}
            alignItems={"center"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <FormControlLabel control={<Checkbox />} />
            <Label
              specificLabelIndex={index}
              sx={{
                width: "230px",
                height: "38px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "0",
              }}
            />
            <CreateOutlinedIcon />
          </Stack>
        ))}
      </Stack>
      <Button
        variant="contained"
        fullWidth
        sx={{ bgcolor: "#5051F9", mb: 1, mt: 2, height: "40px" }}
        onClick={handleCreateLabelClick}
      >
        Create a new label
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{ color: "#5051F9", height: "40px", backgroundColor: "#fff" }}
      >
        Show more label
      </Button>
      {isCreateLabelCardOpen && (
        <CreateLabelCard onClose={handleCloseCreateLabelCard} />
      )}
    </Box>
  );
}
