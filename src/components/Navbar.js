import React from 'react';
import Link from 'gatsby-link';
import Modal from './Modal';

const Navbar = () => {
    function handleToggleMenu() {
        const menu = document.querySelector('.menu_list');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        } else {
            menu.classList.add('open');
        }
    }
    function handleCloseMenu() {
        const menu = document.querySelectorAll('.menu_list')[0];
        menu.classList.remove('open');
    }
    
    return (
        <nav className="nav1 clearfix">
            <div className="container">
                <Modal />
                <div className="menu_toggle" onClick={handleToggleMenu}>
                    Меню
                </div>
                <ul className="menu_list">
                    {/*<li><Link exact activeClassName="active" to="/">Главная</Link></li>*/}
                    {/*<li><Link exact activeClassName="active" to="/about/">Новости</Link></li>*/}
                    <li><Link onClick={handleCloseMenu} exact activeClassName="active" to="/services/">Услуги</Link></li>
                    <li><Link onClick={handleCloseMenu} exact activeClassName="active" to="/">Работы</Link></li>
                    <li><Link onClick={handleCloseMenu} exact activeClassName="active" to="/contacts/">Контакты</Link></li>
                    {/*<li><Link exact activeClassName="active" to="/products/">Контакты</Link></li>*/}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
