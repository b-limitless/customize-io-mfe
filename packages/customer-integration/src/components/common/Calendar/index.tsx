import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';
import { styled } from '@mui/material';
import { Props } from '../../Appointment/SelectDateAndTime/selected-date.types';

// const style = {
//     fontFamily: 'Poppins',
//     fontWeight: 'bold',
//     '& .MuiPickersDay-daySelected': {
//       background: 'red',
//       fontSize: '20px',
//       color: 'white',
//     },
//   };

const calendarSx = {
    "& .MuiDateCalendar-root ": {
        // fontFamily: "Poppins"
    },
    "& .MuiPickersDay-dayWithMargin": {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "0.45px", 
        
    },
    "& .MuiDayPicker-weekContainer": { margin: "1px" }, 
    "& .MuiDayCalendar-weekDayLabel": {
        // display:"no,ne"
        fontFamily: "Poppins",
        color: "#000",
        
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "0.45px"
    }, 
    "& .MuiPickersCalendarHeader-label ": {
        fontFamily: "Poppins"
    },
    "& .Mui-selected": {
        color: "#FFF", 
        borderRadius: "4px", 
        backgroundColor: "#333"
    },
    "& .MuiPickersDay-root.Mui-selected ": {
        backgroundColor: "#333 !important"
    },
    "& .MuiPickersYear-yearButton": {
        fontFamily: "Poppins"
    }
  };


export default function DateCalendarValue({setShowModel, value, setValue}: Props) {
    

   
    const dataOnChangeHalde = (newValue:any) => {
        setValue(dayjs(newValue));
        setShowModel(false);
    }

    // console.log(value, value)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DateCalendar value={value} onChange={(newValue:any) => dataOnChangeHalde(newValue)} sx={calendarSx} />


        </LocalizationProvider>
    );
}