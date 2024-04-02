import ModalManagerUser from "./ModalManagerUser";
import TableUsers from "./TableUsers";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../Services/apiServices";
import "./ManagerUser.scss";

const ManagerUser = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add new users
          </button>
        </div>
        <div className="table-user-container">
          <TableUsers listUsers={listUsers} setListUsers={setListUsers} />
        </div>
      </div>
      <ModalManagerUser
        show={showForm}
        setShow={setShowForm}
        fetchAllUsers={fetchAllUsers}
      />
    </div>
  );
};

export default ManagerUser;
