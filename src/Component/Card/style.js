import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 10px;

`;

export const HeaderCard = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

export const MainCard = styled.div`
  display: flex;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 20%;
  margin-right: 10px;
`;

export const ImageCard = styled.img`
  width: 100%;
  min-height: 66px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 6px;
`;

export const Title = styled.div`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 12px;
  width: 80%;
`;

export const Reference = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8px;
`;

export const Color = styled.div`
  font-size: 8px;
`;

export const ColorSection = styled.div`
  display: flex;
  gap: 5px
`;

export const ColorPastille = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const Author = styled.div`
  font-size: 10px;
  display: inline-block;
  p {
    display: inline;
    text-decoration: underline;
  }
`;
export const MoneySection = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  letter-spacing: 0px;
  word-spacing: 2px;
  color: #c2c2c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: inline;
    margin: 5px;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;


export const Separator = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 1px;
  background-color: lightgrey;
`;

export const SecondRowBox = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row-reverse;
  width: 100%;
`;

export const RightSideSecondRow = styled.div`
  width: 78%;
`;
