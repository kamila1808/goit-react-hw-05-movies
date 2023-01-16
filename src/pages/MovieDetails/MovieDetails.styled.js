import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  justify-content: center;
  max-width: 250px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
  box-shadow:  4px 4px 8px 0px #bebebe, -20px -20px 60px #ffffff;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    margin-top: 30px;
  max-width: 1000px;
  padding: 20px;
  }

  @media screen and (min-width: 1200px) {

  margin-top: 30px;
  max-width: 1000px;
  padding: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;


  @media screen and (min-width: 768px) {
    margin-left: 15px;
  padding: 0;
  display: flex;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 15px;
  padding: 0;
  display: flex;
  }

`;

export const DescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
font-size: 13px;
margin-top: 10px;
text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  margin-right: 15px;
  padding: 15px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: #252525;

`

export const A = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: orange;
    
  }

  &:active {
    color: orange;
  }
`;

export const AddInfoWrapper = styled.div`
  border: 1px dotted black;
  padding: 10px;
`;

export const AddInfoTitle = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  padding: 15px;
  cursor: pointer;
  position: relative;
  border: none;
  background-color: #252525;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  transition: all 500ms ease;
  color: white;


  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(255, 165, 0, 0.6);
    transition: all 500ms ease;
  }

  &:hover:before {
    height: 100%;
  }
`
