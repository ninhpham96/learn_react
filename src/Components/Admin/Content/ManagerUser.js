import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../../Services/apiServices";
import "./ManagerUser.scss";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = () => {
  const LIMIT_USER = 1;
  const [showModalManagerUser, setShowModalManagerUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [checkViewOrUpdate, setCheckViewOrUpdate] = useState(true);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchAllUsersWithPaginate(1);
  }, []);

  const fetchAllUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    console.log(res);
    if (res && res.EC === 0) {
      setCurrentPage(page);
      setPageCount(res.DT.totalPages);
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
            pageCount={pageCount}
            setListUsers={setListUsers}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickDeleteUser={handleClickDeleteUser}
            fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <ModalCreateUser
        show={showModalManagerUser}
        setShow={setShowModalManagerUser}
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
      />
      <ModalUpdateUser
        show={showUpdateUser}
        setShow={setShowUpdateUser}
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
        checkViewOrUpdate={checkViewOrUpdate}
        currentPage={currentPage}
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
      />
      <ModalDeleteUser
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        userDelete={userDelete}
        fetchAllUsersWithPaginate={fetchAllUsersWithPaginate}
      />
    </div>
  );
};

export default ManagerUser;
