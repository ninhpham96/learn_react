import ModalCreateUser from "./ModalCreateUser";
import TableUsers from "./TableUsers";
import ModalUpdateUser from "./ModalUpdateUser";
import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../Services/apiServices";
import "./ManagerUser.scss";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = () => {
  const LIMIT_USER = 5;
  const [showModalManagerUser, setShowModalManagerUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [checkViewOrUpdate, setCheckViewOrUpdate] = useState(true);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});

  useEffect(() => {
    console.log("check");
    fetchAllUsersWithPaginate(1);
  }, []);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchAllUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    console.log(res.DT);
    if (res && res.EC === 0) {
      setListUsers(res.DT.users);
    }
  };

  const handleClickUpdateUser = (user, check) => {
    setUserUpdate(user);
    setShowUpdateUser(true);
    setCheckViewOrUpdate(check);
  };

  const handleClickDeleteUser = async (user) => {
    setShowModalDeleteUser(true);
    setUserDelete(user);
  };
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModalManagerUser(true);
            }}
          >
            Add new users
          </button>
        </div>
        <div className="table-user-container">
          <TableUserPaginate
            listUsers={listUsers}
            setListUsers={setListUsers}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickDeleteUser={handleClickDeleteUser}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalManagerUser}
        setShow={setShowModalManagerUser}
        fetchAllUsers={fetchAllUsers}
      />
      <ModalUpdateUser
        show={showUpdateUser}
        setShow={setShowUpdateUser}
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
        fetchAllUsers={fetchAllUsers}
        checkViewOrUpdate={checkViewOrUpdate}
      />
      <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        userDelete={userDelete}
        fetchAllUsers={fetchAllUsers}
      />
    </div>
  );
};

export default ManagerUser;
