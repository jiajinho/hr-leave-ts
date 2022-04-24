import React, { useRef } from 'react';
import styled from 'styled-components/macro';

import type { Option } from '../types';

const Wrapper = styled.div`
  position: fixed;
  margin: 5rem 0;
  padding: 5rem 0;
  top: 0;
  left: 50%;

  background: white;
  box-shadow: 0 0 10rem 1rem #0004;
`;

const Item = styled.div`
  margin: 3rem 0;
  padding: 4rem 20rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const NoResult = styled.div`
  margin: 3rem 0;
  padding: 4rem 20rem;
  color: #ccc;
  text-align: center;
`;

export default React.forwardRef(({ options, input, addOption }: {
  options: Option[],
  input: string | null,
  addOption: (o: Option) => void
},
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const regExp = new RegExp(`^${input}`, 'i');

  const filteredList = options.filter((item) => {
    if (!input) return true;
    return regExp.test(item.display);
  });

  return (
    <Wrapper ref={ref}>
      {filteredList.length > 0 ?
        filteredList.map((item, i) =>
          <Item key={i} onClick={() => addOption(item)}>
            {item.display}
          </Item>
        )
        :
        <NoResult>The filter returned no result</NoResult>
      }
    </Wrapper>
  );
});