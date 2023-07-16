import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="container">
            <div className="footer__main">
                <div className="footer__info">
                    <div className="footer__contacts_kore">
                        <span>The Republic of Korea, Seoul</span>
                        <div className="footer__tel">+86 00 00 00 000</div>
                        <div className="footer__mail">ouremail@gmail.com</div>
                    </div>
                    <div className="footer__contacts_kg">
                        <span>The Kyrgyz Republic, Bishkek</span>
                        <div className="footer__tel">+996 502 513 515</div>
                        <div className="footer__mail">sanjar@gmail.com</div>
                    </div>
                    <div>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
