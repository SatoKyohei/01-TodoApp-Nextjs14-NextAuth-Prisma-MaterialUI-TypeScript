"use client";
import BasicButton from "@/app/components/BasicButton";
import CommentForm from "@/app/components/CommentForm";
import TodoLayout from "@/app/components/TodoLayout";
import { BasicButtonType } from "@/app/types/types";
import { Drawer, Stack } from "@mui/material";
import { useState } from "react";

// ダミーデータ
const buttons: BasicButtonType[] = [
    // 課題：editのidを取り込む
    { color: "success", children: "EDIT", href: `/todos/3/edit` },
    { color: "error", children: "DELETE", href: `/todos` },
];

// ダミーデータ
const comments = ["コメント1", "コメント2", "コメント3"];

const DetailPage = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <TodoLayout name="DETAILS">
            <Stack direction="row" gap={3}>
                {buttons.map((button: BasicButtonType) => (
                    // 課題：keyが適当
                    <BasicButton key={button.href} color={button.color} href={button.href}>
                        {button.children}
                    </BasicButton>
                ))}
                <BasicButton color="inherit" onClick={handleDrawerToggle}>
                    COMMENTS
                </BasicButton>
            </Stack>

            <BasicButton color="inherit" href={`/todos`}>
                Close
            </BasicButton>

            <Drawer open={open} onClose={handleDrawerToggle} anchor="right">
                <Stack direction="column" width={300} padding={2}>
                    <CommentForm comments={comments} />
                </Stack>
            </Drawer>
        </TodoLayout>
    );
};

export default DetailPage;
