import React from 'react';
import logo from '../img/logo.png';
import Link from 'gatsby-link';

const Header = () => (
    <header>
        <div className="container">
            <div className="col-md-3">
                <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="Socialit design" />
                    </div>
                </Link>
            </div>
            <div className="wrapper-hf">
                <div className="col-md-3">
                    <p className="phone">8(495)662-59-03</p>
                    <p>Телефон для Москвы и подмосковья</p>
                </div>
                <div className="col-md-3 b">
                    <p className="phone">8-800-555-82-63</p>
                    <p className="nbsp">Бесплатный звонок по России</p>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
