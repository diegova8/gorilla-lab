import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import classnames from 'classnames';

import { home } from '../../routing/routes';
import './header.css';
import logo from '../../images/gl-logo.png';

class Header extends React.Component {
    render() {
        const headerMod = classnames({
            header: true,
            'header--transparent': this.props.location.pathname === home.path
        });

        return (
            <header className={headerMod}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header__container">
                                <Link to="/"><img src={logo} className="header__logo" alt="gl logo" /></Link>
                                <Link to="/cart" className="header__cart">(0) Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
