import React from 'react';

import Api from '../../services/Api';
import HomeItem from './home-item/HomeItem';
import './home.css';

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        const api = new Api();

        api.call('get', 'data/data.json')
            .then(res => {
                this.setState({
                    products: res.data
                });
            });
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        {
                            this.state.products.map(product => {
                                return (
                                    <div
                                        key={product._id}
                                        className="col-md-4 col-sm-12"
                                    >
                                        <HomeItem { ...product } />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
