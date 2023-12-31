import React from "react";
import "./promo.css";
import promoImg from "../../img/promo_hills.png";
import promoList from "./promoList.js";
import promoList2 from "./promoList2";

const Promo = () => {
    return (
        <div className="container">
            <div className="promo_wrapper">
                <img className="promoImg" src={promoImg} alt="promoImg" />
                <div className="promo__list-1">
                    {promoList.map((promoItem) => (
                        <a
                            key={promoItem.title}
                            className={promoItem.className}
                            href={promoItem.href}>
                            {promoItem.title}
                        </a>
                    ))}
                </div>
                <div className="promo__list-2">
                    {promoList2.map((promoItem2) => (
                        <a
                            key={promoItem2.title}
                            className={promoItem2.className}
                            href={promoItem2.href}>
                            {promoItem2.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Promo;
