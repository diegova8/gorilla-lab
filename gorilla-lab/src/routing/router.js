import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import routes from './routes';

export default () => (
    <div>
        <Header />
        <main>
            <Switch>
                {
                    routes.map((route, index) => <Route key={index} { ...route } />)
                }
            </Switch>
        </main>
        <Footer />
    </div>
);
