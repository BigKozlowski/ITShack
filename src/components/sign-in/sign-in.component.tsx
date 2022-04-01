import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (event: { target: { value: any; name: any } }) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formData.email}
          handleChange={handleChange}
          required
          label="Email"
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          value={formData.password}
          handleChange={handleChange}
          required
          label="Password"
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
