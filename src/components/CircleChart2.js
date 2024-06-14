import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
export default function CircleChart() {
  const settings = {
    width: 100,
    height: 100,
    value: 4,
  };
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "url(#gradient1)",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#C10000", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#C10000", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </Gauge>
  );
}
