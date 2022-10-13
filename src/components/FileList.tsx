import FileItem from './FileItem';

export interface FileInfo {
  id: string | number | null;
  name: string;
  type: string | null;
  side?: 'front' | 'rear';
  upload_at?: string | Date;
  verified?: boolean;
  progress?: number;
  completed: boolean;
}

interface FileListProps {
  files: FileInfo[];
  fileDelete: (id: string | number | null) => void;
}

function FileList({ files, fileDelete }: FileListProps) {
  const hasFile = files.length > 0;
  return (
    <div className="w-full my-4">{hasFile ? files?.map((file) => <FileItem key={file.id} file={file} fileDelete={fileDelete} />) : ''}</div>
  );
}

export default FileList;
