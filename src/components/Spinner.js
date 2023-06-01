import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  color: white;
`;

const SpinnerDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const LoadingSpinner = () => (
  <Spinner>
    <SpinnerDot />
  </Spinner>
);

export default LoadingSpinner;
