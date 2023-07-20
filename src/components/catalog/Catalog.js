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
                    <a
                        href="https://drive.google.com/drive/folders/1G4yVPLI-u2-ai2G77PguPaP9d14Mf9hd?usp=drive_link"
                        className="catalog__button-a"
                        target="_blank">
                        카탈로그 열기
                    </a>
                    {/* Открыть каталог */}
                </div>
            </div>
        </div>
    );
};
export default Catalog;
