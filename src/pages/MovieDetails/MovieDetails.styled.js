import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const List = styled.ul`
  /* list-style: none; */
  margin-left: 15px;
  padding: 0;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
`;

export const ListItem = styled.li`
margin-bottom: 5px;
`

export const A = styled(NavLink)`
text-decoration: none;
color: black;

&:hover,
&:focus{
    color: orange;
}

&:active{
    color: orange;
}
`

export const AddInfoWrapper = styled.div`
border: 1px dotted black;
padding: 10px;
`

export const AddInfoTitle = styled.h3`
margin-top: 5px;
margin-bottom: 10px;
`