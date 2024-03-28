import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div>
        <Button className="btn btn-primary">Go to Admin</Button>
        <Button className="btn btn-primary">Go to User</Button>
      </div>
    </div>
  );
}

export default App;
