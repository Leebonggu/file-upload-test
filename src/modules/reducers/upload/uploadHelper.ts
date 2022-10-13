import * as R from 'ramda';
import { FileInfo } from '../../../components/FileList';

/**
 * @param progressEvt :{}
 * lengthComputable : 수행할 작업량과 기본 프로세스에서 이미 수행한 작업량을 계산할 수 있는지 여부를 나타내는 논리(boolean) 값을 가진다. 기본 값은 false 이다.
 * loaded : 기본 프로세스에서 이미 수행한 작업량을 나타내는 값이다. 완료된 작업 비율은 속성과 ProgressEvent.prototype.total을 사용하여 계산할 수 있다. HTTP를 사용하여 리소스를 다운로드 할 때는 header 및 기타 overhead가 아닌 콘텐츠 자체의 일부만을 나타낸다. 기본 값은 0이다.
 * total : 기본 프로세스가 수행중인 총 작업량을 나타내는 unsigned long 데이터이다. HTTP를 사용하여 리소스를 다운로드할 때는 header 및 기타 overhead가 아닌 콘텐츠 자체만을 나타낸다. 기본 값은 0이다.
 */
function onUploadProgress(progressEvt: ProgressEvent) {
  const { lengthComputable, loaded, target, total } = progressEvt;
  const percent = loaded / total;
}

function createEmptyFile(id: number | string | null) {
  const prototypeObject: FileInfo = {
    id,
    name: '',
    type: null,
    side: 'front',
    upload_at: '',
    verified: false,
    progress: 0,
    completed: false,
  };
  return R.clone(prototypeObject);
}

export { onUploadProgress, createEmptyFile };
