import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <AppBar component="header" position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" component="h2">
                    <Link href={"/"}>ToDoアプリ</Link>
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Link href={"/"}>
                        <Image
                            width={50}
                            height={50}
                            alt="profile_icon"
                            src={"/default_icon.png"}
                        />
                    </Link>
                    <Link href={"/"}>ログアウト</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
