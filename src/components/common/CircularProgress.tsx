import React from 'react';
import styled from 'styled-components/macro';
import useMeasure from 'react-use-measure';

export const Wrapper = styled.div`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;

  position: relative;
`;

export const SVG = styled.svg`
  aspect-ratio: 1/1;
  height: 100%;
  width: auto;

  transform: rotate(-90deg);
`;

const Path = styled.circle(({ $percentage = 100 }: {
  $percentage?: number
}) => `
  stroke-width: 10;

  stroke-dasharray: 440;
  stroke-dashoffset: ${(1 - ($percentage / 100)) * 440};
`);

const Text = styled.p(({ $fontSize }: {
  $fontSize: number
}) => `
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-family: var(--font);
  font-weight: 500;
  ${$fontSize ? `font-size: ${$fontSize}rem` : ''};
`);

export type Line = {
  color: string,
  percentage: number
}

export default ({ background = "#ddd", lines, total }: {
  background?: string,
  lines: Line[],
  total: number
}) => {
  const [ref, bounds] = useMeasure();

  return (
    <Wrapper ref={ref}>
      <SVG width={150} height={150} viewBox="0 0 150 150" fill="none">
        <Path cx={75} cy={75} r={70} stroke={background} />

        {lines && lines.map(((line, i) =>
          <Path
            key={i}
            cx={75} cy={75} r={70}
            stroke={line.color}
            $percentage={line.percentage}
          />
        ))}
      </SVG>

      <Text $fontSize={bounds.width / 5}>
        {`${total}%`}
      </Text>
    </Wrapper>
  );
}