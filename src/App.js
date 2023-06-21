import React, { useEffect, useState } from "react";
import mockData from "./MOCK_CART_EXO_1.json";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Theme/globalStyles";
import { theme } from "./Theme/theme";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";



const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(mockData);
  }, []);

  if (!data) {
    return <>Loading</>;
  }

  return (
    <div className="body">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage  data={data} />} />
            <Route path="/order/:orderId" element={<OrderPage data={data}  />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
