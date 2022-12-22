import styled from "styled-components";

export const List = styled.ul`
list-style: none;
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
gap: 20px;
max-width: 680px;
padding: 0;
`

export const ListItem = styled.li`
max-width: 150px;
box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px, rgb(0 0 0 / 20%) 0px 2px 1px;
    border-radius: 0px 0px 4px 4px;
`

export const P = styled.p`
max-width: fit-content;
padding: 4px;
margin: 0px;
`

