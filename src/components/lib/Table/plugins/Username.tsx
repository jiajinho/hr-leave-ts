import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15rem;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  height: 40rem;
  width: auto;

  border-radius: 50%;
`;

export default ({ imgUrl, name }: {
  imgUrl: string,
  name: string
}) => {
  return (
    <Wrapper>
      <Image src={imgUrl} />
      <strong>{name}</strong>
    </Wrapper>
  );
}