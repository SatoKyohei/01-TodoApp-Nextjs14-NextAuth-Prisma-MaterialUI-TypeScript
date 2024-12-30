"use client";
import React, { useState } from "react";

const SortToggle = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSort = () => {
        setAnchorEl(null);
    };
    return { anchorEl, handleClick, handleClose, handleSort };
};

export default SortToggle;
