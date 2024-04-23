import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import {BrowserRouter, Router , Route, Routes,Link, Outlet} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
          
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
