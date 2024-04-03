import Table from "react-bootstrap/Table";

const TableUsers = (props) => {
  const { listUsers, handleClickUpdateUser, handleClickDeleteUser } = props;
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`table-user+${index}`}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleClickUpdateUser(user, false)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => handleClickUpdateUser(user, true)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger "
                      onClick={() => handleClickDeleteUser()}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableUsers;
