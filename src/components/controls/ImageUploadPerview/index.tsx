import React from "react";

import Stack from "@mui/system/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import ImageUploadPerviewI from "../interfaces/ImageUploadPerviewI";
const ImageUploadPerview: React.FunctionComponent<ImageUploadPerviewI> = ({
  onUpload,
  error,
  label,
  image,
  alt,
}) => {
  return (
    <FormControl margin="normal">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar src={image} sx={{ width: 200, height: 200 }}>
          {alt}
        </Avatar>
        <Button variant="contained" component="label">
          {label}
          <input
            type="file"
            hidden
            name={`img-input${label}`}
            id={`img-input${label}`}
            onChange={(e) => onUpload(e)}
          />
        </Button>
      </Stack>
    </FormControl>
  );
};

export default ImageUploadPerview;
