import HandleChange from "../../../ts/common/HandleChange";
interface CustomInputI extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  onValidate?: HandleChange;
  view?: (ref: React.Ref<HTMLInputElement>) => any;
  error?: boolean | string;
}
interface InputI extends Omit<CustomInputI, "onChange"> {
  onChange?: HandleChange;
}
export default InputI;
