import React from "react";

import { GropuContainer, FormInputContainer, FormInputLabel } from "./form-input.styles";

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
    <GropuContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? <FormInputLabel className={otherProps.value?.length ? "shrink" : ""}>{label}</FormInputLabel> : null}
    </GropuContainer>
  );
};

export default FormInput;
