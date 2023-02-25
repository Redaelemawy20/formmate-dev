import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import HandleChange from "../../../ts/common/HandleChange";
import InputI from "./InputI";
import TextAreaI from "./TextAreaI";
import MultiPointInterface from "./MultiPointInputI";
export default interface MuiAccordionDetails<T extends HasTitleAndValue> {
  name: string;
  value: T[];
  childFucion: (
    props: InputI | TextAreaI | MultiPointInterface
  ) => React.ReactElement<typeof Input | typeof TextArea>;
  onValidate?: HandleChange;
  error?: string | null;
  onChange: HandleChange;
}
export interface HasTitleAndValue {
  title: string;
  value: any;
}
