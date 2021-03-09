import { connect } from 'react-redux';
import TabContent from '../TabContent';
import { 
    findTopAlbums,
    findTopSongs,
    loadFavorites
} from "../redux/actions/songs";
  
const mapDispatchToProps = dispatch => {
    return {
        onClickTopAlbums: () => {
            dispatch(findTopAlbums());
        },
        onClickTopSongs: () => {
            dispatch(findTopSongs());
        },
        onClickFavorite: () => {
            dispatch(loadFavorites());
        },
    };
};


export default connect(
    null,
    mapDispatchToProps
)(TabContent);