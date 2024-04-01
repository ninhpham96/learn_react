import ModalManagerUser from "./ModalManagerUser";
import "./ManagerUser.scss";
const ManagerUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div>
          <button> Add new users</button>
        </div>
        <div>table user</div>
      </div>
      <ModalManagerUser />
    </div>
  );
};

export default ManagerUser;
