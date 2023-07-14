import React from "react";
// import logo from "../img/한국인 관광객.svg";
import "./header.css";

const Header = () => {

    return (
        <div className="container">
            <div>Hello world</div>
            <div className="header__main">
                <div className="header__img">
                    {/*<img src={logo} alt="logo" />*/}
                </div>
                <div className="header__info">
                    <div className="header__tel">+86 45 86 46 056</div>
                    <div className="header__mail">email@gmail.com</div>
                    <div>
                        <button className="burger__btn">Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
