import { ImageProfile } from "./ImageProfile";
import "./styles.css";
import imgPoster from "../src/assets/images/bg-pattern-card.svg";
import patternBottom from "../src/assets/images/bg-pattern-bottom.svg";
import patternTop from "../src/assets/images/bg-pattern-top.svg";

function App() {
  return (
    <main>
      <img className="patternBottom" src={patternBottom} alt="bottom" />
      <img className="patternTop" src={patternTop} alt="top" />
      <div className="outer-container">
        <div className="top-container">
          <img className="posterImg" src={imgPoster} alt="posterImg" />
        </div>
        <ImageProfile />
        <div className="bottom-container">
          <h3 className="name-text">
            Victor Crest <span>26</span>
          </h3>

          <p>London</p>
        </div>
        <hr />
        <div className="social-container">
          <div className="followers">
            <h3>80K</h3>
            <p className="social-followers">Followers</p>
          </div>
          <div className="likes">
            <h3>803K</h3>
            <p className="social-likes">Likes</p>
          </div>
          <div className="photos">
            <h3>1.4K</h3>
            <p className="social-photos">Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
