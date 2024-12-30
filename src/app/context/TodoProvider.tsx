"use client";

import { TodoInfo } from "@/app/types/types";
import { createContext, useContext, useState } from "react";

type TodoContextType = {
    todos: TodoInfo[];
    setTodos: React.Dispatch<React.SetStateAction<TodoInfo[]>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<TodoInfo[]>([]);
    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContextはTodoProviderによって使われています。");
    }
    return context;
};
