import {
  FIND_TOP_ALBUMS_SUCCESS,
  FIND_TOP_SONGS_SUCCESS,
  APPLY_FILTER_RESULTS,
  ADD_TO_FAVORITE,
} from '../actions/songs';
import {createSelector} from 'reselect';

const initState = {
  albums:[],
  songs:[],
  filter:[],
  favorite:[],
};

export const SongsReducer = (state = initState, action) => {
  switch (action.type) {
    case FIND_TOP_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums
      };
    case FIND_TOP_SONGS_SUCCESS:
        return {
          ...state,
          songs: action.songs
        };
    case APPLY_FILTER_RESULTS:
        return {
          ...state,
          filter: action.filter
        };   
    case ADD_TO_FAVORITE:
      return {
        ...state,
        filter: action.filter
      };   
    default:
      return state;
  }
}

const albumsSelector = state => state.songs.albums;
const songsSelector = state => state.songs.songs;
const filterSelector = state => state.songs.filter;


export const getAlbums = createSelector(
  albumsSelector,
  albums => albums
);

export const getSongs = createSelector(
  songsSelector,
  songs => songs
);

export const getFilter = createSelector(
  filterSelector,
  filter => filter
);
