import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main';
import { getProductList, initialProductList } from '../../App/action';

const mapStateToProps = (state) => ({
    ...state.appReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getProductList,
            initialProductList
        },
        dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
