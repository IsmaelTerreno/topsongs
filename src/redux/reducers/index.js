import { combineReducers } from 'redux';
import { SongsReducer } from './songs';

const rootReducer = combineReducers({
  songs: SongsReducer
});

export default rootReducer;
