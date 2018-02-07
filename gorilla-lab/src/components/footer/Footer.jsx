import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import logo from '../../images/gl-logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer__container">
                                <Link to="/"><img src={logo} className="footer__logo" alt="img" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
