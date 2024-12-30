"use client";
import { FilteredStatusProvider } from "@/app/context/FilteredStatusProvider";
import { TodoProvider } from "@/app/context/TodoProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <FilteredStatusProvider>
            <TodoProvider>{children}</TodoProvider>
        </FilteredStatusProvider>
    );
};

export default Providers;
