import Table from "react-bootstrap/Table";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { listUsers, handleClickUpdateUser, handleClickDeleteUser } = props;
  const [pageCount, setPageCount] = useState(0);
  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
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
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
          pageCount={10}
          renderOnZeroPageCount={null}
          previousLabel="Previous"
          nextLabel="Next"
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
          forcePage={3}
        />
      </Table>
    </>
  );
};

export default TableUserPaginate;
