import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../index.css";

const Dashboard = () => {
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <>
    {!isAuthenticated ? (
        <div className="sm:container md:w-11/12 md:my-4 border-4 border-sky-500 sm:p-1 md:mx-auto">
        <h1>This is Dashboard</h1>

      </div>
    ) : (
        <div className="sm:container md:w-11/12 md:my-4 border-4 border-sky-500 sm:p-1 md:mx-auto">
        <h1>This is Dashboard</h1>
        <h1>YOU ARE LOGGED IN</h1>
      </div>
    )}
      
    </>
  );
};

export default Dashboard;
