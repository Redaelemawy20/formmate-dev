import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import React from "react";
import MultiPointInterface from "../interfaces/MultiPointInputI";
import Point from "./Point";
// import SendIcon from "@mui/icons-material/Send";
import { Alert } from "@mui/material";

export default function MultiPointInput<T>({
  name: key,
  label,
  value: points = [],
  error,
  onValidate,
  onChange,
}: MultiPointInterface) {
  const handleChange = (id: number, value: string): void => {
    const clonedPoints = [...points];
    clonedPoints[id] = value;
    onChange({ name: key, value: clonedPoints });
    onValidate && onValidate({ name: key, value: clonedPoints });
  };
  const handleDelete = (id: number): void => {
    const clonedPoints = [...points];
    const filtered = clonedPoints.filter((item, index) => {
      return id !== index;
    });
    onChange({ name: key, value: filtered });
    onValidate && onValidate({ name: key, value: filtered });
  };
  const handleAdd = () => {
    const clonedPoints = [...points];
    clonedPoints.push("");
    onChange({ name: key, value: clonedPoints });
    onValidate && onValidate({ name: key, value: clonedPoints });
  };
  return (
    <FormControl margin="normal" sx={{ width: "100%" }}>
      <Box>
        <Button
          variant="contained"
          sx={{ marginRight: 2 }}
          onClick={handleAdd}
          // endIcon={<SendIcon />}
        >
          Add
        </Button>
        Edit {label} Section
      </Box>
      <Stack
        direction="column"
        alignItems="stretch"
        spacing={1}
        gap={1}
        sx={{ margin: 2 }}
      >
        {points && points.length
          ? points.map((point, index) => {
              return (
                <Point
                  id={index}
                  key={index}
                  label={label}
                  onChange={handleChange}
                  onDelete={handleDelete}
                  point={point}
                />
              );
            })
          : `No items added to ${label} section`}
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </FormControl>
  );
}
