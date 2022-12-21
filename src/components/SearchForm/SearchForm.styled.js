import styled from "styled-components";

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
`

export const Input = styled.input`
width: 300px;
padding: 10px;
border: 2px solid gray;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

&:hover,
&:focus {
    color: orange;
    border-color: orange;
}
`

export const Button = styled.button`
padding: 10px;
cursor: pointer;
background-color: transparent;
border: 2px solid gray;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

&:hover,
&:focus {
    color: orange;
    border-color: orange;

}
`