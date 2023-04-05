import colors from "consts/colors";
import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    border: 1px solid ${colors.primary};
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flext-start;
  justify-content: space-between;
  h2 {
    color: white;
  }
  h3 {
    color: white;
    font-size: 0.7rem;
  }
`;
