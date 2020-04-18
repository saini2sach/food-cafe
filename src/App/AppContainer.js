import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "./App";
import { getProductList } from './action';

const mapStateToProps = state => ({
    ...state.appReducer
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getProductList
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
