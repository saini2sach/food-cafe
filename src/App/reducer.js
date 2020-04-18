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
                    element.list = element.list.filter((listItem) => (listItem.item + ' ' + element.subhead).toLowerCase().includes(payload.toLowerCase()))
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
            if (payload.length > 0) {
                customPayload.products.forEach(element => {
                    element.list = element.list.filter((listItem) => {
                        let nonvegFilter = payload.includes('nonveg');
                        let vegFilter = payload.includes('veg');
                        let categoryFilter = payload.includes(1) || payload.includes(2) || payload.includes(3) || payload.includes(4);

                        if (categoryFilter && payload.includes(listItem.logo)) {
                            if (nonvegFilter) {
                                return listItem.nonveg || false
                            }
                            else if (vegFilter) {
                                return !listItem.nonveg
                            }
                            else {
                                return true
                            }
                        }
                        else if (!categoryFilter) {
                            if (nonvegFilter) {
                                return listItem.nonveg || false
                            }
                            else if (vegFilter) {
                                return !listItem.nonveg
                            }
                        }
                    })
                });
            }
            return {
                ...state,
                productData: customPayload
            }
        }
        default:
            return state
    }
}