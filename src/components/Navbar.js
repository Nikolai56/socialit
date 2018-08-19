import React from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import { Collapse } from 'react-collapse';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
        };
    }

    handleToggleMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        return (
            <nav className="nav1 clearfix">
                <div className="container">
                    <Modal/>
                    <div className="menu_toggle" onClick={this.handleToggleMenu} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" /></svg>
                        <span style={{marginLeft: 8}}>Меню</span>
                    </div>
                    <ul className="menu_list">
                        {/*<li><Link exact activeClassName="active" to="/">Главная</Link></li>*/}
                        {/*<li><Link exact activeClassName="active" to="/about/">Новости</Link></li>*/}
                        <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active"
                                     to="/services/">Услуги</NavLink></li>
                        <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active" to="/">Работы</NavLink>
                        </li>
                        <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active"
                                     to="/contacts/">Контакты</NavLink></li>
                        {/*<li><Link exact activeClassName="active" to="/products/">Контакты</Link></li>*/}
                    </ul>
                    <Collapse isOpened={this.state.isMenuOpen}>
                        <ul className="menu_list menu_list-mobile">
                            <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active"
                                         to="/services/">Услуги</NavLink></li>
                            <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active"
                                         to="/">Работы</NavLink></li>
                            <li><NavLink onClick={this.handleCloseMenu} exact activeClassName="active"
                                         to="/contacts/">Контакты</NavLink></li>
                        </ul>
                    </Collapse>
                </div>
            </nav>
        );
    }
}

export default Navbar;
