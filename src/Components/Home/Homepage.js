import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="homepage-container">
      <video width={610} height={572} autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="homepage-content__title1">
          Make forms worth filling out
        </div>
        <div className="homepage-content__title2">
          Get more data—like signups, feedback, and anything else—with forms
          designed to be refreshingly different.
        </div>
        <div className="homepage-content__getstart">
          {isAuthenticated ? (
            <button onClick={() => navigate("users")}>Doing Quiz Now</button>
          ) : (
            <button onClick={() => navigate("/login")}>Get started</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
