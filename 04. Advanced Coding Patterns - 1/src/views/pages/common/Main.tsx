import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "../home/Home";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
// code-splitting

export const Main = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={{}} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
