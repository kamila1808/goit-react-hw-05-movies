import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const A = styled(NavLink)`
text-decoration: none;
font-size: 25px;
color: black;

&.active{
    color: orange;
}
`

export const List = styled.ul`
list-style: none;
display: flex;
`

export const ListItem = styled.li`
margin: 10px;
`