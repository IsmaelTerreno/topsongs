import { connect } from 'react-redux';
import MusicCard from '../MusicCard';
import { addToFavorite } from "../redux/actions/songs";
import { getFavorite } from "../redux/reducers/songs";

const mapStateToProps = state => {
    return {
        favorites: getFavorite(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClickFavorite: (music) => {
            dispatch(addToFavorite(music));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicCard);