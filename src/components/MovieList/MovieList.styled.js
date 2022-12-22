import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
`;

export const ListItem = styled.li`
  max-width: 300px;
  height: 460px;
  background: white;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  &:hover,
  &:focus {
    box-shadow: 20px 20px 60px orange, -20px -20px 60px pink;
  }

  &:hover H2,
  &:focus H2 {
    color: orange;
  }
`;

export const A = styled(Link)`
  text-decoration: none;
`;

export const H2 = styled.h2`
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  max-width: fit-content;
  color: black;
  padding: 8px;
  margin: 0;
`;
