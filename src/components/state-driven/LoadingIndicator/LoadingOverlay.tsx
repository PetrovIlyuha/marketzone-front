import {
  LoadingCenteredWrapper,
  LoadingOverlayItself,
  LoadingSpinner,
  SpinnerText,
} from "./styled";

const LoadingOverlay = () => {
  return (
    <LoadingOverlayItself>
      <LoadingCenteredWrapper>
        <LoadingSpinner />
        <SpinnerText>Loading Data...</SpinnerText>
      </LoadingCenteredWrapper>
    </LoadingOverlayItself>
  );
};

export default LoadingOverlay;
