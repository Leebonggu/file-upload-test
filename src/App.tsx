import { useRef, useState, DragEvent, ChangeEvent, MouseEvent } from 'react';
import FileList, { FileInfo } from './components/FileList';
import DropBox from './components/DropBox';
import Button from './components/Button';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { uploadFile, removeFile } from './modules/reducers/upload/upload';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [fileList, setFileList] = useState<FileInfo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { files } = useAppSelector((state) => state.upload.files);

  const isValid = files.length > 0;

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOn(true);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      Array.from(e.dataTransfer.files).forEach((file) => {
        dispatch(uploadFile(file));
      });
    }
    setIsOn(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      Array.from(e.target.files).forEach((file) => {
        dispatch(uploadFile(file));
        e.target.value = '';
      });
    }
    setIsOn(false);
  };

  const onClick = (e: MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = '';
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length > 2) {
      setIsOn(false);
    }
    if (e.dataTransfer.files) {
      setIsOn(true);
    }
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOn(false);
  };

  const handleDelete = (id: string | number | null) => {
    dispatch(removeFile({ id }));
    const newFileList = fileList.filter((file) => file.id !== id);
    setFileList(newFileList);
  };

  const protectedArea = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="p-20 bg-gray-100" style={{ minWidth: '960px', height: '100vh' }} onDragOver={protectedArea} onDrop={protectedArea}>
      <div className="max-w-6xl mx-auto">
        <div className="my-5 text-3xl font-bold">Hello Upload</div>
        <DropBox
          ref={inputRef}
          isOn={isOn}
          uploadedFileCount={files.length}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
          onChange={onChange}
          onClick={onClick}
        />
        <FileList files={files} fileDelete={handleDelete} />
        <Button disabled={!isValid}>다음으로</Button>
      </div>
    </div>
  );
}

export default App;
