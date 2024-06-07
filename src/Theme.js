import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    text: {
      primary: "#232323",
      secondary: "#969696",
      third: "#5051F9",
    },
    button: {
      choosed: {
        backgroundColor: "#5051F9",
        color: "#fff",
        border: "1px solid #5051F9",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "#fff",
          color: "#5051F9",
        },
      },
      unchoosed: {
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "rgba(80, 81, 249, 0.1)",
          color: "#5051F9",
        },
      },
    },
    btnChild: {
      choosed: {
        backgroundColor: "#5051F9",
        color: "#fff",
        border: "1px solid #5051F9",
        "&:hover": {
          backgroundColor: "rgba(80, 81, 249, 0.1)",
          color: "#5051F9",
          border: "1px solid #5051F9",
        },
      },
      unchoosed: {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "0px 10px 10px 10px",
        border: "none",
        borderLeft: `2px solid #eee`,
        "&:hover": {
          backgroundColor: "rgba(80, 81, 249, 0.1)",
          color: "#5051F9",
          border: "none",
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "50px",
          borderRadius: "10px",
          boxShadow: `none`,
          backgroundColor: "#5051F9",
          padding: "6px 16px",
          color: "#fff",
          border: "1px solid #5051F9",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#fff",
            color: "#5051F9",
          },
          fontSize: "16px", // Default font size
          "@media (max-width:600px)": {
            fontSize: "12px", // Font size for small screens
          },
          "@media (min-width:600px) and (max-width:960px)": {
            fontSize: "14px", // Font size for medium screens
          },
          "@media (min-width:960px)": {
            fontSize: "16px", // Font size for large screens
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Example: setting border-radius for Input component
        },
      },
    },
    // Define other components and their style overrides as needed
  },
});

export default Theme;
