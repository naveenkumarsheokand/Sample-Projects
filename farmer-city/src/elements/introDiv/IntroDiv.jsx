import introUrl from "../../assets/introImage.png"
export default function IntroDiv(){
    return <div className="introduction-div">
        <img id="introImg" src={introUrl} alt="Image" />
    </div>
}