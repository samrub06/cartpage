import React, { useState } from "react";
import { Content, Tab, TabBox, TabList } from "./style";

export const TabContent = ({ children }) => {
  return <div>{children}</div>;
};

const Tabs = ({ title1, title2, children }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabBox>
      <TabList>
        <Tab
          active={activeTab === "tab1"}
          onClick={() => handleTabClick("tab1")}
        >
          {title1}
        </Tab>
        <Tab
          active={activeTab === "tab2"}
          onClick={() => handleTabClick("tab2")}
        >
          {title2}
        </Tab>
      </TabList>
      <Content>
        {React.Children.map(children, (child, index) => {
          return activeTab === `tab${index + 1}` && child;
        })}
      </Content>
    </TabBox>
  );
};

export default Tabs;
