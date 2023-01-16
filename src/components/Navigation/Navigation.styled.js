import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
`;

export const A = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  color: white;
  border: 2px ridge;
  border-color: #252525;
  padding: 6px;
  background-color: #252525;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    padding: 7px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    color: orange;
  }

  &:hover,
  &:focus {
    color: orange;
    border-color: orange;
  }

  &.active {
    color: orange;
    border-color: orange;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 25px;

  }
`;

export const ListItem = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  background-color: orange;
  border-radius: 15px;
  padding: 5px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    padding: 7px;
    margin-left: 25px;

  }

  @media screen and (min-width: 1200px) {
    padding: 10px;
  }
`;
