import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const NavBeforeAuth = () => {
  // const dispatch = useDispatch(0);

  return (
    <>
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MiKat</span>
        </Navbar.Brand>
          <div className="flex md:order-2 w-[8.5rem] justify-between">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Navbar.Toggle />
          </div>
          
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav class="bg-white border-4 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="./index.php" class="flex items-center">
            <img src="./img/logo.png" class="h-14 mr-3 sm:h-16" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap">Tiketing Pariwisata Banten</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <a href="./index.php" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Beranda
                </a>
              </li>
              <li>
                <a href="tableHarga.php" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">
                  Tabel Harga Tempat WIsata
                </a>
              </li>
              <li>
                <a href="./pesanTiket.php" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Pesan Tiket
                </a>
              </li>
              <li>
                <a href="./totalPengunjung.php" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                  Grafik Total Pembelian Tiket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* <div id="navmo" className="flex items-center font-poppins w-full sm:hidden">
        <div onClick={() => setOpen(false)} className={`${open ? "block" : "hidden"} bg-transparent absolute w-full h-full inset-0`}></div>

        <div className="z-30 relative drop-shadow-lg">
          <button onClick={() => setOpen((open) => !open)} className=" flex justify-center w-20 bg-white text-white ml-4 mr-4 p-1 rounded-full cursor-pointer transition">
            <FiMenu size={30} className="text-black" />
          </button>
        </div>

        <div className={`${open ? "block" : "hidden"} bg-white absolute py-1 rounded-lg h-full inset-0 w-1/2 overflow-hidden z-50`}>
          <ResponsiveNavLink className="inline font-semibold top-5">
            Second Hand{" "}
            <button onClick={() => setOpen((open) => !open)} className="item-center w-fit ml-5 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition">
              <AiOutlineCloseCircle className="text-black h-4 w-4 " />
            </button>
          </ResponsiveNavLink>
          <ResponsiveNavLink href="/login">
            <button
              className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <FiLogIn className="text-white" />
              Masuk
            </button>
          </ResponsiveNavLink>
        </div>
      </div> */}
    </>
  );
};

export default NavBeforeAuth;
