import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 2px;
  background: lightgray;
`;

const Bar = styled.div`
  top: 0;
  left: 0;
  /* position: absolute; */
  padding: 10px;
  margin: 10px;
  width: 50%;
  background-color: gray;
  border-radius: 10px;
`;

function ProgressBar() {
  return (
    <Container>
      <Bar />
    </Container>
  );
}

export default ProgressBar;
