import React from "react";
import { CenterBox, Container, LeftBox, RigthBox } from "./style";
import { useNavigate } from "react-router-dom";

const AppBar = ({ backgroundColor, logo, title, icon }) => {
  const navigate=useNavigate()
  return (
    <Container color={backgroundColor}>
      <LeftBox onClick={()=>{navigate("/")}}>
        <img src={logo} alt="Logo" />
      </LeftBox>
      <CenterBox>{title}</CenterBox>
      <RigthBox>{icon}</RigthBox>
    </Container>
  );
};

export default AppBar;



