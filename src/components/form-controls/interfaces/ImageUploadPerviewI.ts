import { FormEvent, ReactNode } from "react";
export default interface ImageUploadPerviewI {
  onUpload: (e: FormEvent) => void;
  error?: boolean | undefined;
  label: string;
  image: string | undefined;
  alt?: string;
}
