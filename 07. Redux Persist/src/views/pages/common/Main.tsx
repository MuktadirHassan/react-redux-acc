import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SingleProduct } from "../singleProduct/SingleProduct";
// import { Home } from "../home/Home";

// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Home = React.lazy(() => import("../home/Home"));
// code-splitting

export const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Suspense>
    </div>
  );
};
