import App from "./App";
import Admin from "../src/Components/Admin/Admin";
import HomePage from "./Components/Home/Homepage";
import ManagerUser from "./Components/Admin/Content/ManagerUser";
import Dashboard from "./Components/Admin/Content/Dashboard";
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "./Components/Auth/Signup";
import ListQuiz from "./Components/User/ListQuiz";
import Detailquiz from "./Components/User/DetailQuiz";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/users" element={<ListQuiz />} />
          </Route>
          <Route path="/quiz/:id" element={<Detailquiz />} />
          <Route path="/admins" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="manager-user" element={<ManagerUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <div className="alert alert-danger container mt-5">
                Page not found
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
export default Layout;
