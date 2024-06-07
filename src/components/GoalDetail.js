import React from "react";
import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CircleChart from "./CircleChart";
import "../styles/GoalDetail.css";

const GoalDetail = ({ goal }) => {
  // Initialize state for task statuses
  const [taskStatuses, setTaskStatuses] = React.useState([]);

  // Set task statuses when goal changes
  React.useEffect(() => {
    if (goal && goal.tasks) {
      const initialStatuses = goal.tasks.map(() => 0);
      setTaskStatuses(initialStatuses);
    }
  }, [goal]);

  // Function to handle checkbox toggle
  const handleCheckboxToggle = (index) => {
    const newStatuses = [...taskStatuses];
    newStatuses[index] = newStatuses[index] === 0 ? 1 : 0;
    setTaskStatuses(newStatuses);
  };

  // If goal is null, return null
  if (!goal) return null;

  // Tính tổng số công việc đã hoàn thành dựa trên participationRate
  const totalCompletedTasks = goal.tasks.reduce((total, task, index) => {
    if (taskStatuses[index] === 1) {
      return total + task.participationRate;
    }
    return total;
  }, 0);

  // Tính phần trăm tổng thể công việc đã hoàn thành
  const totalCompletionPercentage = (totalCompletedTasks * 100).toFixed(1);

  return (
    <Stack spacing={1}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <CircleChart />
          <Typography variant="h6" color="#5051F9">
            KPI Point
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <CircleChart />
          <Typography variant="h6" color="#5051F9">
            Done Task
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body1" color="initial">
        Status: {totalCompletionPercentage}% completed
      </Typography>
      <Typography variant="body1" color="initial">
        Task
      </Typography>
      {goal.tasks.map((task, index) => (
        <Stack
          key={index}
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#5051F9",
              borderRadius: "16px",
              height: "38px",
              width: "320px",
              boxSizing: "border-box",
              pl: 1,
            }}
          >
            <Typography variant="body1" color="#fff">
              {task.name}
            </Typography>
            <FormControlLabel
              label=""
              control={
                <Checkbox
                  className="goal-detail-checkbox"
                  sx={{
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                    color: "#fff",
                  }}
                  checked={taskStatuses[index] === 1}
                  onChange={() => handleCheckboxToggle(index)}
                />
              }
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default GoalDetail;
