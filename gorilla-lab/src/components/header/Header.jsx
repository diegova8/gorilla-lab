import React from 'react';
import { Link } from 'react-router-dom'
import './header.css';
import logo from '../../images/gl-logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container">
                    <Link to="/"><img src={logo} className="header__logo" alt="gl logo" /></Link>
                    <Link to="/cart"><p className="header__cart">(0) Cart</p></Link>
                </div>
            </header>
        );
    }
}
