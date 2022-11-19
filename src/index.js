import React from "react";
// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 
import Dashboard from "./pages/Dashboard";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// const container = document.getElementById('root');
// const root = createRoot(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
{/* <React.StrictMode> */}
root.render( 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
/* </React.StrictMode> */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
