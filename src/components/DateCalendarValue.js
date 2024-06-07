import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/system";

export default function DateCalendarValue({ defaultValue, onChange }) {
  const [value, setValue] = React.useState(dayjs(defaultValue));

  const handleDateChange = (newValue) => {
    setValue(newValue);
    onChange(newValue); // Gọi callback onChange để truyền giá trị ngày đã chọn về component cha
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: "white",
        position: "fixed",
        top: "30%",
        left: "73%",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar
              value={value}
              onChange={handleDateChange}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
