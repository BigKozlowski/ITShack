import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  value?: string;
  onClick?: any;
}) => {
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
