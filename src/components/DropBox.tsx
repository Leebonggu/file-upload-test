import { forwardRef } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import type { DragEvent, ChangeEvent, MouseEvent } from 'react';
import { UPLOAD_LIMIT } from '../constants';

interface Props {
  isOn: boolean;
  uploadedFileCount: number;
  onDragEnter: (e: DragEvent) => void;
  onDrop: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
  onDragOver: (e: DragEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
}

const DropBox = forwardRef<HTMLInputElement, Props>(
  ({ isOn, uploadedFileCount, onDragOver, onDrop, onDragLeave, onChange, onClick }: Props, ref) => {
    const isFull = uploadedFileCount === UPLOAD_LIMIT;
    console.log(isFull);
    return (
      <div
        className={`flex flex-col relative w-full h-60 border-blue-300 border-2 rounded ${
          isOn ? 'bg-blue-200' : 'bg-white'
        } flex justify-center items-center hover:opacity-60`}
      >
        <div className="w-20 h-20">
          <AiOutlineUpload className="w-full h-full" />
        </div>
        <label>{isFull ? '모든 파일을 업르도했습니다' : `파일을 업로드 해주세요 ${uploadedFileCount} / ${UPLOAD_LIMIT}`}</label>
        <input
          type="file"
          style={{
            position: 'absolute',
            opacity: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          multiple
          className={`${isFull ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          ref={ref}
          disabled={isFull}
          onChange={onChange}
          onClick={onClick}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        />
      </div>
    );
  },
);

export default DropBox;
