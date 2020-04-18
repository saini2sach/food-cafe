import Actions from "../constants/actionTypes";

export const getProductList = () => async dispatch => {
    try {
        const middleResponse = await fetch(' https://demo6817798.mockable.io/getproductdetail');
        let response;
        if (middleResponse.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            response = await middleResponse.json();
        } else {
            alert("HTTP-Error: " + response.status);
        }
        console.log("getProductList", response);
        dispatch({
            type: Actions.SET_PRODUCT_DATA,
            payload: response
        });
    } catch (err) {
        console.log(err);
    }
};

export const handleSearch = (searchStr) => (dispatch) => {
    dispatch({
        type: Actions.HANDLE_SEARCH,
        payload: searchStr
    })
}

export const applyFilter = (arr) => (dispatch) => {
    dispatch({
        type: Actions.HANDLE_FILTER,
        payload: arr
    })
}

export const initialProductList = () => (dispatch) => {
    dispatch({
        type: Actions.EMPTY_PRODUCT_LIST
    })
}