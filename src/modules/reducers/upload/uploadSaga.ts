import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, take } from 'redux-saga/effects';
import { postUploadFileAPI } from '../../../api/upload';
import { createFile, updateFile, uploadFile } from './upload';
import { buffers, END, eventChannel, EventChannel } from 'redux-saga';
import instance from '../../../client';
import { createEmptyFile } from './uploadHelper';

function* watchUpload(action: PayloadAction<{ file: File }>) {
  const { file } = action.payload;
  const emptyFile = createEmptyFile(Math.random());
  Object.assign(emptyFile, { name: file.name });

  const id = emptyFile.id;
  yield put(createFile(emptyFile));
  const channel = yield call(createFileUploadChannel, file);

  while (true) {
    const { percent, success } = yield take(channel);

    if (success) {
      console.log(percent);
      yield put(
        updateFile({
          type: 'test-image',
          upload_at: new Date().toISOString(),
          verified: true,
          completed: true,
        }),
      );
    } else {
      yield put(
        updateFile({
          id,
          progress: percent,
        }),
      );
    }
  }
}

function createFileUploadChannel(file: File): EventChannel<any> {
  const formData = new FormData();
  formData.append('image', file);

  return eventChannel((emitter) => {
    function onUploadProgress(progressEvt: ProgressEvent) {
      const { lengthComputable, loaded, total } = progressEvt;
      if (lengthComputable) {
        const percent = loaded / total;
        emitter({ percent });
      }
    }
    instance
      .post(`https://api.imgbb.com/1/upload?key=828fda1cb3179fa6f4e860f42b565237`, formData, { onUploadProgress })
      .then((res) => {
        emitter({ success: true });
        emitter(END);
      })
      .catch((error) => error.response);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, buffers.sliding(2));
}

function* uploadSaga() {
  yield takeEvery(uploadFile.type, watchUpload);
}

export default uploadSaga;
