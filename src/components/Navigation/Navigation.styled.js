import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  background: lightgray;
`;

export const A = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  border: 2px ridge;
  border-color: black;
  padding: 8px;

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
  list-style: none;
  display: flex;
  margin: 0px;
`;

export const ListItem = styled.li`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
`;
