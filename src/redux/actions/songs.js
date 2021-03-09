export const FIND_TOP_ALBUMS = 'FIND_TOP_ALBUMS';
export const FIND_TOP_ALBUMS_SUCCESS = 'FIND_TOP_ALBUMS_SUCCESS';
export const FIND_TOP_ALBUMS_FAIL = 'FIND_TOP_ALBUMS_FAIL';
export const FIND_TOP_SONGS = 'FIND_TOP_SONGS';
export const FIND_TOP_SONGS_SUCCESS = 'FIND_TOP_SONGS_SUCCESS';
export const FIND_TOP_SONGS_FAIL = 'FIND_TOP_SONGS_FAIL';
export const APPLY_FILTER_RESULTS = 'APPLY_FILTER_RESULTS';
export const ADD_OR_REMOVE_FROM_FAVORITE = 'ADD_OR_REMOVE_FROM_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';


export const findTopAlbums = () => {
  return {
    type: FIND_TOP_ALBUMS
  };
};

export const findTopSongs = () => {
  return {
    type: FIND_TOP_SONGS
  };
};

export const applyFilterResult = (fullTextSearch) => {
  return {
    type: APPLY_FILTER_RESULTS,
    fullTextSearch,
  };
};

export const addToFavorite = (favorite) => {
  return {
    type: ADD_OR_REMOVE_FROM_FAVORITE,
    favorite
  };
};

export const loadFavorites = () => {
  return {
    type: LOAD_FAVORITES
  };
};

