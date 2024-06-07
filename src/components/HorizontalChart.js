import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";

export default function VerticalChart() {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        width: "540px",
        bgcolor: "#fff",
        borderRadius: "16px",
      }}
    >
      <svg width="0" height="0">
        <defs>
          {/* Gradient từ màu xanh dương đến màu tím */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#5051F9", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#2F3093", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <BarChart
        series={[
          {
            data: Array(7).fill(80), // Giả sử giá trị cao nhất là 80%
            stack: "A",
            label: "Weekly Data",
            color: "url(#gradient)",
          },
        ]}
        barLabel={(item, context) => {
          return context.bar.width < 60 ? null : item.value?.toString();
        }}
        width={600} // Giữ nguyên width
        height={350} // Giữ nguyên height
        xAxis={[
          // Giữ nguyên xAxis
          {
            scaleType: "band",
            dataKey: "order",
            data: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
        ]}
        yAxis={[{ scaleType: "linear", max: 100 }]} // Tăng giá trị max lên 100%
        sx={{
          "& .MuiChartsBarElement-rect": {
            borderRadius: "8px", // Đặt borderRadius cho các cột
            stroke: "#E8E8ED", // Màu khung bên ngoài
            strokeWidth: 2,
          },
        }}
      />
    </Stack>
  );
}
