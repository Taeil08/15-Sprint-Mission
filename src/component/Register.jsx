import RegisterImg from "../image/Img_home_03.png";
import "./Register.css";
const Register = () => {
  return (
    <div className="container4">
      <div className="inner4">
        <div>
          <img src={RegisterImg} />
        </div>
        <div className="text_box4">
          <h3>Register</h3>
          <h2>
            판매를 원하는 <br></br>상품을 등록하세요
          </h2>
          <p>어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요</p>
        </div>
      </div>
    </div>
  );
};
export default Register;
