import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
