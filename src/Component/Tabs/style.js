import styled from "styled-components";

export const TabBox = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 30px;
  margin: 0;
  padding: 2px;
  border-radius: 7px;
  background-color: lightgrey;
`;

export const Tab = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  height: 30px;
  list-style: none;
  cursor: pointer;
  transition: all 0.7s;
  border-radius:6px;
  color: black;
  background: ${({ active }) => (active ? "white" : "")};
  text-align: center;
`;

export const Content = styled.div``;
