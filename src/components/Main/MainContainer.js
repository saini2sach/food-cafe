import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './Main';

const mapStateToProps = (state) => ({
    ...state.appReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
