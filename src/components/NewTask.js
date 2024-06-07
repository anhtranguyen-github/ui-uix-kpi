import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const NewTask = ({ onClose, onAddTask }) => {
  const [weight, setWeight] = useState(1);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCreateTask = () => {
    // Create new task object
    const newTask = {
      name: "New Task", // You can customize the task name
      weight: weight,
      specificLabelIndex: 1, // You may need to customize this
      status: 0,
    };
    onAddTask(newTask); // Call the callback function to add the new task
  };

  return (
    <Card
      sx={{
        position: {
          md: "absolute",
          sm: "absolute",
          xs: "absolute",
          lg: "fixed",
        },
        bottom: "30%",
        left: { md: "3%", sm: "3%", xs: "3%", lg: "65%" },
        width: "360px",
        boxShadow: 24,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 2,
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" color="#000" fontWeight={"bold"}>
            New Task
          </Typography>
          <IconButton>
            <EditIcon
              sx={{
                fontSize: "14px",
                border: "1px solid #D8DDE4",
                p: "5px",
                borderRadius: "10px",
                marginLeft: 1,
              }}
            />
          </IconButton>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon
            sx={{
              fontSize: "13px",
              border: "1px solid #D8DDE4",
              p: "5px",
              borderRadius: "10px",
            }}
          />
        </IconButton>
      </Box>
      <Stack direction={"row"} spacing={2} sx={{ width: "100%", pl: 2 }}>
        <Stack direction={"row"} spacing={1} sx={{ width: "150px" }}>
          <AssignmentIcon sx={{ color: "#8FA0B6" }} />
          <Typography variant="body1" color="#8FA0B6">
            Total weight
          </Typography>
        </Stack>
        <FormControl variant="outlined" size="small">
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
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Button
          bgcolor="#5051F9"
          variant="contained"
          sx={{ height: "37px", bgcolor: "#5051F9", mr: 2 }}
          onClick={handleCreateTask} // Call handleCreateTask function
        >
          Create
        </Button>
        <Button onClick={onClose} variant="outlined" sx={{ height: "37px" }}>
          Cancel
        </Button>
      </Stack>
    </Card>
  );
};

export default NewTask;
