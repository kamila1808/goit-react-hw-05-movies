import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 40px 30px;
  justify-content: center;
`;

export const ListItem = styled.li`
  max-width: 250px;
  /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */

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
  font-size: 14px;
  max-width: fit-content;
  color: white;
  padding: 15px;
  margin: 0;
`

export const Img = styled.img`

`