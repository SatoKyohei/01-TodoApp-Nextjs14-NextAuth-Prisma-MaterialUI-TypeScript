import { TodoInfo } from "@/app/types/types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const TodoCard = ({ todo }: { todo: TodoInfo }) => {
    return (
        <Card sx={{ width: 230, maxHeight: 230 }}>
            <Link href={`/todos/${todo.id}`}>
                <CardMedia
                    component="img"
                    alt="random img"
                    image="https://picsum.photos/800"
                    sx={{ height: 100 }}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {todo.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}>
                        {todo.description}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
};

export default TodoCard;
