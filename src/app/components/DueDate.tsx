"use client"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

const DueDate = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                format="MM/DD"
                label="Due Date"
                sx={{ maxWidth: "180px" }}
            />
        </LocalizationProvider>
    );
};

export default DueDate;
