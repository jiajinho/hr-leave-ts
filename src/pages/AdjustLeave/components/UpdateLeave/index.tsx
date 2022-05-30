import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Checks } from '../../types';

import Adjust from './components/Adjust';
import DoubleConfirm from './components/DoubleConfirm';

const Wrapper = styled.div`
`;

export default ({
  checkboxes,
  visible,
  setVisible
}: {
  checkboxes: Checks,
  visible: boolean,
  setVisible: (b: boolean) => void
}) => {

  const [doubleConfirm, setDoubleConfirm] = useState(false);

  const [leave, setLeave] = useState("0");
  const [comments, setComments] = useState("");

  const onDoubleConfirm = () => {
    console.log("double confirm!");
  }

  return (
    <Wrapper>
      {!doubleConfirm ?
        <Adjust
          checkboxes={checkboxes}
          leave={[leave, setLeave]}
          comments={[comments, setComments]}
          setVisible={setVisible}
          setDoubleConfirm={setDoubleConfirm}
        /> :
        <DoubleConfirm
          setDoubleConfirm={setDoubleConfirm}
          onDoubleConfirm={onDoubleConfirm}
        />
      }
    </Wrapper>
  );
}