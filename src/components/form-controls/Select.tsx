import React from "react";
import SelectInputI from "./interfaces/SelectInputI";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import BasicSelect from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

export default function Select<T>({
  name,
  label,
  value,
  error,
  onChange,
  onValidate,
  rest,
  valueProp,
  options,
  optionValue,
  allowNone,
}: SelectInputI<T>) {
  const getValueOf = (option: any, v: any, index: number) => {
    return option && typeof option === "object"
      ? (option as any)[v || "id"] || index
      : option;
  };

  return (
    <FormControl margin="normal">
      <InputLabel>{label}</InputLabel>
      <BasicSelect
        fullWidth
        value={value ? value : getValueOf(options[0], valueProp, 0) || "1"}
        name={name}
        error={Boolean(error)}
        onChange={(e) => {
          onChange(e.target as HTMLSelectElement);
          onValidate && onValidate(e.target as HTMLSelectElement);
        }}
      >
        {options.map((option, index) => (
          <MenuItem value={getValueOf(option, valueProp, index)} key={index}>
            {getValueOf(option, optionValue, index)}
          </MenuItem>
        ))}
      </BasicSelect>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
}
