import Actions from '../constants/actionTypes';

const initialState = {
    productData: {}
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case Actions.SET_PRODUCT_DATA:
            return {
                ...state,
                productData: payload
            }
        default:
            return state
    }
}