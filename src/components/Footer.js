import React from 'react'
import logoFoot from '../img/logo-footer.svg';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="col-md-3">
                <div className="logo">
                    <img src={logoFoot} alt="Colorfast" />
                </div>
            </div>
            <div className="wrapper-hf">
                <div className="col-md-3">
                    <p className="phone">8(495)662-59-03</p>
                    <p>Телефон для Москвы и подмосковья</p>
                </div>
                <div className="col-md-3 b">
                    <p className="phone">8-800-555-82-63</p>
                    <p className="nbsp">Бесплатный звонок по России </p>
                </div>
            </div>
            <p>© ООО «Colorfast» {new Date().getFullYear()}. Все права защищены.</p>
        </div>
    </footer>
);

export default Footer;
