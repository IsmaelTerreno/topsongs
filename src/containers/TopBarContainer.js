import { connect } from 'react-redux';
import TopBar from '../TopBar';
import { applyFilterResult } from "../redux/actions/songs";

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (fullTextSearch) => {
            dispatch(applyFilterResult(fullTextSearch));
        },
    };
};


export default connect(
    null,
    mapDispatchToProps
)(TopBar);