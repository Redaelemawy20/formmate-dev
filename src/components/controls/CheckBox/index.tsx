import React from "react";
import InputI from "../interfaces/InputI";
const CheckBox: React.FunctionComponent<InputI> = ({
  name,
  label,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="m-3">
      <label className="row">
        <span className="col form-label">{label} </span>
        <span className="col-auto">
          <label className="form-check form-check-single form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name={name}
              onChange={(e) => {
                // onChange(e);
              }}
              checked={value === "true"}
            />
          </label>
        </span>
        {error && <div className="alert alert-danger">{error}</div>}
      </label>
    </div>
  );
};

export default CheckBox;
