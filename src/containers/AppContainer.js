import { connect } from 'react-redux';
import App from '../App';
import { 
    findTopAlbums,
    findTopSongs,
    applyFilterResult,
} from "../redux/actions/songs";
import { 
    getAlbums,
    getSongs,
    getFilter,
} from "../redux/reducers/songs";

const mapStateToProps = state => {
    return {
        topAlbums: getAlbums(state),
        topSongs: getSongs(state),
        filter: getFilter(state),
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => {
            dispatch(findTopAlbums());
        },
        findTopSongs: () => {
            dispatch(findTopSongs());
        },
        onSearch: (filter) => {
            dispatch(applyFilterResult(filter));
        },
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);