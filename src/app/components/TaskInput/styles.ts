import styled from "styled-components";
import themes from "@/theme";

export const Container = styled.form`
  display: flex;
  align-items: center;
  background-color: ${themes.dark.background};
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  border: none;
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  color: ${themes.dark.border};
  font-size: max(24px, 1vw);



  &:focus {
    outline: none;
  }
`;

export const BtnAdd = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  cursor: pointer;
`;
