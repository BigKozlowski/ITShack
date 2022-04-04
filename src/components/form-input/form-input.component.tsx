import React from "react";

import "./form-input.styles.scss";

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: {
  handleChange: (event: { target: { value: any; name: any } }) => void;
  label: string;
  value?: string;
  name?: string;
  type?: string;
  required?: boolean;
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
