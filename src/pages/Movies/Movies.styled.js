import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 350px;
  padding: 15px;
  /* border: 2px solid gray; */
  border: none;
  background-color: #252525;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &::placeholder {
    color: white;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: orange;
    box-shadow: 4px 4px 8px 0px orange;
  }
`;

export const Button = styled.button`
  padding: 15px;
  cursor: pointer;
  position: relative;
  border: none;
  background-color: transparent;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
  transition: all 500ms ease;
  color: white;
  font-size: 14px;


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
`;
