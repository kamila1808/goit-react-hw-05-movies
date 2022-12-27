import styled from "styled-components";

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 40px;
`

export const Input = styled.input`
width: 350px;
padding: 15px;
/* border: 2px solid gray; */
border: none;

box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

&:hover,
&:focus {
    color: orange;
    box-shadow: 4px 4px 8px 0px orange;
}
`

export const Button = styled.button`
padding: 15px;
cursor: pointer;
position: relative;
border: none;
background-color: transparent; 
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
box-sizing: border-box;
transition: all 500ms ease; 
color: grey;


/* border: 2px solid gray; */
/* background: linear-gradient(45deg, rgb(255, 165, 0), rgb(255, 192, 203), rgb(128, 128, 128)); */


&:hover,
&:focus {
    color: black;
    font-weight: 800;

} 

&:before {
	content:'';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 0;
    background: linear-gradient(45deg, rgb(255, 209, 125, 0.5) 18%, rgb(255, 213, 221, 0.5), rgb(220, 220, 220, 0.5) 77%);
        /* background: rgba(255,255,255,0.3); */
    	transition: all 500ms ease;
}

&:hover:before {
	height: 100%;
}
`