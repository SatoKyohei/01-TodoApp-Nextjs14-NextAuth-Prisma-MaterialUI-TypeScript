import { BasicButtonType } from "@/app/types/types";
import { Button } from "@mui/material";

const BasicButton = ({
    type = "submit",
    size = "small",
    variant = "contained",
    color = "primary",
    children,
    sx,
    href,
    onClick,
}: BasicButtonType) => {
    return (
        <Button
            href={href}
            type={type}
            size={size}
            variant={variant}
            color={color}
            sx={sx}
            onClick={onClick}>
            {children}
        </Button>
    );
};

export default BasicButton;
