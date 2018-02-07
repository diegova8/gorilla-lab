import Home from '../pages/home/Home';
import Item from '../pages/item/Item';
import Cart from '../pages/cart/Cart';
import ThankYou from '../pages/thank-you/ThankYou';

export const home = {
    path: '/',
    component: Home,
    exact: true
};

export const product = {
    path: '/item/:id',
    component: Item
};

export const cart = {
    path: '/cart',
    component: Cart,
    exact: true
};

export const thankYou = {
    path: '/thank-you',
    component: ThankYou
};

export default [
    home,
    product,
    cart,
    thankYou
];
