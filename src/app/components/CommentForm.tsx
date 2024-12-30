import BasicButton from "@/app/components/BasicButton";
import { ChatBubble } from "@mui/icons-material";
import { List, ListItem, TextField, Typography } from "@mui/material";

const CommentForm = ({ comments }: { comments: string[] }) => {
    return (
        <>
            <Typography
                variant="h6"
                component="h3"
                sx={{ textAlign: "center" }}>
                Comments
            </Typography>
            <TextField
                multiline
                variant="outlined"
                size="small"
                sx={{ marginY: 2 }}
                placeholder="Please Type Your Comment..."
            />
            <BasicButton sx={{ marginBottom: 2 }} >Add</BasicButton>
            <List>
                {/* 課題：文字の折り返しができていない */}
                {comments.map((comment) => (
                    <ListItem>
                        <ChatBubble sx={{ marginRight: 1 }} />
                        {comment}
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default CommentForm;
