import styled from "styled-components";

export const ArrowBack = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ParentContainer = styled.div`
  height: 100%;
`;

export const AppBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppBarTitle = styled.h1`
  flex-grow: 0.8;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 10px;
  
  margin-bottom: 8px;
  font-size: 10px;
  flex-direction: row;
  align-items: center;
  div:nth-child(3) {
    flex-grow: 1;
  }
`;

export const TotalSection = styled.div`

  div {
  margin-bottom: 5px;
  }
  div:nth-child(even) {
  text-align: end;
}
`;

export const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-bottom: 0px;
  cursor: pointer;
`;

export const TextBolded = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

export const IconPayment = styled.img`
  height: 20px;
`;
