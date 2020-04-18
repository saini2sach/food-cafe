import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = (state) => ({
    ...state.addReducer
})


export default connect(mapStateToProps)(Nav);
