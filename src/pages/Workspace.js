import React, { useState } from "react";
import { Box, Typography, Container, Card, Dialog, Grid } from "@mui/material";
import WorkspaceCard from "../components/WorkspaceCard";
import NewBoardCard from "../components/NewBoardCard";
import AllBackgroundCard from "../components/AllBackgroundCard"; // Import the component
import "../styles/NewBoard.css";
import LetBuildWorkspace from "../components/LetBuildWorkspace";
export default function Workspace() {
  const [open, setOpen] = useState(false);
  const [showAllBackgroundCard, setShowAllBackgroundCard] = useState(false);
  const [showLetBuildWorkspace, setShowLetBuildWorkspace] = useState(false);
  const [workspaceCardsData, setWorkspaceCardsData] = useState([
    {
      title: "UI/UX course",
      description: "This is a UI/UX course.",
      status: 80,
      dueToday: 2,
      dueThisWeek: 5,
    },
    {
      title: "Java Udemy course",
      description: "This is a Java Udemy course.",
      status: 50,
      dueToday: 1,
      dueThisWeek: 3,
    },
    {
      title: "30 kanji a day",
      description: "This is a 30 kanji a day.",
      status: 90,
      dueToday: 0,
      dueThisWeek: 2,
    },
  ]);
  const handleContinue = (newWorkspace) => {
    setShowLetBuildWorkspace(false);
    setOpen(false); // Close the NewBoardCard dialog
    setWorkspaceCardsData([...workspaceCardsData, newWorkspace]);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowAllBackgroundCard(false); // Reset the state when closing
  };
  const handleCloseBackground=()=>{
    setShowAllBackgroundCard(false);
  }

  return (
    <div>
      <Container>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Your Workspace boards
          </Typography>
          <Grid
            container
            spacing={{
              lg: 2,
              md: 3,
              sm: 4,
              xs: 5,
            }}
          >
            {workspaceCardsData.map((workspaceCardData, index) => (
              <Grid item xs={12} md={4} sm={6} key={index}>
                <WorkspaceCard {...workspaceCardData} />
              </Grid>
            ))}
            <Grid item xs={12} md={4} sm={6}>
              <Card
                sx={{
                  width: "100%",
                  height: "179px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px",
                  background: "#fff",
                  cursor: "pointer",
                  maxWidth: "345px",
                  margin: "auto",
                }}
                onClick={handleClickOpen} // open dialog on click
              >
                <Typography variant="h5" sx={{ mb: 2, color: "#5051F9" }}>
                  Create workspace
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "column", xs: "row" },
          }}
        >
          <NewBoardCard
            handleClose={handleClose}
            setShowAllBackgroundCard={setShowAllBackgroundCard}
            showAllBackgroundCard={showAllBackgroundCard}
            setShowLetBuildWorkspace={setShowLetBuildWorkspace} // Pass down the state setter
          />
          {showAllBackgroundCard && <AllBackgroundCard onClose={handleCloseBackground}/>}
        </Box>
      </Dialog>

      {showLetBuildWorkspace && (
        <Dialog
          className="dialog-let-build-workspace"
          open={showLetBuildWorkspace}
          onClose={handleClose}
        >
          <LetBuildWorkspace
            setShowLetBuildWorkspace={setShowLetBuildWorkspace}
            handleContinue={handleContinue}
          />
        </Dialog>
      )}
    </div>
  );
}
