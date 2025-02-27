import "./intro.css";

import underImgUrl from "../../assets/underImg.png";
import upperImgUrl from "../../assets/leaf.png";
export default function IntroImage() {
  return (
    <div className="introImage">
      <div className="introDiv">
        <h3>Orginal & Natural</h3>
        <img src={underImgUrl} id="underImg" />
        <div className="divLeaf">
          <h3>Agriculture Matter</h3>
          <img src={upperImgUrl} id="upperImg" />
        </div>
        <h3>Good Production</h3>
        <p>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
          In on my jointure horrible margaret suitable he speedily.
        </p>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
}
