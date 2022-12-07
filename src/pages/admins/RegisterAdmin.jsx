import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "../../public/css/style.css";

const RegisterAdmin = () => {
  return (
    <>
      <div className="m-0 py-0 pb-0 pt-[4rem] bg-slate-500 text-slate-50 grid" id="wrapper-admin-login">
        <div className="container bg-slate-700 w-1/4 mx-auto mb-[3rem] p-5 text-center">
          <h1 className="font-bold text-xl">Registe Account</h1>
        </div>
        <div className="container rounded-lg bg-slate-700 w-1/2 mx-auto p-4">
            <h1 className="mb-5 font-bold text-lg">Enter Account Credentials</h1>
          <form /* onSubmit={handleSubmit} */>
          <div className="w-full md:w-4/5">
              <label for="usernameInput" class="block mb-2 text-sm font-medium dark:text-white">
                Username
              </label>
              <input
                type="text"
                id="usernameInput"
                /* value={username}
                onChange={(e) => setUsername(e.target.value)} */
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Username"
                required
              />
            </div>
            <br />
            <div className="w-full md:w-4/5">
              <label for="emailInput" class="block mb-2 text-sm font-medium dark:text-white">
                Email
              </label>
              <input
                type="text"
                id="emailInput"
                /* value={email}
                onChange={(e) => setEmail(e.target.value)} */
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email Address"
                required
              />
            </div>
            <br />
            <div class="mb-6 w-full md:w-4/5">
              <label for="passInput" class="block mb-2 text-sm font-medium dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="passInput"
                /* value={password}
                onChange={(e) => setPassword(e.target.value)} */
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <br />
            <div className="text-center pt-2 mb-6 mx-auto md:w-1/2">
              <button
                className="inline-block  hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-3 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Masuk
              </button>
            </div>
          </form>
          <div className="text-center text-sm ">
            <p>
              Already have an account?
              <Link to="/n0t-r3gul4r/login">
                <button
                  className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full h-[15rem] mt-5"></div>
      </div>
    </>
  );
};

export default RegisterAdmin;
