import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }: {children: React.ReactNode; type?: "button" | "submit" | "reset" | undefined; value?: string}) => {
    return <button className="custom-button" {...otherProps}>
        {children}
    </button>
}

export default CustomButton;