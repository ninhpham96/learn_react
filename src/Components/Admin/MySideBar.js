import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import sidebarBg from "../../assets/bg2.jpg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";

function MySideBar() {
  const [showhideEle, setShowhideEle] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Sidebar
        collapsed={collapsed}
        image={sidebarBg}
        style={{ height: "100vh" }}
      >
        <Menu>
          <MenuItem>
            <div
              className="farbar-wrap"
              style={({ textAlign: "center" }, { display: "flex" })}
            >
              {showhideEle && <GrUserAdmin size={"1.5em"} />}
              {showhideEle && <h2>Admin</h2>}
              <FaBars
                className="farbar"
                onClick={() => {
                  setShowhideEle(!showhideEle);
                  setCollapsed(!collapsed);
                }}
              />
            </div>
          </MenuItem>
          <MenuItem icon={<RxDashboard />}>
            {" "}
            <Link to="/admins" />
            Dashboard
          </MenuItem>
          <SubMenu label="ManagerUser" icon={<FcManager size={"1.5em"} />}>
            <MenuItem>
              <Link to="/admins/manager-user" />
              Quản lý người dùng
            </MenuItem>
            <MenuItem>Quản lý bài kiểm tra</MenuItem>
            <MenuItem>Quản lý câu hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
}

export default MySideBar;
