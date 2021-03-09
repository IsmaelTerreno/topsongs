import { connect } from 'react-redux';
import TabContent from '../TabContent';
import { 
    findTopAlbums,
    findTopSongs,
    loadFavorites,
    setView,
} from "../redux/actions/songs";
import { 
    VIEW_TOP_ALBUMS,
    VIEW_TOP_SONGS,
    VIEW_FAVORITES,
} from "../redux/reducers/songs";
  
const mapDispatchToProps = dispatch => {
    return {
        onClickTopAlbums: () => {
            dispatch(findTopAlbums());
            dispatch(setView(VIEW_TOP_ALBUMS));
        },
        onClickTopSongs: () => {
            dispatch(findTopSongs());
            dispatch(setView(VIEW_TOP_SONGS));
        },
        onClickFavorite: () => {
            dispatch(loadFavorites());
            dispatch(setView(VIEW_FAVORITES));
        },
    };
};


export default connect(
    null,
    mapDispatchToProps
)(TabContent);