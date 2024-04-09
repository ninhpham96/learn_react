import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const {
    pageCount,
    listUsers,
    handleClickUpdateUser,
    handleClickDeleteUser,
    fetchAllUsersWithPaginate,
    currentPage,
  } = props;
  const handlePageClick = (event) => {
    fetchAllUsersWithPaginate(event.selected + 1);
  };
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
                      onClick={() => handleClickDeleteUser(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className="user-pagination">
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          previousLabel="< Prev"
          nextLabel="Next >"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          forcePage={currentPage - 1}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
