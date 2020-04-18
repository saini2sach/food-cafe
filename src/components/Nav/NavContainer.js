import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = (state) => ({
    ...state.addressDetailReducer
})


export default connect(mapStateToProps)(Nav);
