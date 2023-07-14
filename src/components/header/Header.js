import React from "react";
import Img1 from "../../img/images_2.png";
import Img2 from "../../img/burger-symbols_menu.svg";
import "./header.css";

const Header = () => {

    return (
        <div className="container">
            <div className="header__main">
                <div className="header__img">
                    <img className="header__logo" src={Img1} alt="logo"/>
                </div>
                <div className="header__info">
                    <div className="header__tel">+86 45 86 46 056</div>
                    <div className="header__mail">email@gmail.com</div>
                    <div>
                        <button className="burger__btn">
                            <span className="burger__title-btn">Menu</span>
                                <img src={Img2} alt="logo-btn"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
