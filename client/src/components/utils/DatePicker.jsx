import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerComponent({
  name,
  value,
  minDate,
  maxDate,
  onChange,
}) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name={name}
          className="w-full rounded-md border border-gray-100 bg-white text-sm"
          format="dd, DD MMMM YYYY"
          value={value ? dayjs(value) : null}
          minDate={minDate ? dayjs(minDate) : null}
          maxDate={maxDate ? dayjs(maxDate) : null}
          onChange={(newValue) => {
            onChange({ target: { name, value: newValue } });
          }}
          InputLabelProps={{
            sx: { color: "red", "&.Mui-focused": { color: "green" } },
          }}
          slotProps={{
            layout: {
              sx: {
                ".MuiPickersMonth-monthButton": {
                  color: "#f8bbd0",
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: "#e91e63",
                  border: "1px solid",
                  backgroundColor: "#880e4f",
                },
              },
            },
            textField: {
              sx: {
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                  "&:hover fieldset": {
                    borderColor: "#e76b39",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#e76b39",
                  },
                  "& label": {
                    borderColor: "#e76b39",
                    fontSize: "10px",
                  },
                },
              },
            },
            day: {
              sx: {
                "&.MuiPickersDay-root.Mui-selected": {
                  backgroundColor: "#e76b39",
                  color: "white",
                  borderRadius: 0,
                  borderWidth: 1,
                },
                "&.MuiPickersDay-root.Mui-day": {
                  backgroundColor: "#e76b39",
                  color: "white",
                  borderRadius: 0,
                  borderWidth: 1,
                },
                ":hover": {
                  color: "black",
                  backgroundColor: "#f7f7fb",
                  borderRadius: 0,
                  borderWidth: 1,
                },
                "&.MuiPickersDay-today": {
                  color: "black",
                  borderRadius: 0,
                  border: "2px solid #e76b39",
                },
              },
            },
            year: {
              sx: {
                "&.Mui-selected": {
                  color: "#e91e63",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "#e76b39",
                },
                "&.Mui-year": {
                  color: "#e76b39",
                  backgroundColor: "#e76b39",
                },
                "&.MuiPickersYear-yearDisabled": {
                  color: "#ccc",
                },
                "&:hover": {
                  backgroundColor: "#f8bbd0",
                  color: "#880e4f",
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
}
