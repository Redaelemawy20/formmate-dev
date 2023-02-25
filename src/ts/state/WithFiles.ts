import UploadedFile from "../models/File";

export  interface AttachedFiles {
  Files: UploadedFile[];
  deletedFiles: UploadedFile[];
}
export default interface WithFiles {
  AttachedFiles?: AttachedFiles
}