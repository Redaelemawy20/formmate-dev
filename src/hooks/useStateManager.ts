import { Dispatch, SetStateAction, useCallback, useState } from "react";
import HandleChange from "../ts/common/HandleChange";
import HandleFileUpload, {
  HandleDeleteFile,
} from "../ts/common/HandleFileUpload";
import Translatable, { Lang } from "../ts/common/Translatable";
import { AttachedFiles } from "../ts/state/WithFiles";
import { log } from "console";

const useStateManager = <T>(
  data: T
): {
  state: T;
  lang: Lang;
  setState: Dispatch<SetStateAction<T>>;
  setLang: Dispatch<SetStateAction<Lang>>;
  handleChange: HandleChange;
  handleTranslatableChange: HandleChange;
  handleImageUpload: HandleFileUpload<T>;
  handleAttachedFileUpload: HandleFileUpload<T>;
  handleDeleteFile: HandleDeleteFile<T>;
  handleMultiSelectChange: HandleChange;
} => {
  const [state, setState] = useState<T>(data);
  const [lang, setLang] = useState<Lang>("en");
  const handleChange = useCallback<HandleChange>(({ name, value }) => {
    setState((prev) => ({ ...prev, [name]: value }));
    // setState({ ...state, [name]: value });
  }, []);
  const handleTranslatableChange: HandleChange = ({ name, value }): void => {
    const translatableValue = {
      ...((state["content" as keyof T] as Translatable<any>) || {
        en: {},
        ar: {},
      }),
    };
    translatableValue[lang][name] = value;
    setState({ ...state, content: translatableValue });
  };
  const handleImageUpload: HandleFileUpload<T> = <K extends keyof T>(
    fileInput: HTMLFormElement,
    file: K
  ) => {
    if (fileInput.files) {
      const [uploadedFile] = fileInput.files;
      const Image = {
        image: uploadedFile,
        preview: URL.createObjectURL(uploadedFile),
      };
      if (uploadedFile) {
        setState({ ...state, [file]: Image });
      }
    }
  };
  const handleAttachedFileUpload: HandleFileUpload<T> = <K extends keyof T>(
    fileInput: HTMLFormElement,
    file: K
  ) => {
    const { files: uploadedFiles } = fileInput;
    let attachedFiles = { ...(state[file] as AttachedFiles) };
    console.log({ attachedFiles });

    const files = attachedFiles.Files ?? [];
    for (let i = 0; i < uploadedFiles.length; i++) {
      files.push(uploadedFiles[i]);
    }
    attachedFiles.Files = files;
    setState({ ...state, [file]: attachedFiles });
  };
  const handleDeleteFile: HandleDeleteFile<T> = <K extends keyof T>(
    id: number,
    file: K
  ) => {
    let attachedFiles = { ...(state[file] as AttachedFiles) };
    let files = attachedFiles.Files;
    let deleted = attachedFiles.deletedFiles ?? [];

    deleted.push(files[id]);
    files = files.filter((file, index) => {
      return index !== id;
    });
    attachedFiles = { deletedFiles: deleted, Files: files };
    setState({ ...state, [file]: attachedFiles });
  };
  const handleMultiSelectChange: HandleChange = ({ name, value }) => {
    const newValue = typeof value === "string" ? value.split(",") : value;
    setState({ ...state, [name]: newValue });
  };
  return {
    state,
    lang,
    setLang,
    handleTranslatableChange,
    handleChange,
    handleImageUpload,
    handleAttachedFileUpload,
    handleDeleteFile,
    handleMultiSelectChange,
    setState,
  };
};

export default useStateManager;
