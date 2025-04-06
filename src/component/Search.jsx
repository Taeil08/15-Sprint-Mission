import searchImg from "../image/Img_home_02.png";
import "./Search.css";
const Search = () => {
  return (
    <div className="container3">
      <div className="inner3">
        <div className="text_box3">
          <h3>Search</h3>
          <h2>
            구매를 원하는<br></br>상품을 검색하세요
          </h2>
          <p>구매하고 싶은 물품은 검색해서 쉽게 찾아보세요</p>
        </div>
        <div>
          <img src={searchImg} />
        </div>
      </div>
    </div>
  );
};
export default Search;
