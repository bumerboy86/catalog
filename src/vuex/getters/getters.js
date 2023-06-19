export default {
    PRODUCTS(state) {
        return state.products;
    },
    CART(state) {
        return state.cart;
    },
    GET_TOTAL_PRODUCTS_CART(state) {
        if(state.cart.length) {
            const arr = [...state.cart];
            return arr.reduce((total, item) => {
                // eslint-disable-next-line no-prototype-builtins
                if (item.hasOwnProperty('quantity')) {
                    return total + item.quantity;
                }
                return total;
            }, 0);
        } else {
            return 0;
        }
    }
}