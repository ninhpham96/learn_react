// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import sidebarBg from "../../assets/bg2.jpg";
// const MySideBar = (props) => {
//   const { collapsed } = props;
//   return (
//     <>
//       <Sidebar collapsed={collapsed} image={sidebarBg}>
//         <Menu>
//           <SubMenu label="Charts">
//             <MenuItem> Pie charts </MenuItem>
//             <MenuItem> Line charts </MenuItem>
//           </SubMenu>
//           <MenuItem> Documentation </MenuItem>
//           <MenuItem> Calendar </MenuItem>
//           <MenuItem active={false} disabled={false}></MenuItem>
//           <MenuItem> </MenuItem>
//           <MenuItem> </MenuItem>
//         </Menu>
//       </Sidebar>
//     </>
//   );
// };
// export default MySideBar;

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function MySideBar() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            // icon={<MenuOutlinedIcon />}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem>Home</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Contacts</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>
    </div>
  );
}

export default MySideBar;
