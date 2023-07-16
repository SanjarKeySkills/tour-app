import React from "react";
import "./catalog.css";

const Catalog = () => {
    return (
        <div className="container">
            <div className="catalog__wrapper">
                <div className="catalog__items">
                    <div className="catalog__text-wrapper">
                        <p className="catalog__text">여행 일정을 확인하세요.</p>
                        {/* Ознакомьтесь с программой путешествия */}
                    </div>
                    <button className="catalog__button">카탈로그 열기</button>
                    {/* Открыть каталог */}
                </div>
            </div>
        </div>
    );
};
export default Catalog;
