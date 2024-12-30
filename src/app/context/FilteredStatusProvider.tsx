"use client";
import React, { createContext, useContext, useState } from "react";

type FilteredStatusContextType = {
    filteredStatus: string;
    setFilteredStatus: React.Dispatch<React.SetStateAction<string>>;
};

const FilteredStatusContext = createContext<
    FilteredStatusContextType | undefined
>(undefined);

export const FilteredStatusProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [filteredStatus, setFilteredStatus] = useState<string>("notStarted");
    return (
        <FilteredStatusContext.Provider
            value={{ filteredStatus, setFilteredStatus }}>
            {children}
        </FilteredStatusContext.Provider>
    );
};

export const useFilteredStatusContext = () => {
    const context = useContext(FilteredStatusContext);
    if (!context) {
        throw new Error("useTodoContextはTodoProviderによって使われています。");
    }
    return context;
};
