import React from 'react';
import styled from 'styled-components/macro';

import type { Status } from '../types';
import { Wrapper as _Tag } from '../../../../../components/common/Tag';

const Wrapper = styled(_Tag)`
  text-transform: capitalize;
`;

export default ({ status }: { status: Status }) => {

  let color, background;

  switch (status) {
    case "approved":
      color = "#45BF43";
      background = "#45BF4333";
      break;
    case "pending":
      color = "#F3C13E";
      background = "#F3C13E33";
      break;
    case "rejected":
      color = "#FF4242";
      background = "#FF424233";
      break;
  }


  return (
    <Wrapper
      $color={color}
      $background={background}
    >
      {status}
    </Wrapper>
  );
}