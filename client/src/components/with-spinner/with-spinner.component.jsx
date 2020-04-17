import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = WrappedComponent => {
  const newComponent = ({ isLoading, ...otherProps }) => {
    console.log(otherProps);
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay></SpinnerOverlay>
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return newComponent;
};

export default withSpinner;
