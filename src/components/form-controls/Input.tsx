import InputI from "./interfaces/InputI";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import React from "react";
const Input = ({
  name,
  label,
  value,
  error,
  onChange,
  onValidate,
  rest = {},
}: InputI) => {
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
        {...rest}
        helperText={error}
      />
    </FormControl>
  );
};

export default Input;
