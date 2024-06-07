import React, { useState } from "react";
import { Card, Button, Box, Menu, MenuItem } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import DueSelection from "./DueSelection";
import LabelSelection from "./LabelSelection";
import Label from "./Label"; // Import the Label component
import "../styles/Sort.css";

const Sort = ({ onSortChange }) => {
  const [dueAnchorEl, setDueAnchorEl] = useState(null);
  const [labelAnchorEl, setLabelAnchorEl] = useState(null);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleDueClick = (event) => {
    setDueAnchorEl(dueAnchorEl ? null : event.currentTarget);
  };

  const handleLabelClick = (event) => {
    setLabelAnchorEl(labelAnchorEl ? null : event.currentTarget);
  };

  const handleLabelChange = (labelIndex) => {
    setSelectedLabels((prev) => {
      const newSelectedLabels = prev.includes(labelIndex)
        ? prev.filter((index) => index !== labelIndex)
        : [...prev, labelIndex];

      console.log(newSelectedLabels);
      onSortChange(newSelectedLabels); // Gửi danh sách selectedLabels thay vì labelIndex đơn lẻ
      return newSelectedLabels;
    });
  };

  const dueOpen = Boolean(dueAnchorEl);
  const labelOpen = Boolean(labelAnchorEl);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "866px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          borderBottom: "1px solid #E0E0E0",
          width: "100%",
          paddingBottom: "8px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<AccessTimeIcon />}
          sx={{
            minWidth: "102px",
            width: "102px",
            height: "32px",
            mr: "8px",
            boxSizing: "border-box",
          }}
          onClick={handleDueClick}
        >
          Due <ArrowDropDownIcon />
        </Button>
        <Menu
          className="due-menu"
          anchorEl={dueAnchorEl}
          open={dueOpen}
          onClose={handleDueClick}
          disableRipple
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem disableRipple sx={{ padding: 0 }}>
            <DueSelection />
          </MenuItem>
        </Menu>

        <Button
          variant="contained"
          color="primary"
          startIcon={<LabelOutlinedIcon />}
          sx={{
            height: "32px",
            boxSizing: "border-box",
          }}
          onClick={handleLabelClick}
        >
          Label <ArrowDropDownIcon />
        </Button>
        <Menu
          className="label-menu"
          anchorEl={labelAnchorEl}
          open={labelOpen}
          onClose={handleLabelClick}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem disableRipple sx={{ padding: 0 }}>
            <LabelSelection
              selectedLabels={selectedLabels}
              onLabelChange={handleLabelChange}
            />
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ mt: 2, display: "flex" }}>
        {selectedLabels.map((labelIndex) => {
          return (
            <Label
              key={labelIndex}
              specificLabelIndex={labelIndex}
              sx={{ mr: "8px" }}
            />
          );
        })}
      </Box>
    </Card>
  );
};

export default Sort;
