import React from "react";
import File from "./File";
import FileAttachmentI from "../interfaces/FileAttachmentI";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Alert } from "@mui/material";

const FilesAttachment = ({
  label = "Attach Files",
  btnTxt = "Upload Files",
  onValidate,
  name,
  error,
  Files,
  onAttach,
  onDelete,
}: FileAttachmentI) => {
  return (
    <FormControl margin="normal">
      <FormLabel>{label}</FormLabel>
      <Button variant="contained" component="label">
        {btnTxt}
        <input
          type="file"
          hidden
          onChange={(e) => {
            onAttach(e);
            onValidate && onValidate({ name, value: Files });
          }}
          multiple
        />
      </Button>
      <Stack
        direction="row"
        spacing={2}
        flexWrap={"wrap"}
        sx={{ gap: 1.5 }}
        margin={3}
      >
        {Files.map((file, index) => (
          <File
            key={index}
            fileName={file.name as string}
            originalName={
              "orginalName" in file ? (file.orginalName as string) : ""
            }
            id={index}
            onDelete={() => {
              onDelete(index);
              onValidate && onValidate({ name, value: Files });
            }}
          />
        ))}
      </Stack>
      {error && <Alert severity="error">{error}</Alert>}
    </FormControl>
  );
};

export default FilesAttachment;
