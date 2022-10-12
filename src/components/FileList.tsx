import ProgressBar from './ProgressBar';
import styled from 'styled-components';

export interface FileInfo {
  id: string | number | null;
  name: string;
  type: string | null;
  side?: 'front' | 'rear';
  upload_at?: string | Date;
  verified?: boolean;
  progress?: number;
}

interface FileListProps {
  files?: FileInfo[];
  fileDelete: (id: string | number | null) => void;
}

const Container = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function FileList({ files, fileDelete }: FileListProps) {
  console.log(files);
  if (!files?.length) return <div>파일이 비어있습니다.</div>;

  return (
    <>
      {files?.map((file) => (
        <Container key={file.id} onClick={() => fileDelete(file.id)}>
          <TitleBox>
            <span>{file.name}</span>
            <span>삭제</span>
          </TitleBox>
          <ProgressBar />
        </Container>
      ))}
    </>
  );
}

export default FileList;
