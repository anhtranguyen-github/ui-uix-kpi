import {
  Box,
  Button,
  Avatar,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import avatar from "../assets/images/avatar.jpg";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useLocation } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import UserSetting from "../components/UserSetting";

const countries = [
  { code: "VN", name: "Viet Nam" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "FR", name: "France" },
  // Add more countries as needed
];

export default function UserInfo({ chooseBtn }) {
  const [selectedCountry, setSelectedCountry] = useState("VN");
  const [selectedButton, setSelectedButton] = useState(chooseBtn);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleClick = (button) => {
    setSelectedButton(button);
    navigate(`/user-info/${button}`);
  };

  useEffect(() => {
    if (location.pathname.includes("/user-info/")) {
      const pathParts = location.pathname.split("/");
      const activeButton = pathParts[pathParts.length - 1];
      setSelectedButton(activeButton);
    }
  }, [location.pathname]);

  const getButtonStyle = (button) => {
    return selectedButton === button
      ? {
          backgroundColor: "#5051F9",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          border: "1px solid #D8DDE4",
          ...(button === "edit" && {
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }),
          ...(button === "settings" && {
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }),
        }
      : {
          backgroundColor: "#fff",
          color: "#000",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          border: "1px solid #D8DDE4",
          ...(button === "edit" && {
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }),
          ...(button === "settings" && {
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }),
        };
  };

  return (
    <Box>
      <Box mb={2}>
        <Box
          sx={{
            height: "120px",
            background: "linear-gradient(90deg, #5051F9 0%, #23235F 100%)",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            p: 2,
            backgroundColor: "#fff",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
        >
          <Avatar
            src={avatar}
            sx={{
              width: "100px",
              height: "100px",
              mr: 2,
            }}
          ></Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" color="#5051F9">
              Nguyen Hoang Duc
            </Typography>
            <Typography variant="body1" color="initial">
              nguyenhoangduc@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        mb={2}
        sx={{
          display: "flex",
        }}
      >
        <Box sx={getButtonStyle("edit")} onClick={() => handleClick("edit")}>
          <EditIcon /> Edit Profile
        </Box>
        <Box
          sx={getButtonStyle("security")}
          onClick={() => handleClick("security")}
        >
          <AdminPanelSettingsIcon />
          Password & Security
        </Box>
        <Box
          sx={getButtonStyle("setting")}
          onClick={() => handleClick("setting")}
        >
          <SettingsIcon /> App setting
        </Box>
      </Box>

      <Box>
        {selectedButton === "edit" && (
          <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: "16px" }}>
            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-uncontrolled"
                  label="First name"
                  defaultValue="Nguyen minh"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  id="outlined-uncontrolled"
                  defaultValue="Duc"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Email"
                  id="outlined-uncontrolled"
                  defaultValue="nguyenhoangduc@gmail.com"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  id="outlined-uncontrolled"
                  defaultValue={"0999888999"}
                />
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer sx={{}} components={["DatePicker"]}>
                      <DatePicker
                        label="Date of Birth"
                        sx={{ width: "100%" }}
                        value={dayjs("1999-01-01")}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="country-select-label">Country</InputLabel>
                  <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={selectedCountry}
                    label="Country"
                    onChange={handleChange}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button variant="contained">Save</Button>
              <Button
                variant="outlined"
                sx={{ bgcolor: "#fff", color: "#5051F9" }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}
        {selectedButton === "security" && (
          <Box sx={{ p: 4, backgroundColor: "#fff", borderRadius: "16px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alighItems: "center",
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  mx: "auto",
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-uncontrolled"
                  label="Old Password"
                />
              </Box>
              <Box
                sx={{
                  mx: "auto",
                  width: "50%",
                }}
              >
                <TextField
                  fullWidth
                  label="New Password"
                  id="outlined-uncontrolled"
                />
              </Box>
              <Box
                sx={{
                  mx: "auto",
                  width: "50%",
                }}
              >
                <TextField
                  fullWidth
                  label="Confirm Password"
                  id="outlined-uncontrolled"
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button variant="contained">Save</Button>
              <Button
                variant="outlined"
                sx={{ bgcolor: "#fff", color: "#5051F9" }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}
        {selectedButton === "setting" && <UserSetting />}
      </Box>
    </Box>
  );
}
