import panda from "../image/panda_market.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="banner">
        <img src={panda} />

        <button>로그인</button>
      </div>
    </div>
  );
};
export default Header;
