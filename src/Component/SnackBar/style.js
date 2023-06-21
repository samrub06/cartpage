import styled from "styled-components";

export const SnackBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: ${({theme})=> theme.fontSize.small} ;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 40px;
  width: 100%;
  color: white;
  background-color: ${({ backgroundColor, theme }) =>
    theme.color.hasOwnProperty(backgroundColor)
      ? theme.color[backgroundColor]
      : ""};
  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;

  }
`;
