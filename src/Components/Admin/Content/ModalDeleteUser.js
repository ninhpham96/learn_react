import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteUser;
