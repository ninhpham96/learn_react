import ModalManagerUser from "./ModalManagerUser";
import "./ManagerUser.scss";
import { useState } from "react";
const ManagerUser = (props) => {
  const [ShowForm, setShowForm] = useState(false);
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
        <div className="table-user-container">Table Users</div>
      </div>
      <ModalManagerUser show={ShowForm} setShow={setShowForm} />
    </div>
  );
};

export default ManagerUser;
