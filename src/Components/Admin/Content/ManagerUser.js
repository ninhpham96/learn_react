import ModalCreateUser from "./ModalCreateUser";
import TableUsers from "./TableUsers";
import ModalUpdateUser from "./ModalUpdateUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../Services/apiServices";
import "./ManagerUser.scss";
import ModalDeleteUser from "./ModalDeleteUser";

const ManagerUser = () => {
  const [showModalManagerUser, setShowModalManagerUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [checkViewOrUpdate, setCheckViewOrUpdate] = useState(true);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const handleClickUpdateUser = (user, check) => {
    setUserUpdate(user);
    setShowUpdateUser(true);
    setCheckViewOrUpdate(check);
  };

  const handleClickDeleteUser = () => {
    setShowModalDeleteUser(true);
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
          <TableUsers
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
        setUserDelete={setUserDelete}
      />
    </div>
  );
};

export default ManagerUser;
