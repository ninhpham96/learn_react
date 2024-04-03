import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postDeleteUser } from "../../../Services/apiServices";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow, userDelete, fetchAllUsers } = props;
  const handleClose = () => setShow(false);
  const handleConfirm = async () => {
    let data = await postDeleteUser(userDelete.id);
    if (data && data.EC === 0) {
      fetchAllUsers();
      setShow(false);
      toast.success("Delete User Success !", { autoClose: 1000 });
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete User: {userDelete.username}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteUser;
