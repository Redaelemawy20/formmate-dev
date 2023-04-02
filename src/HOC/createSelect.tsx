import React, { useMemo } from "react";
import Select from "../components/controls/Select";
import HandleChange from "../ts/common/HandleChange";
import SelectInputI from "../../../dist/src/components/controls/interfaces/SelectInputI";

const createSelect = ({
  handleChange,
  onValidate,
}: {
  handleChange: HandleChange;
  onValidate?: HandleChange;
}) => {
  const SelectField = useMemo(() => {
    return function <T>(props: SelectInputI<T>) {
      return (
        <Select {...props} onChange={handleChange} onValidate={onValidate} />
      );
    };
  }, []);

  return SelectField;
};

export default createSelect;
