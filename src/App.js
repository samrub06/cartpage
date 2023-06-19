import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './Pages/CardPage';
import CartDetailsPage from './Pages/CarDetailsPage';
import info from "./MOCK_CART_EXO_1.json"

const App = () => {


  const [data, setData] = useState({});
  const userData= data[0]


  
    useEffect(() => {
    setData(info)
    }, []);
    

  return (
    <Router>
        <Routes>
         <Route exact path="/" element={<CardPage data={userData} />}> </Route> 
          <Route path="/cartdetails" element={<CartDetailsPage />}>
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
