export const addToCart = (item) => async (dispatch) => {
    const cleanItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        type: item.type,
        description: item.description,
    };

    dispatch({
        type: 'ADD_TO_CART',
        payload: cleanItem,
    });
};

export const removeFromCart = (itemId) => ({
    type: 'REMOVE_FROM_CART',
    payload: itemId,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});
