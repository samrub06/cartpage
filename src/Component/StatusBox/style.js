import styled from "styled-components";

export const ContainerBox = styled.div`
width: ${({ width }) => width|| "fit-content" } ;
display: flex;
justify-content: center;
align-items: center;
padding-left: 5px;
padding-right: 5px;
border-radius: 4px; 
background-color: ${({backgroundColor,theme} ) => theme.color.hasOwnProperty(backgroundColor) ? theme.color[backgroundColor] : "" };
color: ${({ color }) =>color };
font-size: 10px;
font-weight: bold;
height: ${({ height }) =>height || "auto" };

`;

