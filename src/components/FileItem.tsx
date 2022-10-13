import React from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FileInfo } from './FileList';
import ProgressBar from './ProgressBar';

interface Props {
  file: FileInfo;
  fileDelete: (id: string | number | null) => void;
}

function FileItem({ file, fileDelete }: Props) {
  return (
    <div className="h-20 my-3 p-2 flex flex-col border-2 border-blue-300 rounded" key={file.id}>
      <div className="flex">
        <div className="flex justify-center items-center pr-3">
          <AiOutlineFileAdd />
        </div>
        <div className="flex-grow flex justify-between">
          <span>{file.name}</span>
          <span className="cursor-pointer" onClick={() => fileDelete(file.id)}>
            삭제
          </span>
        </div>
      </div>
      <ProgressBar percent={file.progress} />
    </div>
  );
}

export default FileItem;
