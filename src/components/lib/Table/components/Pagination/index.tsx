import React from 'react';
import styled from 'styled-components/macro';

import CaretDownSlim, { Wrapper as _CaretDownSlim } from '../../../../svg/CaretDownSlim';
import usePagination, { delimiter } from './usePagination';

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 5rem;
`;

const Box = styled.div(({ $active = false }: { $active?: boolean }) => `
  padding: 5rem 0;
  width: 30rem;

  text-align: center;
  border: 1rem solid #ccc;
  cursor: pointer;
  transition: 0.25s border-color;

  &:hover {
    border-color: var(--primary-color);
  }

  ${$active ? `
  border-color: var(--primary-color);
  border-width: 2rem;
  color: var(--primary-color);
  font-weight: 600;
  ` : ''}
`);

const InertBox = styled(Box)`
  border-color: transparent;
  cursor: auto;

  &:hover {
    border-color: transparent;
  }
`;

const CaretBox = styled(InertBox)(({ $disabled = false }: {
  $disabled?: boolean
}) => `
  cursor: ${$disabled ? 'not-allowed' : 'pointer'};

  ${_CaretDownSlim} {
    width: 10rem;
    cursor: pointer;
  }
`);

function clamp(min: number, max: number, value: number) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export default ({ totalCount, pageSize, currentPage, onBoxClick }: {
  totalCount: number,
  pageSize: number,
  currentPage: number
  onBoxClick: (n: number) => void
}) => {

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    currentPage
  });

  const maxPage = Math.ceil(totalCount / pageSize);

  return (
    <Wrapper>
      {/**Left arrow */}
      <CaretBox
        $disabled={currentPage === 1}
        onClick={() => onBoxClick(clamp(1, maxPage, currentPage - 1))}
      >
        <CaretDownSlim
          color="var(--primary-color)"
          direction="left"
        />
      </CaretBox>

      {/**Pagination boxes */}
      {paginationRange?.map((item, i) => item.toString() === delimiter ?
        (<InertBox key={i}>
          {item}
        </InertBox>)
        :
        (<Box
          key={i}
          onClick={() => onBoxClick(item as number)}
          $active={currentPage === item}
        >
          {item}
        </Box>)
      )}

      {/**Right arrow */}
      <CaretBox
        $disabled={currentPage === maxPage}
        onClick={() => onBoxClick(clamp(1, maxPage, currentPage + 1))}
      >
        <CaretDownSlim
          color="var(--primary-color)"
          direction="right"
        />
      </CaretBox>
    </Wrapper>
  );
}