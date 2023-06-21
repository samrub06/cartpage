import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
border-radius: 40px;
padding:  19px 0  19px 0;
width: ${({ width }) => width };
background-color: ${({backgroundColor,theme} ) => theme.color.hasOwnProperty(backgroundColor) ? theme.color[backgroundColor] : "" };
color: ${({ color }) => color };
`;