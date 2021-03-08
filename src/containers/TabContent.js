import { connect } from 'react-redux';
import TabContent from '../TabContent';
import { 
    findTopAlbums,
    findTopSongs,
    addToFavorite
} from "../redux/actions/songs";
import { 
    getAlbums,
    getSongs,
    getFavorite,
} from "../redux/reducers/songs";

const mapStateToProps = state => {
    return {
        topAlbums: getAlbums(state),
        topSongs: getSongs(state),
        favorite: getFavorite(state),
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        onClickTopAlbums: () => {
            dispatch(findTopAlbums());
        },
        onClickTopSongs: () => {
            dispatch(findTopSongs());
        },
        onClickFavorite: (song) => {
            dispatch(addToFavorite(song));
        },
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabContent);