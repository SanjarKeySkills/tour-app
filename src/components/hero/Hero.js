import React from "react";
import "./hero.css";

const hero = () => {
    return (
        <div className="container">
            <div className="hero__img-wrapper">
                <div className="hero__items">
                    <div className="hero__title">
                        <h1>놀라운 여행 일정</h1>
                        {/* Удивительный туристический маршрут */}
                    </div>
                    <div className="hero__text-wrapper">
                        <p className="hero__text">
                            대한민국의 귀빈이 되십시오. 키르기스스탄의 산악
                            유목민
                        </p>
                        {/* Стань почетным гостем из Республики Корея в
                                горном кочевом мире Кыргызстана */}
                    </div>
                    <button className="hero__button">투어 예약</button>
                </div>
            </div>
        </div>
    );
};

export default hero;
