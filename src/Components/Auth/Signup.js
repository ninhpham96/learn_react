import { useState } from "react";
import { postRegister } from "../../Services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast.error("Password not match !", { autoClose: 1000 });
      return;
    }
    let data = await postRegister(email, username, password);
    if (data && +data.EC === 0) {
      toast.success(data.EM, { autoClose: 1000 });
      navigate("/login");
      return;
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM, { autoClose: 1000 });
      return;
    }
  };

  return (
    <div className="container-signup">
      <div className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder="Username"
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            required=""
            placeholder="Confirm password"
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button onClick={() => handleRegister()} className="submit">
          Submit
        </button>
        <p className="signin">
          Already have an acount ? <a href="/">Signin</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
