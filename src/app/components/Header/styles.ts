import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const Titulo = styled.h1`
  width: 100%;
  color: #f5f5f5;
  font-weight: 700;
  font-size: max(32px, 1vw);
`;

export const BtnTheme = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;
