import { Card, Checkbox, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

const dueOptions = [
  { label: "Overdue", icon: <AccessTimeIcon sx={{ color: "red" }} /> },
  {
    label: "Due in the next day",
    icon: <AccessTimeIcon sx={{ color: "orange" }} />,
  },
  {
    label: "Due in the next week",
    icon: <AccessTimeIcon sx={{ color: "yellow" }} />,
  },
  {
    label: "Due in the next month",
    icon: <AccessTimeIcon sx={{ color: "green" }} />,
  },
  { label: "Marked as complete", icon: <DoneIcon sx={{ color: "blue" }} /> },
  {
    label: "Not marked as complete",
    icon: <DoneOutlineIcon sx={{ color: "gray" }} />,
  },
];

export default function DueSelection() {
  return (
    <Card sx={{ padding: 2 }}>
      {dueOptions.map((option, index) => (
        <Stack
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Checkbox />
          {option.icon}
          <Typography variant="body1" color="initial" sx={{ marginLeft: 1 }}>
            {option.label}
          </Typography>
        </Stack>
      ))}
    </Card>
  );
}
