import {all, put} from 'redux-saga/effects';
import {takeLatest} from '@redux-saga/core/effects';
import {
  FIND_TOP_ALBUMS,
  FIND_TOP_ALBUMS_SUCCESS,
  FIND_TOP_ALBUMS_FAIL,
  FIND_TOP_SONGS,
  FIND_TOP_SONGS_SUCCESS,
  FIND_TOP_SONGS_FAIL,
} from '../actions/songs';

import {
  findTopAlbumsApi,
  findTopSongsApi,
} from '../../api';

import { APP_API_CALL_FAIL } from '../../config';

function* findTopAlbumsSaga(){
  try{
    const result = yield findTopAlbumsApi();
    yield put({type: FIND_TOP_ALBUMS_SUCCESS, albums: result});
  } catch (e) {
    yield put({type: FIND_TOP_ALBUMS_FAIL});
    yield put({
      type: APP_API_CALL_FAIL,
      message: 'Error when find albums',
      err: e.message
    });
  }
}

function* findTopSongsSaga(){
  try{
    const result = yield findTopSongsApi();
    yield put({type: FIND_TOP_SONGS_SUCCESS, songs: result});
  } catch (e) {
    yield put({type: FIND_TOP_SONGS_FAIL});
    yield put({
      type: APP_API_CALL_FAIL,
      message: 'Error when find albums',
      err: e.message
    });
  }
}

export function* watchFindTopAlbums() {
  yield takeLatest( FIND_TOP_ALBUMS, findTopAlbumsSaga);
}

export function* watchFindTopSongs() {
  yield takeLatest( FIND_TOP_SONGS, findTopSongsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFindTopAlbums(),
    watchFindTopSongs(),
  ]);
}
