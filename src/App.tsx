import { DragEventHandler, useRef, useState, DragEvent } from 'react';
import FileList, { FileInfo } from './components/FileList';
import DropBox from './components/DropBox';
import Button from './components/Button';

function App() {
  const [isOn, setIsOn] = useState(false);
  const [fileList, setFileList] = useState<FileInfo[]>([]);

  const isValid = fileList.length > 0;

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOn(true);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newFile = {
      id: fileList.length + 1,
      name: `파일-${fileList.length + 1}`,
      type: null,
      upload_at: new Date(),
      verified: false,
    };
    setFileList([...fileList, newFile]);
    setIsOn(false);
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length > 2) {
      setIsOn(false);
    }
    if (e.dataTransfer.files) {
      console.log(e.dataTransfer.files);
      setIsOn(true);
    }
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOn(false);
  };

  const handleDelete = (id: string | number | null) => {
    const newFileList = fileList.filter((file) => file.id !== id);
    setFileList(newFileList);
  };

  const protectedArea = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="p-20 bg-gray-100" onDragOver={protectedArea} onDrop={protectedArea}>
      <div>
        <DropBox isOn={isOn} onDragEnter={onDragEnter} onDragOver={onDragOver} onDrop={onDrop} onDragLeave={onDragLeave} />
        <FileList files={fileList} fileDelete={handleDelete} />
        <Button disabled={!isValid}>다음으로</Button>
      </div>
    </div>
  );
}

export default App;
