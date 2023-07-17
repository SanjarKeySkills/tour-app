import React from "react";
import "./promo.css";
import promoImg from "../../img/promo_hills.png";
import promoList from "./promoList.js";

const Promo = () => {
    return (
        <div className="container">
            <div className="promo_wrapper">
                <img className="promoImg" src={promoImg} alt="promoImg" />
                <div className="promo__list">
                    {promoList.map((promoItem) => (
                        <a
                            key={promoItem.title}
                            className={promoItem.className}
                            href={promoItem.href}>
                            {promoItem.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Promo;
