import React, { DragEvent, MutableRefObject } from 'react'

interface Props {
  isOn: boolean;
  ref?: MutableRefObject<HTMLDivElement | null>;
  onDragEnter: (e: DragEvent) => void;
  onDrop: (e: DragEvent) => void;
  onDragLeave: (e: DragEvent) => void;
  onDragOver: (e: DragEvent) => void;
}
function DropBox({
  isOn,
  ref,
  onDragOver,
  onDrop,
  onDragLeave,
}: Props
) {
  return (
    <div
      ref={ref}
      className={`w-60 h-60 border-blue-400 border-2 rounded ${isOn ? 'bg-blue-200' : 'bg-white'} flex justify-center items-center`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      DropBox
    </div>
  )
}

export default DropBox