import { Card, Button, Box, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import Label from "./Label";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

export default function GoalCard({ goalName, tasks, onOpenGoalDetailDialog }) {
  const formatParticipationRate = (rate) => {
    return `${(rate * 100).toFixed(1)}%`;
  };

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: "16px",
        backgroundColor: "#fff",
        color: "#fff",
        boxShadow: "none",
        border: "1px solid #D8DDE4",
        width: "100%",
        maxWidth: "345px",
        minWidth: "290px",
        boxSizing: "border-box",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h7" color="initial" fontWeight={"bold"}>
          {goalName}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ width: "32px", height: "32px", minWidth: "32px" }}
        >
          <AddIcon />
        </Button>
      </Box>
      {tasks.map((task, index) => (
        <Card
          key={index}
          sx={{
            mb: 2,
            p: 2,
            borderRadius: "10px",
            border: "1px solid #D8DDE4",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
              boxShadow: "none",
            }}
          >
            <Typography variant="h7" fontWeight={"bold"} color="initial">
              {task.name}
            </Typography>
            <Button
              variant="outlined"
              sx={{ width: "32px", height: "32px", minWidth: "32px" }}
            >
              <MoreHorizIcon />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "none",
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AssignmentIcon sx={{ mr: 1 }} />
              <Typography variant="h7" color="initial">
                Weight
              </Typography>
              <Typography variant="h7" color="#5051F9" ml={1}>
                {task.weight}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <LabelOutlinedIcon sx={{ mr: 1 }} />
              <Label specificLabelIndex={task.specificLabelIndex} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "none",
            }}
          >
            <Box sx={{ width: "100%", mr: 1 }}>
              <Typography variant="body1" color="initial">
                Participation:
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="#5051F9" sx={{ flexGrow: 1 }}>
                {formatParticipationRate(task.participationRate)}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
      <Button
        variant="contained"
        fullWidth
        onClick={() => onOpenGoalDetailDialog()}
      >
        View more
      </Button>
    </Card>
  );
}
