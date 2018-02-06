import Home from '../pages/home/Home';
import Item from '../pages/item/Item';
import Cart from '../pages/cart/Cart';
import ThankYou from '../pages/thank-you/ThankYou';

const home = {
    path: '/',
    component: Home,
    exact: true
};

const product = {
    path: '/item/:id',
    component: Item
};

const cart = {
    path: '/cart',
    component: Cart
};

const thankYou = {
    path: 'thank-you',
    component: ThankYou
};

export default [
    home,
    product,
    cart,
    thankYou
];
