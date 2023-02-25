// import { AiOutlineDelete } from "react-icons/ai";
import { PointInterface } from "../interfaces/MultiPointInputI";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React from "react";
export default function Point({
  point,
  onChange,
  onDelete,
  label,
  id = 0,
}: PointInterface) {
  return (
    <Stack direction={"row"} alignItems="center" gap={1}>
      <Box sx={{ flexGrow: 2 }}>
        <TextField
          value={point}
          label={label ?? "point"}
          fullWidth
          onChange={(e) => {
            onChange(id, e.target.value);
          }}
        />
      </Box>

      {/* <AiOutlineDelete size={20} onClick={() => onDelete(id)} /> */}
    </Stack>
  );
}
