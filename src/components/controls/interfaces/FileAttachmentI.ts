import { FormEvent } from "react";
import HandleChange from "../../../ts/common/HandleChange";
export default interface FilesAttachmentI {
  onAttach: (e: FormEvent) => void;
  onDelete: (id: number) => void;
  onValidate?: HandleChange;
  name: string;
  error?: string;
  label?: string;
  btnTxt?: string;
  Files: (File | { id?: number; name?: string; orginalName?: string })[];
}
