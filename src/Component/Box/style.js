import styled from "styled-components";

export const ContainerBox = styled.div`
display: flex;
width:100%;
flex-direction: row;
flex-wrap: nowrap;
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent:"flex-start"};
align-items: ${({ alignItems }) => alignItems ? alignItems:""};
height: ${({ height }) => height ? height:"auto"};
gap: ${({ gap }) => gap ? gap:"0"};
`;
