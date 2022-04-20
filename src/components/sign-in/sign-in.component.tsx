import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, isFirebaseError, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, Title, ButtonsContainer } from "./sign-in.styles";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({
        email: "",
        password: "",
      });
    } catch (e) {
      if (isFirebaseError(e)) {
        switch (e.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;

          case "auth/wrong-password":
            alert("Incorrect password");
            break;
        }
      }
    }
  };

  const handleChange = (event: { target: { value: any; name: any } }) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
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
        <ButtonsContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            isGoogleSignIn
            type="button"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
