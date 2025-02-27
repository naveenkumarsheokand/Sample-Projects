import "./introDiv.css";
import introUrl from "../../assets/introImage.png";
import checkUrl from "../../assets/check.png";
export default function IntroDiv() {
  return (
    <div className="introduction-div">
      <div className="intro-div-itemA">
        <img id="introImg" src={introUrl} alt="Image" />
      </div>
      <div className="intro-div-itemB">
        <p>OUR INTRODUCTION</p>
        <h3>Pure Agriculture and Organic Form</h3>
        <p>We’re Leader in Agriculture Market</p>
        <p>
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected humou or randomised
          words even slightly believable.
        </p>
        <p>
          <img src={checkUrl} />
          Organic food contains more vitamins
        </p>
        <p>
          <img src={checkUrl} />
          Eat organic because supply meets demand
        </p>
        <p>
          <img src={checkUrl} />
          Eat organic because supply meets demand
        </p>
      </div>
    </div>
  );
}
