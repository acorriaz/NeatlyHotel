import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import MinusCircleIcon from "@heroicons/react/24/outline/MinusCircleIcon";

export default function CheckInBar() {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const [roomCounter, setRoomCounter] = useState(1);
  const [guestCounter, setGuestCounter] = useState(2);

  const [roomDetail, setRoomDetail] = useState(
    `${roomCounter} room, ${guestCounter} guest`
  );

  function handleRoom(event) {
    setRoomDetail(event.target.value);
  }

  return (
    <div className="h-[170px] bg-base-100 w-full flex justify-center items-center border-t-2 border-t-gray-200">
      <div className="h-[90px] w-[1000px] flex justify-between items-end">
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
        <div className=" flex flex-col w-[240px] gap-5">
          {/* <DemoItem select label="Select">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="room-label">{`${roomCounter} room, ${guestCounter} guest`}</InputLabel>
                <Select
                  labelId="room-label"
                  id="room-label"
                  label="Rooms and Guests"
                  onChange={handleRoom}
                  value={roomDetail}
                >
                  <div className="w-[240] h-[96px] flex flex-col justify-center items-center">
                    <div className="flex justify-between w-[240px] h-[40px] px-[16px] py-[8px]">
                      <p>Room</p>
                      <div className="w-[78px] h-[24px] flex justify-between">
                        <button
                          onClick={() => {
                            if (roomCounter > 0) {
                              setRoomCounter(roomCounter - 1);
                            }
                          }}
                        >
                          <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                        </button>
                        <p>{roomCounter}</p>
                        <button
                          onClick={() => {
                            setRoomCounter(roomCounter + 1);
                          }}
                        >
                          <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between w-[240px] h-[40px] px-[16px] py-[8px]">
                      <p>Guest</p>
                      <div className="w-[78px] h-[24px] flex justify-between">
                        <button
                          onClick={() => {
                            if (guestCounter > 0) {
                              setGuestCounter(guestCounter - 1);
                            }
                          }}
                        >
                          <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                        </button>
                        <p>{guestCounter}</p>
                        <button
                          onClick={() => {
                            setGuestCounter(guestCounter + 1);
                          }}
                        >
                          <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Select>
              </FormControl>
            </Box>
          </DemoItem> */}
          <Accordion className="w-[240] h-[96px] flex flex-col justify-center items-center">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              label="Rooms and Guests"
              className="flex justify-between"
            >
              {`${roomCounter} room, ${guestCounter} guest`}
            </AccordionSummary>
            <AccordionDetails className="flex justify-between w-[240px] h-[40px] px-[16px] py-[8px]">
              <p>Room</p>
              <div className="w-[78px] h-[24px] flex justify-between">
                <button
                  onClick={() => {
                    if (roomCounter > 0) {
                      setRoomCounter(roomCounter - 1);
                    }
                  }}
                >
                  <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
                <p>{roomCounter}</p>
                <button
                  onClick={() => {
                    setRoomCounter(roomCounter + 1);
                  }}
                >
                  <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
              </div>
            </AccordionDetails>
            <AccordionDetails className="flex justify-between w-[240px] h-[40px] px-[16px] py-[8px]">
              <p>Guest</p>
              <div className="w-[78px] h-[24px] flex justify-between">
                <button
                  onClick={() => {
                    if (guestCounter > 0) {
                      setGuestCounter(guestCounter - 1);
                    }
                  }}
                >
                  <MinusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
                <p>{guestCounter}</p>
                <button
                  onClick={() => {
                    setGuestCounter(guestCounter + 1);
                  }}
                >
                  <PlusCircleIcon className="w-[15px] h-[15px] stroke-orange-500" />
                </button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="flex h-[76px] items-end ">
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
