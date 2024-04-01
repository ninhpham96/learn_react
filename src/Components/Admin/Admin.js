import MySideBar from "./MySideBar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";

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
    </div>
  );
};

export default Admin;
