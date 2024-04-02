import MySideBar from "./MySideBar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <MySideBar />
      </div>
      <div className="admin-content">
        <div className="admin-header"></div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
