import styled from 'styled-components';
import themes from '@/theme';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  position: relative;
  bottom: 50px;
  flex-direction: column;
  height: 60%;
  border-radius: 8px;
  min-width: 540px;
`;

export const Tasks = styled.ul`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: ${themes.dark.background};
  border-radius: 10px;
  min-height: 300px;
  padding-bottom: 10px;

`;
