import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CheckInBar() {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const [detailRoom, setDetailRoom] = React.useState("");

  const handleChange = (event) => {
    setDetailRoom(event.target.value);
  };

  return (
    <div className="h-[156px] bg-base-100 w-full flex justify-center items-center">
      <div className="h-[76px] w-[1000px] flex justify-between items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DemoItem label="Check In">
              <DatePicker defaultValue={dayjs(new Date())} />
            </DemoItem>
            <div className="self-center">-</div>
            <DemoItem label="Check Out">
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <div className=" flex flex-col w-[240px]">
          <DemoItem label="Rooms & Guests">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="room-label">1 Room, 2 Guests</InputLabel>
                <Select
                  labelId="room"
                  id="room-label"
                  value={detailRoom}
                  label="1 Room, 2 Guests"
                  onChange={handleChange}
                >
                  <MenuItem value={"1 Room, 2 Guests"}>
                    1 Room, 2 Guests
                  </MenuItem>
                  <MenuItem value={"2 Rooms, 4 Guests"}>
                    2 Rooms, 4 Guests
                  </MenuItem>
                  <MenuItem value={"3 Rooms, 6 Guests"}>
                    3 Rooms, 6 Guests
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DemoItem>
        </div>
        <div>
          <button
            type="button"
            className="w-[144px] h-max px-8 py-3 rounded font-sans font-semibold text-orange-500 bg-base-100 border border-orange-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
