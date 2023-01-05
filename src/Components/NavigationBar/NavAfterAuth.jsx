import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { fetchInfo } from "../../redux/actions/userInfoActions";
import { logout } from "../../redux/actions/authActions";

const NavAfterAuth = () => {
  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  const { isAuthenticated, errorAuth } = useSelector((state) => state.auth);
  const { userInfo, errorInfoUser } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchInfo());
    } else {
      alert("User Data Not Found !");
      // dispatch(logout());
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    dispatch(logout());
  }

  return (
    <>
      <Navbar fluid={false} rounded={true} className="border-4">
        <Navbar.Brand href="/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MiKat</span>
        </Navbar.Brand>
        <div className="flex md:order-2 w-[6.5rem] justify-between">
          {userInfo.gambar ? (
            <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded={true} />}>
              <Dropdown.Header>
                <span className="block text-sm">{userInfo.username}</span>
                <span className="block truncate text-sm font-medium">{userInfo.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Info Akun</Dropdown.Item>
              <Dropdown.Item>Hasil Tes</Dropdown.Item>
            </Dropdown>
          ) : (
            <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}>
              <Dropdown.Header>
                <span className="block text-sm">{userInfo.username}</span>
                <span className="block truncate text-sm font-medium">{userInfo.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Info Akun</Dropdown.Item>
              <Dropdown.Item>Hasil Tes</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              {/* <button onClick={handleLogout()} className="text-red-400">Logout</button> */}
            </Dropdown>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Halaman Utama
          </Navbar.Link>
          <Navbar.Link href="/navbars">Informasi Semua Kepribadian</Navbar.Link>
          <Navbar.Link href="/tests/mbti">Test MBTI</Navbar.Link>
          {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavAfterAuth;
