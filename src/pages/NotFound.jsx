import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBeforeAuth from "../Components/NavigationBar/NavBeforeAuth";
import NavAfterAuth from "../Components/NavigationBar/NavAfterAuth";
import Footter from "../Components/Footter";
import "../public/css/style.css";

const NotFound = () => {
  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (errorAuth) {
      alert(errorAuth);
    }
  }, [errorAuth]);

  return (
    <>
      {/** To Check Authentication Status */}
      {!isAuthenticated ? (
        /**  Render If Not Authenticated */
        // <NavBeforeAuth />
        <div className="w-full" id="header">
          <NavBeforeAuth />
        </div>
      ) : (
        /** Render If Authenticated */
        // <NavAfterAuth />
        <div className="w-full" id="header">
          <NavAfterAuth />
        </div>
      )}  

    <div className="mx-auto my-auto h-full mb-[25rem]">
        <h1 className="font-bold text-[8rem] text-center">404</h1>
        <h3 className="mt-0 text-[0.7rem] text-center">Page not found</h3>
        <h1 className="mt-5 text-[2rem] font-bold text-center">Tujuan yang anda tuju tidak ditemukan</h1>
    </div>      
    
    
      <div className="w-full" id="foottter">
        <Footter />
      </div>
      {/* <Footter /> */}
    </>
  );
};

export default NotFound;
