import React from "react";
import { ContainerBox } from "./style";

const Box = ({ children, justifyContent, alignItems, height,gap }) => {
  return (
    <ContainerBox gap={gap} height={height} alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </ContainerBox>
  );
};

export default Box;
