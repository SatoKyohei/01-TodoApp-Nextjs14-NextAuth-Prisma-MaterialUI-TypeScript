import { useFilteredStatusContext } from "@/app/context/FilteredStatusProvider";
import React from "react";

const StatusChange = () => {
    const { filteredStatus, setFilteredStatus } = useFilteredStatusContext();
    
    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredStatus(e.target.value);
    };

    return { filteredStatus, handleStatusChange };
};

export default StatusChange;
