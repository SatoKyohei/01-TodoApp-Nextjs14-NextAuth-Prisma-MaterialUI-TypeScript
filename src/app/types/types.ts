import { ReactNode } from "react";

export type TodoInfo = {
    id: number;
    title: string;
    description: string;
    status: "notStarted" | "inProgress" | "done";
    due: Date;
    comments: string[]
};

export type BasicButtonType = {
    type?: "submit";
    size?: "small" | "medium" | "large";
    variant?: "text" | "contained" | "outlined";
    color?:
        | "secondary"
        | "success"
        | "primary"
        | "warning"
        | "error"
        | "inherit"
        | "info";
    children: ReactNode;
    sx?: object;
    onClick?: () => void;
    href?: string;
    isDrawerOpen?: boolean;
};

export type MenuButtonType = {
    type?: "submit";
    size?: "small" | "medium" | "large";
    variant?: "text" | "contained" | "outlined";
    color?:
        | "secondary"
        | "success"
        | "primary"
        | "warning"
        | "error"
        | "inherit"
        | "info";
    children: ReactNode;
    sx?: object;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    id?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaHaspopup?: boolean;
};
