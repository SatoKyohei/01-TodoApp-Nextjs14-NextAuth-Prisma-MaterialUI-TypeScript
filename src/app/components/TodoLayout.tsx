import DueDate from "@/app/components/DueDate";
import Status from "@/app/components/Status";
import TodoForm from "@/app/components/TodoForm";
import StatusChange from "@/app/hooks/StatusChange";
import { Container, Stack } from "@mui/material";
import React, { ReactNode } from "react";

type TodoLayoutProps = {
    name: string;
    children: ReactNode;
};

const TodoLayout = ({ name, children }: TodoLayoutProps) => {
    const { filteredStatus, handleStatusChange } = StatusChange();
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                paddingY: 5,
            }}>
            <TodoForm>{name}</TodoForm>
            <Stack direction="row" justifyContent="space-between">
                <Status onChange={handleStatusChange}/>
                <DueDate />
            </Stack>
            {children}
        </Container>
    );
};

export default TodoLayout;
