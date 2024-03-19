import styled from "styled-components";

export const DragDropWrapper = styled.label`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  span {
    padding: 8px;
    border: 2px dashed ${({ theme }) => theme.colors.contrast};
    color: ${({ theme }) => theme.colors.main_font};
    text-align: center;
    font-style: italic;
    flex-grow: 1;
  }

  input {
    display: none;
  }
`;
