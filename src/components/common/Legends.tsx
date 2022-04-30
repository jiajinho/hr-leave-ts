import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  & > p { 
    font-size: 12rem;
    transform: translateY(1rem);
  }
`;

const Box = styled.div(({ $bg }: { $bg: string }) => `
  aspect-ratio: 1/1;
  height: 12rem;
  width: auto;

  background: ${$bg};
`);

type Legend = {
  color: string,
  label: string
}

export default ({ data }: {
  data: Legend[]
}) => {
  return (
    <Wrapper>
      {data.map((item, i) =>
        <Item key={i}>
          <Box $bg={item.color} />
          <p>{item.label}</p>
        </Item>
      )}
    </Wrapper>
  );
}