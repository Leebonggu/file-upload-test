import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileInfo } from '../../../components/FileList';
import * as R from 'ramda';
// type Upload = FileInfo & { progress: number };
export interface UploadState {
  files: FileInfo[];
}
const initialState: UploadState = {
  files: [],
};

const createUploadSlice = (initialState: UploadState) =>
  createSlice({
    name: '@@UPLOAD',
    initialState,
    reducers: {
      createFile: (state, action: PayloadAction<FileInfo>) => {
        state.files.push(action.payload);
      },
      updateFile: (state, action: PayloadAction<Partial<FileInfo>>) => {
        const id = action.payload.id;
        const newState = state.files.map((file) => (file.id === id ? R.mergeRight(file, action.payload) : file));

        state.files = newState;
      },
      removeFile: (state, action: PayloadAction<{ id: string | number | null }>) => {
        return {
          ...state,
          files: state.files.filter((file) => file.id !== action.payload.id),
        };
      },
    },
  });

const uploadSlice = createUploadSlice(initialState);

const uploadFile = createAction('@@UPLOAD/uploadFile', (file) => ({ payload: { file } }));

const { updateFile, removeFile, createFile } = uploadSlice.actions;

export { updateFile, removeFile, uploadFile, createFile };

export default uploadSlice.reducer;
