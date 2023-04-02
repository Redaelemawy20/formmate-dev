import React, { useMemo } from "react";
import Input from "../components/controls/Input";
import HandleChange from "../ts/common/HandleChange";
import InputI from "../components/controls/interfaces/InputI";

const createInput = ({
  handleChange,
  onValidate,
}: {
  handleChange: HandleChange;
  onValidate?: HandleChange;
}) => {
  const InputField = useMemo(() => {
    return (props: InputI) => {
      return (
        <Input {...props} onChange={handleChange} onValidate={onValidate} />
      );
    };
  }, []);

  return InputField;
};

export default createInput;
