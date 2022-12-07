import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
import "../public/css/style.css";
import LogImg from "../images/pexels-christina-morillo.jpg";
/* import { Input } from "antd";
import 'antd/dist/antd.css'
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"; */
import { Navigate, Link } from "react-router-dom";

const RegisterUser = () => {
  //   const [passwordVisible, setPasswordVisible] = React.useState(false);

  const dispatch = useDispatch();
  const { isRegister, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email Kosong");
    }
    if (password === "") {
      alert("Password Kosong");
    }
    if (passwordCheck !== password) {
      alert("Password Tidak Sama !");
    }
    if (email !== "" && password !== "") {
      dispatch(registerUser({ email, password }));
    }
  };

  return (
    <>
      {!isRegister ? (
        <section className="h-screen w-screen text-left border-8 border-indigo-500">
          <div className="md:flex sm:flex-none flex-row h-full">
            <div className="hidden md:block basis-2/4 h-full w-full">
              <img src={LogImg} className="w-full h-full m-0" alt="image register" />
            </div>
            <div className="basis-2/4 h-full w-full p-2 md:grid">
              <div className="rounded-lg p-1 my-auto lg:mx-16 border-4">
                <h4 className="text-2xl font-bold mb-4 pt-6">Buat Akun</h4>
                <form onSubmit={handleSubmit}>
                  <div className="w-full md:w-4/5">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      id="emailInput"
                      placeholder="Masukan Alamat Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <br />
                  <div class="w-full md:w-4/5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Masukan Password
                    </label>
                    <input
                      type="password"
                      placeholder="Masukan password"
                      id="passInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <br />
                  <div class="mb-6 w-full md:w-4/5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Masukan Kembali Password
                    </label>
                    <input
                      type="password"
                      placeholder="Masukan kembali password"
                      id="passInput"
                      value={passwordCheck}
                      onChange={(e) => setPasswordCheck(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <br />
                  <div className="text-center w-full md:w-1/2 pt-2 mb-6 mx-auto">
                    <button
                      className="inline-block  hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-3 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
                <div className="text-center text-sm ">
                  <p>
                    Sudah punya akun?
                    <Link to="/login">
                      <button
                        className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out"
                      >
                        Masuk disini
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to={`/login`} />
      )}
    </>
  );
};

export default RegisterUser;
