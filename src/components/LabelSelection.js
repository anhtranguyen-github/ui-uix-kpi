import { Card, Checkbox, Stack } from "@mui/material";
import React from "react";
import Label from "./Label";

const labelOptions = [
  { specificLabelIndex: 1 },
  { specificLabelIndex: 2 },
  { specificLabelIndex: 3 },
  { specificLabelIndex: 4 },
];

export default function LabelSelection({ selectedLabels, onLabelChange }) {
  return (
    <Card sx={{ padding: 2 }}>
      {labelOptions.map((option, index) => (
        <Stack
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Checkbox
            checked={selectedLabels.includes(option.specificLabelIndex)}
            onChange={() => onLabelChange(option.specificLabelIndex)}
          />
          <Label specificLabelIndex={option.specificLabelIndex} />
        </Stack>
      ))}
    </Card>
  );
}
