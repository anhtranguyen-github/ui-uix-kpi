import React, { useState } from "react";
import {
  Card,
  Menu,
  Typography,
  MenuItem,
  TextField,
  IconButton,
  Box,
  Grid,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/b5.jpg";
import img6 from "../assets/images/b6.jpg";
import img7 from "../assets/images/img-5.jpg";
import img8 from "../assets/images/img-6.jpg";
import img9 from "../assets/images/img-7.jpg";

export default function NewBoardCard({
  handleClose,
  setShowAllBackgroundCard,
  showAllBackgroundCard,
  setShowLetBuildWorkspace,
}) {
  const [visibility, setVisibility] = useState("Public");

  const handleMenuItemClick = (value) => {
    setVisibility(value);
  };

  const handleGridItemClick = () => {
    setShowAllBackgroundCard(!showAllBackgroundCard);
  };

  const handleCreateNewBoardClick = () => {
    setShowLetBuildWorkspace(true);
  };

  const options = [
    { label: "Private", icon: <LockOutlinedIcon /> },
    { label: "Public", icon: <PublicIcon /> },
  ];

  const imagesSet1 = [img1, img2, img3, img4];
  const imagesSet2 = [img5, img6, img7, img8, img9];

  return (
    <Card
      sx={{
        maxWidth: "750px",
        boxSizing: "border-box",
        borderRadius: "20px",
        p: 3.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" color="#000" fontWeight={"bold"}>
            New Workspace settings
          </Typography>
        </Box>
        <IconButton onClick={handleClose}>
          <CloseIcon
            sx={{
              fontSize: "13px",
              border: "1px solid #D8DDE4",
              p: "5px",
              borderRadius: "10px",
            }}
          />
        </IconButton>
      </Box>
      <Typography variant="body1" color="#36475E" mb={2}>
        Visibility
      </Typography>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <TextField
              variant="outlined"
              value={visibility}
              readOnly
              {...bindTrigger(popupState)}
              sx={{
                width: "100%",
                mt: 1,
                mb: 2,
                "& .MuiInputBase-input": {
                  cursor: "pointer",
                },
                "& input": {
                  caretColor: "transparent",
                },
              }}
            />
            <Menu {...bindMenu(popupState)}>
              {options.map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={() => {
                    handleMenuItemClick(option.label);
                    popupState.close();
                  }}
                  sx={{
                    bgcolor:
                      visibility === option.label ? "#5051F9" : "transparent",
                    color: visibility === option.label ? "#fff" : "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {option.icon}
                  <Typography sx={{ ml: 1 }}>{option.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <Typography variant="body1" color="#36475E" mb={2}>
        Select background
      </Typography>
      <Grid container spacing={2}>
        {imagesSet1.map((img, index) => (
          <Grid item xs={3} key={index} mb={1}>
            <Box
              component="img"
              src={img}
              sx={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
        ))}
        {imagesSet2.map((img, index) => (
          <Grid item xs={2} key={index} mb={3}>
            <Box
              component="img"
              src={img}
              sx={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
        ))}
        <Grid item xs={2} mb={3} onClick={handleGridItemClick}>
          <Box
            sx={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #D8DDE4",
              cursor: "pointer",
            }}
          >
            <MoreHorizIcon />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ bgcolor: "#5051F9" }}
          onClick={handleCreateNewBoardClick}
        >
          Create new workspace
        </Button>
      </Box>
    </Card>
  );
}
