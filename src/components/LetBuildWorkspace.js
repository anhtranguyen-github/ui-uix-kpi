import { Card, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import img from "../assets/images/background-2.png";
import "../styles/LetBuildWorkspace.css";
import { useState } from "react";
export default function LetBuildWorkspace({
  setShowLetBuildWorkspace,
  handleContinue,
}) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceDescription, setWorkspaceDescription] = useState("");

  const handleContinueClick = () => {
    const newWorkspace = {
      title: workspaceName,
      description: workspaceDescription,
      status: 0,
      dueToday: 0,
      dueThisWeek: 0,
    };
    handleContinue(newWorkspace);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        height: "650px",
        p: {
          lg: 0,
          md: 0,
          sm: 1,
          xs: 1,
        },
      }}
    >
      <Box
        sx={{
          padding: { lg: 4, md: 3, sm: 2, xs: 1 },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ mb: { lg: 2, md: 1, sm: 1, xs: 1 } }}
          >
            Let’s build a Workspace
          </Typography>
          <Typography
            variant="body1"
            color="#969696"
            sx={{ mb: { lg: 4, md: 4, sm: 2, xs: 2 } }}
          >
            Boost your productivity by making it easier for everyone to access
            boards in one location
          </Typography>
        </Box>
        <Box
          component="img"
          src={img}
          sx={{
            width: "95%",
            height: "10%",
            flex: 1,
            objectFit: "cover",
            margin: "0px auto",
            borderRadius: "10px",
            mb: 2,
            display: { lg: "none", md: "none", sm: "block", xs: "block" },
          }}
        ></Box>
        <Box
          sx={{
            mb: { lg: 4, md: 4, sm: 2, xs: 2 },
          }}
        >
          <Typography variant="button" display="block" mb={1} gutterBottom>
            Workspace name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter workspace name"
            variant="outlined"
            fullWidth
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
        </Box>
        <Box mb={4}>
          <Typography variant="button" display="block" mb={1} gutterBottom>
            Workspace description
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a description to your workspace"
            rows={7}
            multiline
            value={workspaceDescription}
            onChange={(e) => setWorkspaceDescription(e.target.value)}
          />
        </Box>

        <Button fullWidth variant="contained" onClick={handleContinueClick}>
          Continue
        </Button>
      </Box>
      <Box
        component="img"
        src={img}
        sx={{
          width: "35%",
          flex: 1,
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: { sm: "none", xs: "none", lg: "block", md: "block" },
        }}
      ></Box>
    </Card>
  );
}
