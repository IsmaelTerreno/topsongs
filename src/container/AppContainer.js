import { connect } from 'react-redux';
import App from '../component/App';
import { findTopAlbums } from "../redux/actions/songs";
import { getCurrentResult } from "../redux/reducers/songs";

const mapStateToProps = state => {
    return {
        musicResult: getCurrentResult(state),
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => {
            dispatch(findTopAlbums());
        },
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);