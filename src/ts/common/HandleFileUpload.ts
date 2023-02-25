 type HandleFileUpload<T>  = <K extends keyof T>(
    fileInput: HTMLFormElement,
    file: K
  ) => void;
  export type HandleDeleteFile<T>  = <K extends keyof T>(
    id: number,
  
    file: K
  ) => void;
 export default HandleFileUpload;