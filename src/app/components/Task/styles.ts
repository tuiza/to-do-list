import styled from "styled-components";
import themes from "@/theme";

export const Container = styled.li`
  display: flex;
  margin-top: 10px;
  align-items: center;
  background-color: transparent;
  width: 100%;
  justify-content: space-between;
  height: 64px;
  padding: 0 12px;
  border-bottom: 1px solid ${themes.dark.border};
`;

export const TaskName = styled.p`
  color: ${themes.dark.border};
  font-size: 24px;
`;

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
