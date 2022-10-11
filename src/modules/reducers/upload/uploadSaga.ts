import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { updateFile, uploadFile } from './upload';

function* uploadFileSaga(action: PayloadAction<{ file: File }>) {
  const { file } = action.payload;
  const formData = new FormData();
  formData.append('file', file);
  yield delay(2000);
  yield put(
    updateFile({
      id: 1,
      name: 'fileman',
      type: 'fileman',
    }),
  );
}

function* uploadSaga() {
  yield takeEvery(uploadFile.type, uploadFileSaga);
}

export default uploadSaga;
