import BasicButton from "@/app/components/BasicButton";
import TodoLayout from "@/app/components/TodoLayout";
import { BasicButtonType } from "@/app/types/types";
import { Stack } from "@mui/material";

const EditPage = () => {
    const buttons: BasicButtonType[] = [
        { children: "SAVE" },
        { color: "warning", children: "CANCEL" },
    ];

    return (
        <TodoLayout name="DETAILS">
            <Stack direction="row" gap={3}>
                {buttons.map((button) => (
                    // 課題：idを取り込む
                    <BasicButton href={`/todos/3`} color={button.color}>
                        {button.children}
                    </BasicButton>
                ))}
            </Stack>
        </TodoLayout>
    );
};

export default EditPage;
