import { connect } from 'react-redux';
import TabContent from '../TabContent';
import { 
    findTopAlbums,
    findTopSongs,
    addToFavorite
} from "../redux/actions/songs";
  
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
    null,
    mapDispatchToProps
)(TabContent);