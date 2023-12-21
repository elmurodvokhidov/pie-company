import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Footer from "../components/footer/Footer";



function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
