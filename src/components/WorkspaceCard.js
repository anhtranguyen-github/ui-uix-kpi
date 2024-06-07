import React from "react";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import avt1 from "../assets/images/1.png";
import avt2 from "../assets/images/2.png";
import avt3 from "../assets/images/3.png";
import avt4 from "../assets/images/4.png";
import avt5 from "../assets/images/5.png";
import Avatar from "@mui/material/Avatar";
import "../styles/Workspace.css";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function WorkspaceCard({
  title,
  description,
  status,
  dueToday,
  dueThisWeek,
}) {
  return (
    <Card
      sx={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        borderRadius: "16px",
        minWidth: "260px",
        maxHeight: "179px",
        maxWidth: "345px",
        margin: "auto",
        background: "linear-gradient(282.94deg, #5051F9 0.57%, #232360 99.43%)",
      }}
    >
      <CardContent
        sx={{
          width: "100%",
          paddingY: 1,
          paddingX: 2,
          "& .css-begas0-MuiCardContent-root:last-child": {
            mb: "0px",
          },
        }}
      >
        <Typography variant="h5" color="#fff" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="#fff" paragraph>
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={status}
              sx={{
                "& .MuiLinearProgress-bar": {
                  borderRadius: "2px",
                  background:
                    "linear-gradient(90deg, #00FF87 0%, #34A853 100%)",
                },
                "& .MuiLinearProgress-root": {
                  backgroundColor: "#E8E8ED",
                  borderRadius: "2px",
                },
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" color="#fff" sx={{ flexGrow: 1 }}>
              {status}%
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="#fff">
            Due Today:{" "}
            <Typography display={"inline"} variant="body2" color="#FF930F">
              {dueToday}
            </Typography>
          </Typography>
          <Typography variant="body2" color="#fff">
            Due This Week:{" "}
            <Typography display={"inline"} variant="body2" color="#FF930F">
              {dueThisWeek}
            </Typography>
          </Typography>
        </Box>
        <AvatarGroup sx={{ justifyContent: "start" }}>
          <Avatar
            sx={{ width: "20px", height: "20px" }}
            alt="Remy Sharp"
            src={avt1}
          />
          <Avatar
            alt="Travis Howard"
            src={avt2}
            sx={{ width: "20px", height: "20px" }}
          />
          <Avatar
            alt="Cindy Baker"
            src={avt3}
            sx={{ width: "20px", height: "20px" }}
          />
          <Avatar
            alt="Agnes Walker"
            src={avt4}
            sx={{ width: "20px", height: "20px" }}
          />
          <Avatar
            alt="Trevor Henderson"
            src={avt5}
            sx={{ width: "20px", height: "20px" }}
          />
        </AvatarGroup>
      </CardContent>
    </Card>
  );
}
