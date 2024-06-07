import {
  Box,
  Stack,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import Label from "./Label";
import AllLabel from "./AllLabel";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "../styles/NewGoalCard.css";
import DateCalendarValue from "./DateCalendarValue";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
export default function NewGoalCard({ onAddTask }) {
  const [isAllLabelOpen, setIsAllLabelOpen] = useState(false); // State for popup
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State for calendar popup
  const [selectedDate, setSelectedDate] = useState(dayjs("2023-05-20")); // State for selected date
  const [weight, setWeight] = useState(1);
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [goalDescription, setGoalDescription] = useState("");

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (!taskName) {
      alert("Please enter a task name");
      return;
    }

    const newTask = {
      name: taskName,
      weight: weight,
      specificLabelIndex: 1,
      participationRate: 0,
    };

    // Tính toán participationRate
    const updatedTasks = [...tasks, newTask];
    const totalWeight = updatedTasks.reduce(
      (sum, task) => sum + task.weight,
      0
    );

    const tasksWithParticipation = updatedTasks.map((task) => ({
      ...task,
      participationRate: task.weight / totalWeight,
    }));
    console.log(tasksWithParticipation);
    onAddTask(newTask);
    setTasks(tasksWithParticipation);
    setTaskName(""); // Reset task name input
    setWeight(1); // Reset weight input
  };

  const formatParticipationRate = (rate) => {
    return `${(rate * 100).toFixed(1)}%`;
  };

  const handleLabelClick = () => {
    setIsAllLabelOpen(true);
  };

  const handleCloseAllLabel = () => {
    setIsAllLabelOpen(false);
  };

  const handleDateClick = () => {
    setIsCalendarOpen(true); // Mở calendar khi `<Typography>` được click
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(dayjs(newDate)); // Update selected date and format it
    setIsCalendarOpen(false); // Close the calendar after selecting a date
  };

  return (
    <Box>
      <Stack direction="column" spacing={2} alignItems="center">
        {tasks.map((task, index) => (
          <Stack key={index} spacing={1} sx={{ width: "100%" }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={5}>
                <Typography
                  variant="h7"
                  color="initial"
                  fontWeight="bold"
                >{`${task.name}`}</Typography>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body1" color="initial">
                    Weight:{" "}
                  </Typography>
                  <Typography variant="body1" color="#5051F9">
                    {task.weight}
                  </Typography>
                </Stack>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  height: "28px",
                  minWidth: "42px",
                  fontSize: "10px",
                  borderRadius: "16px",
                  bgcolor: "#5051F9",
                }}
                onClick={() => {
                  const updatedTasks = tasks.filter((_, i) => i !== index);
                  setTasks(updatedTasks);
                }}
              >
                Remove
              </Button>
            </Stack>
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
                <Typography
                  variant="body2"
                  color="#5051F9"
                  sx={{ flexGrow: 1 }}
                >
                  {formatParticipationRate(task.participationRate)}
                </Typography>
              </Box>
            </Box>
          </Stack>
        ))}
        <Stack direction="row" justifyContent={"center"} alignItems={"center"}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #D8DDE4",
              color: "#8FA0B6",
              height: "40px",
              borderRadius: "16px",
              fontSize: "10px",
              marginLeft: "10px",
            }}
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Stack>
        <Stack
          spacing={1.5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "0px auto",
          }}
        >
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ width: "150px", alignItems: "center" }}
            >
              <AssignmentIcon sx={{ color: "#8FA0B6" }} />
              <Typography variant="body1" color="#8FA0B6">
                Task Name
              </Typography>
            </Stack>
            <TextField
              label="Task Name"
              variant="outlined"
              size="small"
              value={taskName}
              mt={1}
              onChange={handleTaskNameChange}
            />
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Stack direction={"row"} spacing={1} sx={{ width: "150px" }}>
              <AccessTimeIcon sx={{ color: "#8FA0B6" }} />
              <Typography variant="body1" color="#8FA0B6">
                Deadline
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color="initial"
              onClick={handleDateClick}
            >
              {selectedDate
                ? selectedDate.format("ddd, D MMM")
                : "Mon, 20 May - Fri, 25 May"}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Stack direction={"row"} spacing={1} sx={{ width: "150px" }}>
              <LabelOutlinedIcon sx={{ color: "#8FA0B6" }} />
              <Typography variant="body1" color="#8FA0B6">
                Label
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
              <Label
                specificLabelIndex={1}
                sx={{ display: "inline-block", mr: "16px" }}
              />
              <Label
                specificLabelIndex={0}
                sx={{ display: "inline-block", cursor: "pointer" }}
                onClick={handleLabelClick}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Stack direction={"row"} spacing={1} sx={{ width: "150px" }}>
              <FitnessCenterIcon sx={{ color: "#8FA0B6" }} />
              <Typography variant="body1" color="#8FA0B6">
                Total weight
              </Typography>
            </Stack>
            <FormControl
              className="weight-menu"
              variant="outlined"
              size="small"
            >
              <InputLabel id="weight-select-label"></InputLabel>
              <Select
                labelId="weight-select-label"
                value={weight}
                onChange={handleWeightChange}
                sx={{ height: "23px", width: "80px" }}
              >
                {[0.5, 1, 1.5, 2].map((weight) => (
                  <MenuItem key={weight} value={weight}>
                    {weight}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
            <Stack direction={"row"} spacing={1}>
              <DescriptionOutlinedIcon sx={{ color: "#8FA0B6" }} />
              <Typography variant="body1" color="#8FA0B6">
                Description
              </Typography>
            </Stack>
          </Stack>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write something for detail"
            rows={5}
            multiline
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
          />
        </Stack>
      </Stack>
      {isAllLabelOpen && <AllLabel onClose={handleCloseAllLabel} />}
      {isCalendarOpen && (
        <DateCalendarValue
          defaultValue={selectedDate}
          onChange={handleDateChange}
        />
      )}
    </Box>
  );
}
