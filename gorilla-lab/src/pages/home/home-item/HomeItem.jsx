import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './home-item.css';

const propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};

class HomeItem extends React.Component {
    getPictureStyle(url) {
        return {
            backgroundImage: `url(${url})`
        };
    }

    render() {
        return (
            <Link to={`/item/${this.props._id}`} className="home-item">
                <div className="home-item__picture banner" style={this.getPictureStyle(this.props.picture)}></div>
                <div className="home-item__text-wrapper">
                    <p className="home-item__name">{this.props.name}</p>
                    <p className="home-item__price">{this.props.price}</p>
                </div>
            </Link>
        );
    }
}

HomeItem.propTypes = propTypes;

export default HomeItem;