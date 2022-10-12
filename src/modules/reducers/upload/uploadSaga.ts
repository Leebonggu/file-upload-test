import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { postUploadFileAPI } from '../../../api/upload';
import { updateFile, uploadFile } from './upload';

function* uploadFileSaga(action: PayloadAction<{ file: File }>) {
  const { file } = action.payload;

  const formData = new FormData();
  formData.append('image', file);

  const { data, status } = yield call(postUploadFileAPI, formData, { onUploadProgress: console.log });

  if (status < 300) {
    yield put(
      updateFile({
        id: `${data.id}-${Math.random()}`,
        name: data.title,
        type: 'test-image',
        upload_at: new Date().toISOString(),
        verified: true,
      }),
    );
  }
}

// function* watchUploadProgress(channel: any) {
//   while (true) {
//     const data = yield take(channel);
//     console.log(data);
//     yield put();
//   }
//   yield console.log('watcher');
// }

function* uploadSaga() {
  yield takeEvery(uploadFile.type, uploadFileSaga);
}

export default uploadSaga;
