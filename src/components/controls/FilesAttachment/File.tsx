import React from "react";
// import styled from "styled-components";

import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
// import DeleteIcon from "@mui/icons-material/Delete";

// import FilePreviewer from "react-file-previewer";
const File = ({
  fileName,
  onDelete,
  id,
  originalName,
}: {
  id: number;
  fileName: string;
  onDelete: (id: number) => void;
  originalName: string;
}) => {
  return (
    <Badge
      // badgeContent={
      //   <DeleteIcon
      //     fontSize={"small"}
      //     style={{ cursor: "pointer" }}
      //     onClick={() => onDelete(id)}
      //   />
      // }
      color="secondary"
    >
      <Chip label={fileName} variant="outlined" />
    </Badge>
  );
};

export default File;
