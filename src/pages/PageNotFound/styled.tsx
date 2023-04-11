import { FOOTER_HEIGHT, HEADER_HEIGHT } from "consts";
import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - (${HEADER_HEIGHT}px + ${FOOTER_HEIGHT}px));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
`;
