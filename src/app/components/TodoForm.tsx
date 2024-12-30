import { TextField, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const TodoForm = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Typography variant="h6" component="h2">
                {children}
            </Typography>
            <TextField id="title" value="タイトル" />
            <TextField id="description" value="詳細" />
        </>
    );
};

export default TodoForm;
