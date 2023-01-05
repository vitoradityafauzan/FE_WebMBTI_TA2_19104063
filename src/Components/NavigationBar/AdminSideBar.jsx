import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Sidebar } from "flowbite-react";
import { fetchInfo } from "../../redux/actions/admins/adminInfoActions";
import { logout } from "../../redux/actions/admins/adminAuthActions";
import "../../public/css/style.css";

const AdminSideBar = () => {
  const dispatch = useDispatch();
  const { adminIsAuthenticated, errorAuthAdmin } = useSelector((state) => state.adminAuth);
  const { adminInfo, errorInfoAdmin } = useSelector((state) => state.adminInfo);

  useEffect(() => {
    if (adminIsAuthenticated) {
      dispatch(fetchInfo())
    } else {
      alert('User Data Not Found !')
    }
  }, [adminIsAuthenticated]);

  const handleLogout = async () => {
    dispatch(logout());
  }

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
      {/* <div classNameName="w-full bg-sky-600">
        <Sidebar aria-label="Sidebar with multi-level dropdown example" classNameName="bg-sky-600">
          <Sidebar.Items classNameName="bg-sky-600">
            <Sidebar.ItemGroup classNameName="bg-sky-600">
              <Sidebar.Item href="#">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse label="E-commerce">
                <Sidebar.Item href="#">Products</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#">
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#">
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div> */}

      <aside className="w-full" id="admin-sideBar" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-1 bg-sky-600 rounded dark:bg-gray-800">
          {!adminIsAuthenticated ? (
            <br />
          ) : (
            <div className="rounded-full w-1/2 h-17 bg-gray-500 p-2 mb-[2.8rem] mx-auto">
              <svg className="w-16 h-16 text-neutral-50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
            </div>
          )}
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-slate-200 rounded-lg hover:bg-sky-800">
                <svg aria-hidden="true" className="w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            {!adminIsAuthenticated ? (
              <p hidden></p>
            ) : (
              <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-slate-200 rounded-lg hover:bg-sky-800">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            )}
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-slate-200 rounded-lg hover:bg-sky-800">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-slate-200 rounded-lg hover:bg-sky-800">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-slate-200 rounded-lg bg-red-500 hover:bg-red-800"  onClick={handleLogout}>
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminSideBar;
