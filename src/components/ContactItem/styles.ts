import styled from 'styled-components';
import colors from '../../styles/colors.ts';

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-bottom: 1px solid ${colors.border};
p {
margin: 0;
padding: 0 10px;
color: ${colors.textSecondary};
}
`;

export const Button = styled.button`
padding: 5px 10px;
margin-left: 10px;
background-color: ${colors.primary};
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
&:hover {
background-color: ${colors.secondary};
}
`;
