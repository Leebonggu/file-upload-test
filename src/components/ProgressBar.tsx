import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 2px;
  background: lightgray;
  display: grid;
  grid-template-columns: 95% 5%;
`;

const Bar = styled.div`
  padding: 10px;
  margin: 5px;
  width: 50%;
  background-color: gray;
  border-radius: 10px;
`;

function ProgressBar({ percent }: { percent?: number }) {
  console.log(percent);
  return (
    <div className="py-2 grid grid-cols-12">
      <div className="bg-blue-300 w-1/2 rounded-xl p-3 my-1 col-span-11 flex items-center" />
      <div className="col-span-1 flex justify-end items-center">{percent ? percent : 0}%</div>
    </div>
  );
}

export default ProgressBar;
