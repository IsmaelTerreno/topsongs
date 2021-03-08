import {
  FIND_TOP_ALBUMS_SUCCESS,
  FIND_TOP_SONGS_SUCCESS,
  APPLY_FILTER_RESULTS,
  ADD_TO_FAVORITE,
} from '../actions/songs';
import {createSelector} from 'reselect';

export const TOP_ALBUMS_FILTER = 'TOP_ALBUMS_FILTER';
export const TOP_SONGS_FILTER = 'TOP_SONGS_FILTER';

const initState = {
  albums:[],
  songs:[],
  filter:{
    fullTextSearch:'',
    type: TOP_ALBUMS_FILTER,
  },
  favorite:[],
  currentResult: [],
};

export const SongsReducer = (state = initState, action) => {
  switch (action.type) {
    case FIND_TOP_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        currentResult: action.albums,
        filter:{
          fullTextSearch:'',
          type: TOP_ALBUMS_FILTER,
        }
      };
    case FIND_TOP_SONGS_SUCCESS:
        return {
          ...state,
          songs: action.songs,
          currentResult: action.songs,
          filter:{
            fullTextSearch:'',
            type: TOP_SONGS_FILTER,
          }
        };
    case APPLY_FILTER_RESULTS:
        const dataToFilter = (state.filter.type === TOP_ALBUMS_FILTER) ? state.albums : state.songs;
        const filterResult = 
          (action.fullTextSearch) ? dataToFilter.filter(
              item => item.title.toLowerCase().indexOf(action.fullTextSearch.toLowerCase()) > -1): dataToFilter;
        return {
          ...state,
          currentResult: filterResult,
          filter: {
            ...state.filter,
            fullTextSearch: action.fullTextSearch,
          },
        };   
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: action.favorite
      };   
    default:
      return state;
  }
}

const albumsSelector = state => state.songs.albums;
const songsSelector = state => state.songs.songs;
const filterSelector = state => state.songs.filter;
const favoriteSelector = state => state.songs.favorite;
const currentResultSelector = state => state.songs.currentResult;


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

export const getFavorite = createSelector(
  favoriteSelector,
  favorite => favorite
);

export const getCurrentResult = createSelector(
  currentResultSelector,
  currentResult => currentResult
);