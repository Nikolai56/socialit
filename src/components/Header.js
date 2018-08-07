import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => (
    <header>
        <div className="container">
            <div className="col-md-3">
                <NavLink to="/">
                    <div className="logo">
                        <img src={logo} alt="Socialit design" />
                    </div>
                </NavLink>
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
