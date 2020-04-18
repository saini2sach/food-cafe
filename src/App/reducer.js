import Actions from '../constants/actionTypes';

const initialState = {
    productData: {},
    initialPayload: {}
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case Actions.SET_PRODUCT_DATA:
            return {
                ...state,
                productData: payload,
                initialPayload: payload
            }
        case Actions.HANDLE_SEARCH: {
            let customPayload = JSON.parse(JSON.stringify(state.initialPayload));
            if (payload.length > 0) {
                customPayload.products.forEach(element => {
                    element.list = element.list.filter((listItem) => (listItem.item + ' ' + element.subhead).toLowerCase().includes(payload))
                });
            }
            else {
                customPayload = { ...state.initialPayload }
            }

            return {
                ...state,
                productData: customPayload
            }
        }

        case Actions.HANDLE_FILTER: {
            let customPayload = JSON.parse(JSON.stringify(state.initialPayload));
            debugger
            customPayload.products.forEach(element => {
                element.list = element.list.filter((listItem) => {
                    let nonvegFilter = payload.includes('nonveg');

                    if (payload.includes(listItem.logo)) {
                        if (nonvegFilter) {
                            return listItem.nonveg || false;
                        }
                        return true;
                    }
                    return false
                })
            });
            return {
                ...state,
                productData: customPayload
            }
        }
        default:
            return state
    }
}