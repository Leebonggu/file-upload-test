export interface FileInfo {
  id: string | number | null;
  name: string;
  type: string | null;
  side?: 'front' | 'rear';
  upload_at?: string | Date;
  verified?: boolean;
}

interface FileListProps {
  files?: FileInfo[];
  fileDelete: (id: string | number | null) => void;
}

function FileList({ files, fileDelete }: FileListProps) {
  if (!files?.length) return <div>파일이 비어있습니다.</div>;

  return (
    <>
      {files?.map((file) => (
        <div key={file.id} onClick={() => fileDelete(file.id)}>
          <span>{file.name}</span>
          <span>삭제</span>
        </div>
      ))}
    </>
  );
}

export default FileList;
