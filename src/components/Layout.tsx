import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Whatsapp from "./Whatsapp";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Layout;
