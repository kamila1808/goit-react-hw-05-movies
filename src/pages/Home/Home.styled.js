import styled from 'styled-components';

export const H1 = styled.h1`
  margin-bottom: 20px;
  /* margin-left: 55px; */
  font-size: 20px;
  font-weight: 400;
  color: orange;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    /* margin-left: 115px; */
    font-size: 25px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 35px;
    margin-left: 115px;
    text-align: left;
    font-size: 25px;
  }
`;
