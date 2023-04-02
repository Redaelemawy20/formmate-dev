import React from "react";
import TextAreaI from "../interfaces/TextAreaI";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
const TextArea = ({
  name,
  label,
  value,
  error,
  onChange,
  onValidate,
  rows = 3,
}: TextAreaI) => {
  return (
    <FormControl margin="normal">
      <TextField
        fullWidth
        label={label}
        name={name}
        value={value ?? ""}
        onChange={(e) => {
          onChange(e.target);
          onValidate && onValidate(e.target);
        }}
        error={Boolean(error)}
        helperText={error}
        multiline
        rows={rows}
      />
    </FormControl>
  );
};

export default TextArea;
