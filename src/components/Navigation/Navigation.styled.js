import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

`;

export const A = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  border: 2px ridge;
  border-color: #252525;
  padding: 8px;
  background-color: #252525;


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
  align-items: center;
  margin: 0px;
`;

export const ListItem = styled.li`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 30px;
`;

export const Img = styled.img`
background-color: orange;
border-radius: 15px;
padding: 10px;
`
