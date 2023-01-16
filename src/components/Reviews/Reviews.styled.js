import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  border: 1px dotted grey;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    padding: 7px;
    font-size: 13px;

  }

  @media screen and (min-width: 1200px) {
    padding: 10px;
    font-size: 15px;
  }
`;
