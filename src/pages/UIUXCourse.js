import React, { useState } from "react";
import {
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  AvatarGroup,
  Typography,
  Grid,
  Stack,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";

import avt1 from "../assets/images/1.png";
import avt2 from "../assets/images/2.png";
import avt3 from "../assets/images/3.png";
import avt4 from "../assets/images/4.png";
import avt5 from "../assets/images/5.png";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import NewTask from "../components/NewTask";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GoalCard from "../components/GoalCard";
import vertical from "../assets/images/vertical-chart.png";
import horizone from "../assets/images/horizone-chart.png";
import NewGoalCard from "../components/NewGoalCard";
import GoalDetail from "../components/GoalDetail";
import Label from "../components/Label";
import CircleChart from "../components/CircleChart";
import CircleChart1 from "../components/CircleChart1";
import CircleChart2 from "../components/CircleChart2";

import "../styles/Uiux.css";
import Sort from "../components/Sort";
import { useEffect } from "react";
const UIUXCourse = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [openGoalDetailDialog, setOpenGoalDetailDialog] = useState(false);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [goalTitle, setGoalTitle] = useState("New Goal");
  const [isEditing, setIsEditing] = useState(false);
  const [newGoal, setNewGoal] = useState({ goalTitle: "New Goal", tasks: [] });
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };
  const handleTitleChange = (event) => {
    setNewGoal({ ...newGoal, goalTitle: event.target.value });
  };
  const handleSortChange = (newSelectedLabels) => {
    setSelectedLabels(newSelectedLabels);
  };
  const handleOpenGoalDetailDialog = (goal) => {
    setSelectedGoal(goal);
    setOpenGoalDetailDialog(true);
  };
  const handleAddTask = () => {
    setShowNewTask(true); // Khi nhấn nút Add Task, hiển thị NewTask card
  };

  const handleCloseNewTask = () => {
    setShowNewTask(false); // Đóng NewTask card
  };
  const handleCloseGoalDetailDialog = () => {
    setOpenGoalDetailDialog(false);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(sortAnchorEl ? null : event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddTaskToNewGoal = (newTask) => {
    setNewGoal({ ...newGoal, tasks: [...newGoal.tasks, newTask] });
  };
  const handleAddNewTaskToGoal = (newTask) => {
    if (selectedGoal) {
      const updatedGoal = {
        ...selectedGoal,
        tasks: [...selectedGoal.tasks, newTask],
      };
      setSelectedGoal(updatedGoal);
      setShowNewTask(false);
    }
  };
  const handleAddNewGoal = () => {
    const { goalTitle, tasks } = newGoal;

    // Tính toán participationRate cho các task
    const totalWeight = tasks.reduce((sum, task) => sum + task.weight, 0);
    const tasksWithParticipation = tasks.map((task) => ({
      ...task,
      participationRate: task.weight / totalWeight,
    }));

    // Tạo goal mới với thông tin cập nhật về participationRate
    const goal = {
      goalName: goalTitle,
      tasks: tasksWithParticipation,
    };

    // Thêm goal mới vào danh sách goals
    setAllGoals([...allGoals, goal]);

    handleClose(); // Đóng dialog sau khi thêm goal
  };

  const goals = [
    {
      goalName: "Goal 1",
      tasks: [
        {
          name: "Task 1",
          weight: 3,
          specificLabelIndex: 1,
          participationRate: 0.6,
        },
        {
          name: "Task 2",
          weight: 2,
          specificLabelIndex: 2,
          participationRate: 0.4,
        },
      ],
    },
    {
      goalName: "Tìm hiểu về UI/UX",
      tasks: [
        {
          name: "Task 1: Tìm hiểu về UI",
          weight: 4,
          specificLabelIndex: 3,
          participationRate: 0.4,
        },
        {
          name: "Task 2: Tìm hiểu về UX",
          weight: 6,
          specificLabelIndex: 4,
          participationRate: 0.6,
        },
      ],
    },
  ];

  const [allGoals, setAllGoals] = useState(goals);

  useEffect(() => {
    if (selectedLabels.length > 0) {
      const filteredGoals = goals.filter((goal) =>
        goal.tasks.some((task) =>
          selectedLabels.includes(task.specificLabelIndex)
        )
      );
      setAllGoals(filteredGoals);
    } else {
      setAllGoals(goals);
    }
  }, [selectedLabels]);

  const handleCloseCreateGoalCard = (newGoal) => {
    setAllGoals([...allGoals, newGoal]);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: { xs: 5, lg: 3 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: { xs: 1, sm: 1, md: 0, lg: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { sm: "center", xs: "center", md: "flex-start" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h5"
              color="#5051F9"
              display={"inline"}
              sx={{ mr: 1 }}
            >
              UI/UX Course
            </Typography>
            <InfoOutlinedIcon />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", sm: "space-between" },
              width: "100%",
            }}
          >
            <AvatarGroup
              sx={{
                justifyContent: { xs: "center", sm: "flex-start" },
                mb: { xs: 1, sm: 0 },
              }}
            >
              <Avatar alt="Remy Sharp" src={avt1} />
              <Avatar alt="Travis Howard" src={avt2} />
              <Avatar alt="Cindy Baker" src={avt3} />
              <Avatar alt="Agnes Walker" src={avt4} />
              <Avatar alt="Trevor Henderson" src={avt5} />
            </AvatarGroup>
            <Typography variant="body1" color="initial" ml={1}>
              15 Member
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  bgcolor: "#fff",
                  border: "1px solid #D8DDE4",
                  color: "#36475E",
                  mb: { xs: 1, sm: 0 },
                }}
                startIcon={<GroupOutlinedIcon />}
              >
                Add Teammates
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  border: "1px solid #D8DDE4",
                  color: "#fff",
                  mb: { xs: 1, sm: 0 },
                }}
                startIcon={<IosShareOutlinedIcon />}
              >
                Share
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              maxWidth: "40px",
              height: "44px",
              boxSizing: "border-box",
              mb: 1,
            }}
            onClick={handleSortClick}
          >
            <FilterAltOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              width: "44px",
              height: "44px",
              ml: { lg: "16px", md: "16px", sm: "16px", sx: "0px" },
            }}
          >
            <InsertDriveFileOutlinedIcon />
          </Button>
          <Menu
            className="sort-menu"
            anchorEl={sortAnchorEl}
            open={Boolean(sortAnchorEl)}
            onClose={handleSortClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem disableRipple className="sort-menu" sx={{ padding: 0 }}>
              <Sort onSortChange={handleSortChange} />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxSizing: "border-box",
          p: { md: 2, sm: 3, xs: 3 },
        }}
      >
        <Grid
          container
          spacing={{
            md: 3,
            sm: 4,
            xs: 4,
          }}
          sx={{
            boxSizing: "border-box",
          }}
        >
          {allGoals.map((goal, index) => (
            <Grid item xs={12} md={4} sm={12} lg={4} key={index} sx={{}}>
              <GoalCard
                goalName={goal.goalName}
                tasks={goal.tasks}
                onOpenGoalDetailDialog={() => handleOpenGoalDetailDialog(goal)}
              />
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "16px",
                margin: "auto",
              }}
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
            >
              Add Goal
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          alignItems: "center",
          mt: 3,
          bgcolor: "#fff",
          justifyContent: "space-evenly",
          borderRadius: "16px",
        }}
      >
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
          <CircleChart1 />
          <Typography variant="h6" color="#5051F9">
            Done Task
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
          <CircleChart2 />
          <Typography variant="h6" color="#5051F9">
            KPI lost
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          p: 2,
          bgcolor: "#fff",
          borderRadius: "16px",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box
          component="img"
          src={vertical}
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            mb: {
              lg: 0,
              md: 0,
              sm: 2,
              xs: 2,
            },
            objectFit: "fill",
          }}
        ></Box>
        <Box
          component="img"
          src={horizone}
          sx={{
            objectFit: "fill",
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
          }}
        ></Box>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isEditing ? (
                <TextField
                  value={newGoal.goalTitle}
                  title="Goal Title"
                  onChange={handleTitleChange}
                  onBlur={handleTitleBlur}
                  autoFocus
                  fullWidth
                />
              ) : (
                <Typography variant="h5" color="#000" fontWeight={"bold"}>
                  {newGoal.goalTitle}
                </Typography>
              )}
              <IconButton onClick={handleEditClick}>
                <EditIcon />
              </IconButton>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="body1" color="initial">
            Sub title
          </Typography>
        </DialogTitle>
        <DialogContent>
          <NewGoalCard onAddTask={handleAddTaskToNewGoal} />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => {
              handleAddNewGoal();
              handleClose(); // Đóng hộp thoại sau khi tạo mục tiêu
            }}
            bgcolor="#5051F9"
            variant="contained"
            mr={2}
            sx={{ height: "37px", bgcolor: "#5051F9" }}
          >
            Create Goal
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              maxWidth: "100px",
              height: "37px",
              backgroundColor: "#fff",
              border: "1px solid #5051F9",
              color: "#5051F9",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        className="goal-detail-dialog"
        open={openGoalDetailDialog}
        onClose={handleCloseGoalDetailDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5" color="#000" fontWeight={"bold"}>
                {selectedGoal?.goalName}
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
            <IconButton onClick={handleCloseGoalDetailDialog}>
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
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Label
              specificLabelIndex={1}
              sx={{
                display: "inline-block",
                mr: "16px",
                width: "56px",
                height: "20px",
                fontSize: "13px",
              }}
            />
            <Label
              specificLabelIndex={2}
              sx={{
                display: "inline-block",
                width: "56px",
                height: "20px",
                fontSize: "13px",
              }}
            />
          </Stack>
        </DialogTitle>
        <DialogContent>
          <GoalDetail goal={selectedGoal} />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button variant="outlined" sx={{ height: "37px" }}>
            View detail
          </Button>
          <Button
            bgcolor="#5051F9"
            variant="contained"
            mr={2}
            onClick={handleAddTask}
            sx={{ height: "37px", bgcolor: "#5051F9" }}
          >
            Add Task
          </Button>
        </DialogActions>
        {showNewTask && (
          <NewTask
            onClose={handleCloseNewTask}
            onAddTask={handleAddNewTaskToGoal}
          />
        )}
      </Dialog>
    </Box>
  );
};

export default UIUXCourse;
