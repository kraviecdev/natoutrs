import styled from "styled-components";

export const BackdropBackground = styled.div`
  position: relative;
  width: 100dvw;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.second};
`;
