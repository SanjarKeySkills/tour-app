import React, { useState } from "react";
import PopUp from "../popUpMenu/popUp.jsx";
import Img1 from "../../img/images_2.png";
import Img2 from "../../img/burger-symbols_menu.svg";
import "./header.css";

const Header = () => {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false);

    return (
        <div className="container">
            <div className="header__main">
                <div className="header__img">
                    <img className="header__logo" src={Img1} alt="logo" />
                </div>
                <div className="header__info">
                    <div className="header__contacts">
                        <div className="header__tel">+996 000 000 000</div>
                        <div className="header__mail">
                            akylfinance@gmail.com
                        </div>
                    </div>
                    <div>
                        <button
                            className="burger__btn"
                            onClick={() => setIsOpenPopUp((prev) => !prev)}>
                            <span className="burger__title-btn">MENU</span>
                            <img src={Img2} alt="logo-btn" />
                        </button>
                        <PopUp
                            isOpen={isOpenPopUp}
                            setTrigger={setIsOpenPopUp}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
