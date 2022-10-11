import { forwardRef } from 'react';
import type { DragEvent, ChangeEvent } from 'react';

interface Props {
  isOn: boolean;
  onDragEnter: (e: DragEvent) => void;
  onDrop: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
  onDragOver: (e: DragEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DropBox = forwardRef<HTMLInputElement, Props>(({ isOn, onDragOver, onDrop, onDragLeave, onChange }: Props, ref) => {
  return (
    <div
      style={{
        position: 'relative',
      }}
      className={`w-60 h-60 border-blue-400 border-2 rounded ${isOn ? 'bg-blue-200' : 'bg-white'} flex justify-center items-center`}
    >
      <div>DND File</div>
      <input
        type="file"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          opacity: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        multiple
        ref={ref}
        onChange={onChange}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        accept="image/*"
      />
    </div>
  );
});

export default DropBox;
