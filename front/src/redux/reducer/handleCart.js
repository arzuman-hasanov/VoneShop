import * as actionTypes from '../action/action-types/actionTypes';

const cart = [];

const handleCart = (state = cart, action) => {

    const product = action.payload;

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Check if product already exists in cart
            const productExists = state.find(item => item.id === product.id);

            if (productExists) {
                // If product exists, increase quantity
                return state.map(item => {
                    if (item.id === product.id) {
                        item.quantity += 1;
                    }
                    return item;
                });
            } else {
                // If product does not exist, add it to cart
                return [...state, { ...product, quantity: 1 }];
            }
        case actionTypes.REMOVE_FROM_CART:
            // Check if product exists in cart
            const productExistsInCart = state.find(item => item.id === product.id);

            if (productExistsInCart) {
                // If product exists, decrease quantity
                return state.map(item => {
                    if (item.id === product.id) {
                        item.quantity -= 1;
                    }
                    return item;
                }
                ).filter(item => item.quantity > 0);
            } else {
                // If product does not exist, return cart
                return state;
            }
        default:
            return state;
    }
}

export default handleCart;