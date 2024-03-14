import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0 10px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.contrast};
`;
