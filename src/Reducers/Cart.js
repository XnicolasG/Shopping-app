export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CartActionTypes = {
    addToCart : 'ADD_TO_CART',
    removeFromCart : 'REMOVE_FROM_CART',
    clearCart: 'CLEAR_CART'
}

const UpdateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CartReducer = (state, action) => {

    const { type: actionType, payload: actionPayload } = action
    
    switch (actionType) {
        case CartActionTypes.addToCart: {
            const { id } = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState;
            }
            const newState = [
                ...state,
                {
                    ...actionPayload, //producto
                    quantity: 1
                }
            ];
            // agregamos como valor a localStorage el payload mas quantity
            UpdateLocalStorage(newState);
            return newState;
        }
        case CartActionTypes.removeFromCart:{
            const { id } = actionPayload
            return state.filter(item => item.id !== id)
        }
        case CartActionTypes.clearCart:{
            return initialState
        }
    }
    return state
}