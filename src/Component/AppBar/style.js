import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  margin-top: 0;
  padding: 10px;
  background: ${(props) => props.color || "white"};
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;

export const CenterBox = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const LeftBox = styled.div`
  flex: 1;
`;
export const RigthBox = styled.div`
  flex: 1;
`;
