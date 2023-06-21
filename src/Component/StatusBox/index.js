import React from "react";
import { ContainerBox } from "./style";

const StatusBox = ({ children, color, backgroundColor,width,height }) => {
  return (
    <ContainerBox height={height} width={width} color={color} backgroundColor={backgroundColor}>
      {children}
    </ContainerBox>
  );
};

export default StatusBox;
