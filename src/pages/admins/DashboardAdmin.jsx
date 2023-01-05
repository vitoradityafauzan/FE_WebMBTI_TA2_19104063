import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../Components/NavigationBar/AdminSideBar";
import Footter from "../../Components/Footter";
import { Navigate } from "react-router-dom";
import { fetchInfo } from "../../redux/actions/admins/adminInfoActions";
import "../../public/css/style.css";

const DashboardAdmin = () => {
  const dispatch = useDispatch(0);

  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);
  const { adminIsAuthenticated, errorAuthAdmin } = useSelector((state) => state.adminAuth);
  const { adminInfo, errorInfoAdmin } = useSelector((state) => state.adminInfo);

  const changeResponsive = () => {
    console.log('changing responsives');

    var x = document.getElementById("admin-dash-left");

    if (x == null || x == undefined) {
      x = document.getElementById("admin-dash-left-responsive");
    }

    console.log('before, ', x)

    if (x.id == "admin-dash-left") {
      // document.getElementById("admin-dash-left").id += "-responsive";
      x.id += "-responsive";
    } else {
      // document.getElementById("admin-dash-left").id = "admin-dash-left";
      document.getElementById("admin-dash-left-responsive").id = "admin-dash-left";
    }

    /* console.log(document.getElementById("admin-dash-left"));
    console.log(document.getElementById("admin-dash-left-responsive")) */
  }

  useEffect(() => {
    if (adminIsAuthenticated) {
      dispatch(fetchInfo());
    } /* else {
      alert("User Data Not Found !");
    } */
  }, [adminIsAuthenticated]);

  /* useEffect(() => {
    const changeResponsive = () => {
      var x = document.getElementById("admin-dash-left");
      if (x === "admin-dash-left") {
        document.getElementById("demo").id += "-responsive";
      } else {
        document.getElementById("demo").id = "admin-dash-left";
      }
    }
  }); */

  useEffect(() => {
    if (errorAuth) {
      alert(errorAuth);
    }
  }, [errorAuth]);

  useEffect(() => {
    if (errorAuthAdmin) {
      alert(errorAuthAdmin);
    }
  }, [errorAuthAdmin]);

  useEffect(() => {
    if (errorInfoAdmin) {
      alert(errorInfoAdmin);
    }
  }, [errorInfoAdmin]);

  return (
    <>
      {/** To Check Authentication Status */}
      {!adminInfo.regular ? (
      <>
        {!adminIsAuthenticated ? (
          <Navigate to="/n0t-r3gul4r/login" />
          
        ) : (
          <section>
            {/* Header */}
            <div className="w-full p-4 bg-sky-600">
              {/*  {!adminIsAuthenticated ? (
              <h1 className="text-4xl font-bold text-blue-800 bg-slate-200 w-fit p-2 border-4">Welcome Admin</h1>
              ) : (
                <h1 className="text-4xl font-bold text-blue-800 bg-slate-200 w-fit p-2 border-4">Welcome, {adminInfo.username}</h1>
              )} */}
              <h1 className="text-4xl font-bold text-blue-800 bg-slate-200 w-fit p-2 border-4">Welcome, {adminInfo.username}</h1>
              {/* <a href="javascript:void(0);" className="w-5 h-5 border " onClick={changeResponsive}>
                  Change
                </a> */}
              <button className="w-fit h-5 border " onClick={changeResponsive} id="sidebar-responsive-button">Change</button>
            </div>

            {/* Main Content */}
            <div className="flex w-full h-fit p-0" id="admin-dash-content">
              <div className="w-[16rem] bg-sky-600" id="admin-dash-left">
                <AdminSideBar />
              </div>
              <div className="w-full h-full p-2 md:mx-auto grid" id="admin-dash-right">
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
                <div className="border-4 border-sky-700 mb-4 p-2">
                  Indonesia Career Center Network (ICCN), sekitar 87% Pelajar SMA atau SMK yang sudah lulus dan Mahasiswa memilih jurusan kuliah tidak sesuai dengan minat 2 yang mereka miliki
                </div>
              </div>
            </div>

            {/* <Footter /> */}
            <div className="w-full border-2 border-gray-200" id="foottter">
              <Footter />
            </div>
          </section>
        )}
      </>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};

export default DashboardAdmin;
