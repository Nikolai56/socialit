import React from 'react';
import Link from 'gatsby-link';
import Modal from './Modal';

const Navbar = () => (
    <nav className="nav1 clearfix">
        <div className="container">
            <Modal />
            <div className="menu_toggle">
                Меню
            </div>
            <ul className="menu_list">
                {/*<li><Link exact activeClassName="active" to="/">Главная</Link></li>*/}
                {/*<li><Link exact activeClassName="active" to="/about/">Новости</Link></li>*/}
                <li><Link exact activeClassName="active" to="/services/">Услуги</Link></li>
                <li><Link exact activeClassName="active" to="/">Работы</Link></li>
                <li><Link exact activeClassName="active" to="/contacts/">Контакты</Link></li>
                {/*<li><Link exact activeClassName="active" to="/products/">Контакты</Link></li>*/}
            </ul>
        </div>
    </nav>
);

export default Navbar
