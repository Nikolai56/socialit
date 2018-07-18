import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
    <nav className="nav1 clearfix">
        <div className="container">
            <div className="yellow-button">
                <a data-toggle="modal" data-target="#myModal" href="">Закажите обратный звонок</a>
            </div>

            <div className="menu_toggle">
                Меню
            </div>
            <ul className="menu_list">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">Новости</Link></li>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/products">Работы</Link></li>
                <li><Link to="/products">Контакты</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar
