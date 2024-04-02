import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { postCreatenewUser } from "../../../Services/apiServices";
import "./ManagerUser.scss";
import "react-toastify/dist/ReactToastify.css";
const ModalManagerUser = (props) => {
  const { show, setShow } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewimage, setPreviewimage] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setPreviewimage("");
    setShow(false);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewimage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };
  const handleSubmit = async () => {
    const isValidate = validateEmail(email);

    if (!isValidate) {
      toast.error("Invalid Email");
      return;
    }
    let data = await postCreatenewUser(email, password, username, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM, { autoClose: 1000 });
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM, { autoClose: 1000 });
      return;
    }
    handleClose();
  };
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
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
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
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalManagerUser;
