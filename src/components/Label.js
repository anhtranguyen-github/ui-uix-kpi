import React from "react";
import { Card, Typography } from "@mui/material";

const labels = [
  { text: "+ Add Label", color: "#8FA0B6", opacity: 0 },
  { text: "Website", color: "#D55F5A", opacity: 0.1 },
  { text: "Product", color: "#00B800", opacity: 0.1 },
  { text: "Service", color: "#1EA7FF", opacity: 0.1 },
  { text: "Feature", color: "#FF8008", opacity: 0.1 },
];

export default function Label({ specificLabelIndex, onClick, sx }) {
  const specificLabel = labels[specificLabelIndex];

  return (
    <Card
      onClick={onClick}
      sx={{
        p: "3px 8px",
        borderRadius: "15px",
        boxShadow: "none",
        border: `1px solid ${specificLabel.color}`,
        backgroundColor: `${specificLabel.color}${Math.round(
          specificLabel.opacity * 255
        )
          .toString(16)
          .toUpperCase()}`,
        ...sx,
      }}
    >
      <Typography sx={{ color: specificLabel.color }} variant="body2">
        {specificLabel.text}
      </Typography>
    </Card>
  );
}
