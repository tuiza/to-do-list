import styled from "styled-components";
import themes from "@/theme";

export const Container = styled.li`
  display: flex;
  margin-top: 10px;
  align-items: center;
  background-color: transparent;
  width: 100%;
  
  height: 64px;
  padding: 0 12px;
  border-bottom: 1px solid ${themes.dark.border};
`;

export const Checkbox = styled.input`


`

export const TaskName = styled.p<{done: boolean}>`
  justify-self: flex-start;
  color: ${themes.dark.border};
  font-size: 24px;
  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
  margin-left: 10px;
`;

export const BtnContainer = styled.div`
  position: absolute;
  left: 85%;
`

export const BtnDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
