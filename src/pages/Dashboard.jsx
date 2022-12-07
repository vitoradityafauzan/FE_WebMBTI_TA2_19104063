import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBeforeAuth from "../Components/NavigationBar/NavBeforeAuth";
import NavAfterAuth from "../Components/NavigationBar/NavAfterAuth";
import Footter from "../Components/Footter";
import "../public/css/style.css";

const Dashboard = () => {
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

      <div className="container w-full md:w-3/4 md:my-4 p-1 md:mx-auto grid border-2 border-sky-200">
        <div className="border-4 border-sky-700 mb-4 p-2">Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki</div>
        <div className="border-4 border-sky-700 mb-4 p-2">Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki</div>
        <div className="border-4 border-sky-700 mb-4 p-2">Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki</div>
      </div>
      
      <div className="w-full" id="foottter">
        <Footter />
      </div>
      {/* <Footter /> */}
    </>
  );
};

export default Dashboard;
