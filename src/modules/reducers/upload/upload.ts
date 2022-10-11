import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileInfo } from '../../../components/FileList';

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
      updateFile: (state, action: PayloadAction<FileInfo>) => {
        state.files.push(action.payload);
      },
      removeFile: (state, action: PayloadAction<{ id: number }>) => {
        return {
          ...state,
          files: state.files.filter((file) => file.id !== action.payload.id),
        };
      },
    },
  });

const uploadSlice = createUploadSlice(initialState);

const uploadFile = createAction('@@UPLOAD/uploadFile', (file) => ({ payload: { file } }));

const { updateFile, removeFile } = uploadSlice.actions;

export { updateFile, removeFile, uploadFile };

export default uploadSlice.reducer;
