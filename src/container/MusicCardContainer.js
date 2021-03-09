import { connect } from 'react-redux';
import MusicCard from '../component/MusicCard';
import { addToFavorite, loadFavorites } from "../redux/actions/songs";
import { getFavorite, getView, VIEW_FAVORITES } from "../redux/reducers/songs";

const mapStateToProps = state => {
    return {
        favorites: getFavorite(state),
        view: getView(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClickFavorite: (music, view) => {
            dispatch(addToFavorite(music));
            if(VIEW_FAVORITES === view){
                dispatch(loadFavorites());
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicCard);