import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 15px;
  margin-top: 10px;
  /* max-width: 680px; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 680px;
    padding: 0;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 680px;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 0px 0px 4px 4px;
`;

export const P = styled.p`
  max-width: fit-content;
  padding: 2px;
  margin: 0 auto;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    max-width: fit-content;
  padding: 4px;
  margin: 0px;
  }

  @media screen and (min-width: 1200px) {
    max-width: fit-content;
  padding: 4px;
  margin: 0px;
  }
`;
