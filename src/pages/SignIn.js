import * as React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import img1 from "../assets/images/img-1.jpg";
import "../styles/SignIn.css";
import { useTheme } from "@mui/material/styles";
export default function SignIn() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          p: 4,
          height: "100vh",
          bgcolor: theme.palette.background.default,
        }}
      >
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: theme.palette.text.third, fontWeight: "bold" }}
            >
              HERON
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "80%",
                gap: 2,
                mt: 3,
                mx: "auto",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Sign In
                </Typography>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  Please login to continue to your account.
                </Typography>
              </Box>

              <TextField
                fullWidth
                id="outlined-uncontrolled"
                label="Email"
                defaultValue="minhducnguyen@gmail.com"
              />

              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button fullWidth variant="contained">
                  Sign In
                </Button>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      borderBottom: "1px solid", // Add border bottom style
                      borderColor: "#D9D9D9", // Use theme palette for color
                    }}
                  />
                </Box>
                <Typography sx={{ marginX: 3 }}>or</Typography>
                <Box sx={{ flex: 1, textAlign: "right" }}>
                  <Box
                    sx={{
                      borderBottom: "1px solid", // Add border bottom style
                      borderColor: "#D9D9D9", // Use theme palette for color
                    }}
                  />
                </Box>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderColor: "#5051F9",
                }}
              >
                Continue with Google{" "}
                <img
                  alt="Google logo"
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  style={{ width: "17px", height: "17px", marginLeft: "10px" }}
                />
              </Button>
              <Box>
                <Typography
                  fullWidth
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                  }}
                >
                  Need an account?{" "}
                  <Link
                    to="/signup"
                    sx={{
                      color: theme.palette.text.third,
                    }}
                  >
                    Create one
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item  xs={12} lg={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img1}
              alt="Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                borderRadius: "15px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
