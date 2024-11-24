import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Slice/todoSlice";

function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim()) {
      // Ensure text is not empty before dispatching
      dispatch(addTask(text));
      setText(""); // Clear input after adding task
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 2, fontSize: "1.5rem" }}>Enter Task:</Typography>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text} // Bind value to state
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "white", // Hover border color
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Focused border color
              },
            },
            "& .MuiInputLabel-root": {
              color: "white", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // Focused label color
            },
            input: {
              color: "white", // Text color inside the input
            },
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ padding: "6px 16px", fontSize: "0.875rem" }}
        onClick={handleAddTask} // Call the function on click
      >
        Add Task
      </Button>
    </Box>
  );
}

export default Header;
