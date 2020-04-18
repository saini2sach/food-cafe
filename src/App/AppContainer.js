import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "./App";
import { getProductList, handleSearch, applyFilter } from './action';

const mapStateToProps = state => ({
    ...state.appReducer
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getProductList,
            handleSearch,
            applyFilter
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
