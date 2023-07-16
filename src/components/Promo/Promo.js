import React from "react";
import "./promo.css";
import promoImg from "../../img/promo_hills.png";

const Promo = () => {
    return (
        <div className="container">
            <div className="promo_wrapper">
                <img className="promoImg" src={promoImg} alt="promoImg" />
                <div className="promo__items_1">
                    <ul className="li">산 트레킹</ul>
                    {/* Трекинг в горах */}
                    <ul className="li">산악 호수</ul>
                    {/* Горные озера */}
                    <ul className="li">유르트 마을</ul>
                    {/* Юрточный городок */}
                </div>
                <div className="promo__items_2">
                    <ul className="li">등산</ul>
                    {/* Альпинизм */}
                    <ul className="li">전통과 요리</ul>
                    {/* Традиции и кухня */}
                    <ul className="li">승마</ul>
                    {/* Катание на лошадях */}
                </div>
            </div>
        </div>
    );
};

export default Promo;
