  type HandleChange = (
   target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | {name: string, value: any}
  ) => void;
  export default HandleChange;