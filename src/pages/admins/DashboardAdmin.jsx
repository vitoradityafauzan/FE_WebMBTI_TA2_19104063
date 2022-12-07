import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../../Components/NavigationBar/AdminSideBar";
import Footter from "../../Components/Footter";
import { Navigate } from "react-router-dom";
import { loginViaForm } from "../../redux/actions/admins/adminAuthActions";
import { fetchInfo } from "../../redux/actions/admins/adminInfoActions";
import "../../public/css/style.css";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);
  const { adminIsAuthenticated, errorAuthAdmin } = useSelector((state) => state.adminAuth);
  const { adminInfo, errorInfoAdmin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    if (adminIsAuthenticated) {
      dispatch(fetchInfo())
    } else {
      alert('User Data Not Found !')
    }
  }, [adminIsAuthenticated])

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
      {/* {!isAuthenticated ? ( */}
        <>
          <div className="w-full p-4 bg-sky-600">
            {!adminIsAuthenticated ? (
              <h1 className="text-4xl font-bold text-blue-800 bg-slate-200 w-fit p-2 border-4">Welcome Admin</h1>
            ) : (
              <h1 className="text-4xl font-bold text-blue-800 bg-slate-200 w-fit p-2 border-4">Welcome, {adminInfo.username}</h1>
            )}
          </div>
          <div className="flex w-full h-fit p-0">
            <div className="w-[16rem] bg-sky-600">
              <AdminSideBar />
            </div>
            <div className="w-full h-full p-2 md:mx-auto grid">
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

          <div className="w-full border-2 border-gray-200" id="foottter">
            <Footter />
          </div>
          {/* <Footter /> */}
        </>
      {/* ) : (
        <Navigate to={`/`} />
      )} */}
    </>
  );
};

export default DashboardAdmin;
