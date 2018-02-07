import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../images/gl-logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Link to="/"><img src={logo} className="footer__logo" alt="img" /></Link>
            </footer>
        );
    }
}
