import BasicButton from "@/app/components/BasicButton";
import TodoLayout from "@/app/components/TodoLayout";

const CreatePage = async () => {

    return (
        <TodoLayout name="CREATE">
            <BasicButton href={`/todos`}>CREATE</BasicButton>
            <BasicButton color="inherit" href={`/todos`}>Cancel</BasicButton>
        </TodoLayout>
    );
};

export default CreatePage;
