import TrustImg from "../image/Img_home_bottom.png";
import "./Trust.css";

const Trust = () => {
  return (
    <div className="container5">
      <div className="inner5">
        <div className="text_box5">
          <h2>
            믿을 수 있는<br></br> 판다마켓 중고 거래
          </h2>
        </div>
        <div>
          <img src={TrustImg} />
        </div>
      </div>
    </div>
  );
};
export default Trust;
