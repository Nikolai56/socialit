import React from 'react';
import { Link } from 'gatsby';
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
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" /></svg>
                        <span style={{marginLeft: 8}}>Меню</span>
                    </div>
                    <ul className="menu_list">
                        {/*<li><Link activeClassName="active" to="/">Главная</Link></li>*/}
                        {/*<li><Link activeClassName="active" to="/about/">Новости</Link></li>*/}
                        <li><Link onClick={this.handleCloseMenu} activeClassName="active"
                                     to="/services/">Услуги</Link></li>
                        <li><Link onClick={this.handleCloseMenu} activeClassName="active" to="/">Работы</Link>
                        </li>
                        <li><Link onClick={this.handleCloseMenu} activeClassName="active"
                                     to="/contacts/">Контакты</Link></li>
                        {/*<li><Link activeClassName="active" to="/products/">Контакты</Link></li>*/}
                    </ul>
                    <Collapse isOpened={this.state.isMenuOpen}>
                        <ul className="menu_list menu_list-mobile">
                            <li><Link onClick={this.handleCloseMenu} activeClassName="active"
                                         to="/services/">Услуги</Link></li>
                            <li><Link onClick={this.handleCloseMenu} activeClassName="active"
                                         to="/">Работы</Link></li>
                            <li><Link onClick={this.handleCloseMenu} activeClassName="active"
                                         to="/contacts/">Контакты</Link></li>
                        </ul>
                    </Collapse>
                </div>
            </nav>
        );
    }
}

export default Navbar;
