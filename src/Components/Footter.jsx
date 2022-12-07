import React from "react";
import { Footer } from "flowbite-react";

export default function Footter() {
  return (
    <>
      {/* <div className="container w-screen h-[4rem] p-2 bg-gray-200">
          This Is footer
        </div> */}

      <Footer container={true}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="/" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" name="MiKat" />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </Footer>
    </>
  );
}
