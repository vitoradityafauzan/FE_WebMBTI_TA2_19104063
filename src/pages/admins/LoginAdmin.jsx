import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginViaForm } from "../../redux/actions/admins/adminAuthActions";
import { Link, Navigate } from "react-router-dom";
import "../../public/css/style.css";

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const { adminIsAuthenticated, errorAuthAdmin } = useSelector((state) => state.adminAuth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    if (errorAuthAdmin) {
      alert(errorAuthAdmin);
    }
  }, [errorAuthAdmin]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    }
    if (password === "") {
      alert("Password is required");
    }
    if (email !== "" && password !== "") {
      dispatch(loginViaForm({ email, password }));
    }
  };

  return (
    <>
      {!isAuthenticated ? <p hidden></p> : <Navigate to={`/`} />}

      {!adminIsAuthenticated ? (
        <div className="m-0 py-0 pb-0 pt-[4rem] bg-slate-500 text-slate-50 grid" id="wrapper-admin-login">
          <div className="container bg-slate-700 w-1/4 mx-auto mb-[3rem] p-5 text-center">
            <h1 className="font-bold text-xl">WELCOME Admin</h1>
          </div>
          <div className="container rounded-lg bg-slate-700 w-1/2 mx-auto p-4">
            <h1 className="mb-5 font-bold text-lg">Enter Account Credentials</h1>
            <form onSubmit={handleSubmit}>
              <div className="w-full md:w-4/5">
                <label for="first_name" class="block mb-2 text-sm font-medium dark:text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <br />
              <div class="mb-6 w-full md:w-4/5">
                <label for="password" class="block mb-2 text-sm font-medium dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="passInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  Login
                </button>
              </div>
            </form>
            <div className="text-center text-sm ">
              <p>
                Dont have an account?
                <Link to="/n0t-r3gul4r/register">
                  <button
                    className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out"
                  >
                    Register
                  </button>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full h-[15rem] mt-5"></div>
        </div>
      ) : (
        <Navigate to={`/n0t-r3gul4r/home`} />
      )}
    </>
  );
};

export default LoginAdmin;
