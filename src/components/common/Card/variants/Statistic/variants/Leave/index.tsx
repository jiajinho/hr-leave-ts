import React from 'react';
import styled from 'styled-components/macro';

import type { Leave } from './types';

import { Wrapper as _Wrapper } from '../../../../styled';
import CircularProgress, { Wrapper as _CircularProgress } from '../../../../../../lib/CircularProgress';
import Footer from './components/Footer';
import BodyContent from './components/BodyContent';

export const Wrapper = styled(_Wrapper)`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
`;

const ProgressContainer = styled.div`
  flex-grow: 1;

  margin: 0 20rem;
  display: flex;
  justify-content: end;

  ${_CircularProgress} {
    height: 120rem;
  }
`;

export default ({ title, consumed, remaining, leaves, onViewClick }: {
  title: string,
  consumed: string,
  remaining: string,
  leaves: Leave[],
  onViewClick?: () => void
}) => {
  return (
    <Wrapper>
      <Body>
        <BodyContent
          title={title}
          consumed={consumed}
          remaining={remaining}
        />

        <ProgressContainer>
          <CircularProgress
            background="#ccc"
            lines={leaves}
          />
        </ProgressContainer>
      </Body>

      <Footer
        legends={leaves}
        onViewClick={onViewClick}
      />
    </Wrapper>
  );
}
