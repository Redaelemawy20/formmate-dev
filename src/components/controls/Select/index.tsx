import React, { useEffect } from "react";
import SelectInputI from "../interfaces/SelectInputI";

export default function Select<T>({
  name,
  value,
  onChange,
  onValidate,
  valueProp,
  options,
  optionValue,
}: SelectInputI<T>) {
  const getValueOf = (option: any, v: any, index: number) => {
    return option && typeof option === "object"
      ? (option as any)[v || "id"] || index
      : option;
  };
  useEffect(() => {
    console.log("state changed inside select", onChange);
  }, [onChange]);
  return (
    <select
      value={value ? value : getValueOf(options[0], valueProp, 0) || "1"}
      name={name}
      onChange={(e) => {
        if (onChange) {
          // console.log(e);
          onChange(e.target);
          onValidate && onValidate(e.target as HTMLSelectElement);
        }
      }}
    >
      {options.map((option, index) => (
        <option value={getValueOf(option, valueProp, index)} key={index}>
          {getValueOf(option, optionValue, index)}
        </option>
      ))}
    </select>
  );
}
