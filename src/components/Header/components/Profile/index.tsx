import React from 'react';
import styled from 'styled-components/macro';

import CaretDownSlim, { Wrapper as _CaretDownSlim } from '../../../svg/CaretDownSlim';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  ${_CaretDownSlim} { width: 12rem }
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  height: 45rem;
  width: auto;

  border-radius: 50%;
`;

const Container = styled.div`
  .name { font-weight: 600 }
  .position { font-size: 12rem }
`;

export default ({ imgSrc, name, position }: {
  imgSrc: string,
  name: string,
  position: string
}) => {


  return (
    <Wrapper>
      <Image src={imgSrc} />

      <Container>
        <p className="name">
          {name}
        </p>
        <p className="position">
          {position}
        </p>
      </Container>

      <CaretDownSlim />
    </Wrapper>
  );
}