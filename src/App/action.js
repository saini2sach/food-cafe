import Actions from "../constants/actionTypes";

export const getProductList = () => async dispatch => {
    try {
        const middleResponse = await fetch(' http://demo6817798.mockable.io/getproductdetail');
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
