import React from "react";
import "./popUp.css";
import Img3 from "../../img/cls_popup_menu.svg";
import burgerList from "./popUpList.js";

function PopupFn({ setTrigger, isOpen }) {
    return (
        isOpen && (
            <div className="popup">
                <div className="popup__menu-wrapper">
                    <button
                        className="popup__close-btn"
                        onClick={() => setTrigger((prev) => !prev)}>
                        <span className="popup__btn-title">닫다</span>
                        <img src={Img3} alt="cls_btn" />
                    </button>
                    <div></div>
                    <div className="burger__list">
                        {burgerList.map((burgerItem) => (
                            <a
                                key={burgerItem.title}
                                className={burgerItem.className}
                                href={burgerItem.href}>
                                {burgerItem.title}
                            </a>
                        ))}
                    </div>
                    <div className="burger__contact-items">
                        <div className="burger__list-tel">+86 000 000 000</div>
                        <div className="burger__list-tel">+996 556 170 878</div>
                        <div className="burger__list-mail">
                            tourist@gmail.com
                        </div>
                        <div></div>
                        <div className="social">
                            <button className="social__btn social__btn-wsp"></button>
                            <button className="social__btn social__btn-tlg"></button>
                            <button className="social__btn social__btn-ist"></button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    );
}

export default PopupFn;
