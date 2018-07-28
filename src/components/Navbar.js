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
                <li><Link exact activeClassName="active" to="/">Главная</Link></li>
                <li><Link exact activeClassName="active" to="/about/">Новости</Link></li>
                <li><Link exact activeClassName="active" to="/services/">Услуги</Link></li>
                <li><Link exact activeClassName="active" to="/projects/">Работы</Link></li>
                <li><Link exact activeClassName="active" to="/products/">Контакты</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar
