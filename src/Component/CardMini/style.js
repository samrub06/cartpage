import styled from "styled-components";
import { ContainerBox } from "../Box/style";

export const ImgBox = styled.img`
  height: 52px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const BoxExtended = styled(ContainerBox)`
  margin-top: 10px;
  > div:nth-child(2) {
    text-align: end;
    flex-grow: 1;
  }
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const TitleGrey = styled.div`
  font-size: 13px;
  color: ${({theme,color}) => theme?.color[color]};
`;


