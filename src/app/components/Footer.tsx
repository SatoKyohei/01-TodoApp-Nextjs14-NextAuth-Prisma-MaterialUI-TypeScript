import { AppBar, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <AppBar component="footer" position="static">
            <Stack sx={{ textAlign: "center", padding: "5px 0" }}>
                © 2024 Example Inc. ｜ All Rights Reserved.
            </Stack>
        </AppBar>
    );
};

export default Footer;
