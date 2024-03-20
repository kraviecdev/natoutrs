import styled from "styled-components";

export const DragDropWrapper = styled.label`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  span {
    padding: 16px 8px;
    border: 2px dashed ${({ theme }) => theme.colors.contrast};
    color: ${({ theme }) => theme.colors.main_font};
    text-align: center;
    font-style: italic;
    flex-grow: 1;
  }

  input {
    opacity: 0;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
