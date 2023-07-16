import React from "react";
import Img1 from "../../img/images_2.png";
import Img2 from "../../img/burger-symbols_menu.svg";
import "./header.css";

const Header = () => {
    return (
        <div className="container">
            <div className="header__main">
                <div className="header__img">
                    <img className="header__logo" src={Img1} alt="logo" />
                </div>
                <div className="header__info">
                    <div className="header__contacts">
                        <div className="header__tel">+86 00 00 00 000</div>
                        <div className="header__mail">ouremail@gmail.com</div>
                    </div>
                    <div>
                        <button className="burger__btn">
                            <span className="burger__title-btn">메뉴</span>
                            <img src={Img2} alt="logo-btn" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
