import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 10px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 220px);
    gap: 30px 30px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 40px 30px;
  }
`;

export const ListItem = styled.li`
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

export const Img = styled.img`
  width: 100%;
  flex-grow: 1;
`;

export const H2 = styled.h2`
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 auto;
  font-size: 11px;
  max-width: fit-content;
  text-align: center;
  color: white;
  padding: 13px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    padding: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    padding: 15px;
  }
`;
