import { spawn } from 'redux-saga/effects';
import uploadSaga from './reducers/upload/uploadSaga';

function* rootSaga() {
  yield spawn(uploadSaga);
}

export default rootSaga;
