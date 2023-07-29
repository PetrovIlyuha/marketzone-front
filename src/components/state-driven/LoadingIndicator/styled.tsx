import styled from "styled-components";

export const LoadingOverlayItself = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Semi-transparent white background */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px); /* Glass reflection effect */
`;

export const LoadingCenteredWrapper = styled.div`
  position: relative;
`;

export const LoadingSpinner = styled.div`
  width: 120px;
  height: 120px;
  border: 4px solid rgb(120 43 233, 30%);
  border-radius: 50%;
  border-top: 4px solid #3498db; /* Blue color for the loader */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerText = styled.div`
  position: absolute;
  top: 43%;
  left: 10%;
  font-weight: bolder;
`;
