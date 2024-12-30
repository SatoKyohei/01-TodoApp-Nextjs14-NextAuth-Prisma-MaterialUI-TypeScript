import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const Status = ({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <FormControl sx={{justifyContent: "center"}}>
            <RadioGroup
                row
                defaultValue="notStarted"
                name="status-group"
                onChange={onChange}>
                <FormControlLabel
                    value="notStarted"
                    control={<Radio />}
                    label="Not Started"
                />
                <FormControlLabel
                    value="inProgress"
                    control={<Radio />}
                    label="In Progress"
                />
                <FormControlLabel
                    value="done"
                    control={<Radio />}
                    label="Done"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default Status;
