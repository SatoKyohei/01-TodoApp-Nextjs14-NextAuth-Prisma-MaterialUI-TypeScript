"use client";
import MenuButton from "@/app/components/MenuButton";
import Status from "@/app/components/Status";
import TodoCard from "@/app/components/TodoCard";
import { useTodoContext } from "@/app/context/TodoProvider";
import SortToggle from "@/app/hooks/SortToggle";
import StatusChange from "@/app/hooks/StatusChange";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

const Todos = () => {
    const { todos, setTodos } = useTodoContext();
    const { anchorEl, handleClick, handleClose, handleSort } = SortToggle();
    const { filteredStatus, handleStatusChange } = StatusChange();
    const open = Boolean(anchorEl);

    const filteredTodos = todos.filter(
        (todo) => todo.status === filteredStatus
    );

    const fetchAllTodo = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
            cache: "no-store",
        });
        const data = await res.json();
        setTodos(data.posts);
    };

    // 課題：CSRだから初回レンダリングが遅い
    useEffect(() => {
        fetchAllTodo();
    }, []);

    return (
        <Container>
            {/* 課題：上下の余白が調整できないので後で調査 */}
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            margin: 2,
                            padding: 1,
                            display: "inline-block",
                            borderRadius: 3,
                        }}>
                        TODO LIST
                    </Typography>

                    <Status onChange={handleStatusChange} />

                    <Stack direction="row">
                        <MenuButton
                            id="sort-button"
                            aria-controls="sort-menu"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={handleClick}
                            variant="text"
                            sx={{
                                marginLeft: 5,
                            }}>
                            SORT
                            <ExpandMoreIcon sx={{ display: "inline-block" }} />
                        </MenuButton>
                    </Stack>
                    {/* 課題：いろんなクローズの方法を実装 */}
                    {/* 課題：昇順・降順のロジック実装 */}
                    <Menu
                        id="sort-menu"
                        open={open}
                        anchorEl={anchorEl}
                        MenuListProps={{ "aria-labelledby": "sort-button" }}
                        onClose={handleClose}>
                        <MenuItem onClick={handleSort}>Title</MenuItem>
                        <MenuItem onClick={handleSort}>Due</MenuItem>
                    </Menu>
                </Stack>
                <Link href={"/todos/create"}>CREATE</Link>
            </Stack>
            <Stack
                direction="row"
                gap={3}
                useFlexGap
                mt={3}
                sx={{
                    flexWrap: "wrap",
                    paddingX: 2,
                    justifyContent: "flex-start",
                }}>
                {filteredTodos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
            </Stack>
        </Container>
    );
};

export default Todos;
