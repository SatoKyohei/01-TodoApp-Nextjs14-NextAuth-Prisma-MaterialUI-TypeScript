import { MenuButtonType } from "@/app/types/types";
import { Button } from "@mui/material";

const MenuButton = ({
    type = "submit",
    size = "small",
    variant = "contained",
    color = "primary",
    children,
    sx,
    onClick,
    id,
    ariaControls,
    ariaExpanded,
    ariaHaspopup,
}: MenuButtonType) => {
    return (
        <Button
            type={type}
            size={size}
            variant={variant}
            color={color}
            sx={sx}
            onClick={onClick}
            id={id}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
            aria-haspopup={ariaHaspopup}>
            {children}
        </Button>
    );
};

export default MenuButton;
