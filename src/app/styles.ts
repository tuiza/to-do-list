import styled from 'styled-components';
import themes from '@/theme';

export const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  `;

export const Body = styled.div`
  padding: 0 20px;
  display: flex;
  width: 100%;
  position: relative;
  bottom: 50px;
  flex-direction: column;
  height: 60%;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 700px;
  
`;

export const Tasks = styled.ul`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: ${themes.dark.background};
  border-radius: 10px;
  height: 100%;
  min-height: 300px;
  padding-bottom: 80px;
`;
