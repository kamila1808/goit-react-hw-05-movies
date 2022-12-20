import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
`;

export const A = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: black;

  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: orange;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  margin: 10px;
`;
