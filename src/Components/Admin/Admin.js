import MySideBar from "./MySideBar";
import "./Admin.scss";
import { useState } from "react";

const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <MySideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <button
          className="btn btn-primary"
          onClick={() => setCollapsed(!collapsed)}
        >
          Collapsed
        </button>
        Đây là phần nội dung
      </div>
    </div>
  );
};

export default Admin;
