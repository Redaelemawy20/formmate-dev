import InputI from "./InputI";

export default interface SelectInputI<T> extends InputI {
  options: T[];
  valueProp?: keyof T | T;
  optionValue?: keyof T | T;
  allowNone?: boolean;
}
