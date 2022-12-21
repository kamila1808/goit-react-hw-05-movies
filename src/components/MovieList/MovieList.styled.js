import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  gap: 25px;
`;

export const ListItem = styled.li`
  width: 300px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  &:hover,
  &:focus {
    background: #e0e0e0;

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
  font-size: 16px;
  max-width: fit-content;
  color: black;
  padding: 5px;
`;
