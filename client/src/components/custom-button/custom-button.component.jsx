import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...OtherProps }) => {
  return (
    <CustomButtonContainer {...OtherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
