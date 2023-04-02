import InputI from "../interfaces/InputI";

import React from "react";

const Input = ({
  name,
  value,
  error,
  view,
  onValidate,
  onChange,
  ...rest
}: InputI) => {
  const props = {
    name,
    value,
    onChange: (e: any) => {
      if (onChange) {
        onChange(e.target);
        onValidate && onValidate(e.target);
      }
    },
  };

  return <input key={name} {...props} {...rest} />;
};

export default Input;
