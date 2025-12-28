import { Link } from "react-router-dom";
import "./Home.css";
import music from "../assets/home.mp3";
import background from "../assets/homebackground.jpg";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="title">Bishop Daddy Game Show</h1>
      <p className="subtitle">Are you ready to play and win big?</p>

      <div className="buttons">
        <Link to="/quiz" className="btn start-btn">
          Start Game
        </Link>

        <Link to="/instructions" className="btn about-btn">
          About Game
        </Link>
      </div>
    </div>
  );
}

export default Home;
