import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginViaForm } from "../redux/actions/authActions";
import LogImg from "../images/pexels-christina-morillo.jpg";
import "../public/css/style.css";

/* import { Input } from "antd";
import 'antd/dist/antd.css';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"; */
import { Link, Navigate } from "react-router-dom";

const LoginUser = () => {
  // const [passwordVisible, setPasswordVisible] = React.useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if (errorAuth) {
      alert(errorAuth);
    }
  }, [errorAuth]);

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
      {!isAuthenticated ? (
        <section className="h-screen w-screen text-left border-8 border-indigo-500">
          <div className="md:flex sm:flex-none flex-row h-full">
            <div className="hidden md:block basis-2/4 h-full w-full">
              <img src={LogImg} className="w-full h-full m-0" alt="Not FOund" />
            </div>
            <div className="basis-2/4 h-full w-full p-2 md:grid">
              <div className="rounded-lg p-1 my-auto border-2 border-red-700 lg:mx-16">
                <h4 className="text-2xl font-bold mb-4 pt-6">Masuk</h4>
                <form onSubmit={handleSubmit}>
                  <div className="w-full md:w-4/5">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      id="emailInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukan Alamat Email"
                      required
                    />
                  </div>
                  <br />
                  <div class="mb-6 w-full md:w-4/5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      id="passInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Masukan password"
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
                    Belum punya akun?
                    <Link to="/register">
                      <button
                        className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out"
                      >
                        Daftar disini
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  );
};

export default LoginUser;
