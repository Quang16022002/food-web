export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};
export const delCart = (productId) => {
    return {
        type: 'DELITEM',
        payload: { id: productId },
    };
};

export const increaseQty = (productId) => ({
    type: 'INCREASE_QTY',
    payload: { id: productId },
});

export const decreaseQty = (productId) => ({
    type: 'DECREASE_QTY',
    payload: { id: productId },
});

export const removeItem = (productId) => ({
    type: 'REMOVE_ITEM',
    payload: { id: productId },
});
