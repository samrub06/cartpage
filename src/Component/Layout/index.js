import React from "react";
import AppBar from "../AppBar";
import { formatDate } from "../../Utils/date";
import arrowBack from "../../icons/arrow_back.svg";
import { MainContent } from "./style";

const MainLayout = ({ data,children,title }) => {

const menuTitle = data?.lastModifiedDate ? formatDate(data?.lastModifiedDate) : title
  return (
    <>
      <AppBar
        logo={arrowBack}
        backgroundColor={"white"}
        title={menuTitle}
      />
      <MainContent>
        {children}
      </MainContent>
    </>
  );
};

export default MainLayout;
