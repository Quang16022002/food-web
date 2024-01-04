// handleCart.js

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case 'ADDITEM':
            const existingProduct = state.find((x) => x.id === product.id);
            if (existingProduct) {
                return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }
        case 'DELITEM':
            return state.filter((item) => item.id !== action.payload.id);

        case 'INCREASE_QTY':
            return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));

        case 'DECREASE_QTY':
            const existingItemToDecrease = state.find((x) => x.id === product.id);
            if (existingItemToDecrease && existingItemToDecrease.qty > 1) {
                return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty - 1 } : x));
            } else {
                return state.filter((x) => x.id !== product.id);
            }

        default:
            return state;
    }
};

export default handleCart;
