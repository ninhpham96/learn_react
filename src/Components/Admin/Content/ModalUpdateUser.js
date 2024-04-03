import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../Services/apiServices";
import "./ManagerUser.scss";
import "react-toastify/dist/ReactToastify.css";
const ModalUpdateUser = (props) => {
  const {
    show,
    setShow,
    userUpdate,
    setUserUpdate,
    fetchAllUsers,
    checkViewOrUpdate,
  } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewimage, setPreviewimage] = useState("");

  const handleClose = () => {
    setPreviewimage("");
    setUserUpdate({});
    setShow(false);
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewimage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };
  const handleSubmit = async () => {
    await putUpdateUser(userUpdate.id, username, role, image);
    handleClose();
    fetchAllUsers();
    toast.success("Update User Success !", { autoClose: 1000 });
    return;
  };

  useEffect(() => {
    if (userUpdate) {
      setEmail(userUpdate.email);
      setUsername(userUpdate.username);
      setRole(userUpdate.role);
      if (userUpdate.image) {
        setPreviewimage(`data:image/jpeg;base64,${userUpdate.image}`);
      }
    }
  }, [userUpdate]);
  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {checkViewOrUpdate ? "Update User" : "View User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  disabled
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  {...(!checkViewOrUpdate && { disabled: true })}
                  placeholder="Enter Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Role</Form.Label>
                <Form.Select
                  {...(!checkViewOrUpdate && { disabled: true })}
                  defaultValue="USER"
                  value={role}
                  onChange={(event) => {
                    setRole(event.target.value);
                  }}
                >
                  <option>USER</option>
                  <option>ADMIN</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <label className="mb-12 label-upload" htmlFor="labelupload">
                <FcPlus /> Upload File Image
              </label>
              <input
                type="file"
                id="labelupload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </Row>
            <Row>
              <div className="mb-12 img-preview">
                {previewimage ? (
                  <img src={previewimage} alt="This is Avatar" />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {checkViewOrUpdate && (
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
