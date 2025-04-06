import topPanda from "../image/Img_home_top.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="inner">
        <div className="text_box">
          <h1>일상의 모든 물건을 거래해보세요</h1>
          <button>구경하러가기</button>
        </div>
        <div>
          <img src={topPanda} alt="탑 판다" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
