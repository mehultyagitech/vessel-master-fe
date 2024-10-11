import React, { useState, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Dashboardcards from "../component/Dashboardcards";
import Daigramcards from "../component/Daigramcards";
import MapComponent from "../component/LocationPoint";

const Approutes = () => {

  const privateRoute=[
    {
      path:"/",
      component: Login,
    },
    {
      path:'/dashboard',
      component: Dashboard,
    },
    {
      path:'/dashboardcards',
      component: Dashboardcards,
    },
    {
      path:'/daigramcards',
      component: Daigramcards,
    },
    {
      path:'/locationPoint',
      component: MapComponent,
    },
    
  ]

  return (
    <>
        <BrowserRouter>
        <Routes>
          {privateRoute?.map((data, index)=>(
            <Route path={data.path}
            key={index}
            element={
              <ProtectedRoutes
              component={data.component} /> }/>
          ))}
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Approutes;
