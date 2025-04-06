import HotItemImg from "../image/Img_home_01.png";
import "./HotItems.css";

const HotItems = () => {
  return (
    <div className="container2">
      <div className="inner2">
        <div>
          <img src={HotItemImg} />
        </div>
        <div className="text_box2">
          <h3>Hot item</h3>
          <h2>
            인기 상품을<br></br> 확인해 보세요
          </h2>
          <p>가장 HOT한 중고거래 물품을 판다 마켓에서 확인해보세요</p>
        </div>
      </div>
    </div>
  );
};
export default HotItems;
