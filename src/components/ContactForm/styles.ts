import styled from 'styled-components';
import colors from '../../styles/colors.ts';

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 20px 0;
`;

export const Input = styled.input`
margin: 10px 0;
padding: 10px;
font-size: 1rem;
border: 1px solid ${colors.border};
border-radius: 8px;
`;

export const Button = styled.button`
padding: 10px;
background-color: ${colors.primary};
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
font-size: 20px;
&:hover {
background-color: ${colors.secondary};
}
`;
