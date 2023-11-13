import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 20px 40px;
  min-height: 40%;
  display: flex;
  background: url("/dinamarca.jpg") no-repeat center fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 540px;
`;

export const Titulo = styled.h1`
  font-size: 50px;
  color: #000000;
  font-weight: 700;
`;

export const BtnTheme = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
