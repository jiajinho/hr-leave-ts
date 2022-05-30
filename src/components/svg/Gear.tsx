import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 35/36;
  height: auto;
  width: auto;
`;

export default ({ color = "black" }: {
  color?: string
}) => (
  <Wrapper
    width={35} height={36}
    viewBox="0 0 35 36"
    fill="none"
  >
    <path fill={color} d="M29.6364 13.6417C26.9228 13.6417 25.8133 11.7226 27.1627 9.36882C27.9423 8.0045 27.4775 6.26537 26.1132 5.48576L23.5195 4.00151C22.3351 3.29686 20.8058 3.71665 20.1012 4.90106L19.9363 5.18591C18.587 7.53974 16.3681 7.53974 15.0037 5.18591L14.8388 4.90106C14.1642 3.71665 12.6349 3.29686 11.4505 4.00151L8.85682 5.48576C7.4925 6.26537 7.02774 8.0195 7.80735 9.38381C9.17166 11.7226 8.06222 13.6417 5.34858 13.6417C3.78936 13.6417 2.5 14.916 2.5 16.4903V19.1289C2.5 20.6882 3.77436 21.9775 5.34858 21.9775C8.06222 21.9775 9.17166 23.8966 7.80735 26.2504C7.02774 27.6147 7.4925 29.3538 8.85682 30.1334L11.4505 31.6177C12.6349 32.3223 14.1642 31.9026 14.8688 30.7181L15.0337 30.4333C16.3831 28.0795 18.6019 28.0795 19.9663 30.4333L20.1312 30.7181C20.8358 31.9026 22.3651 32.3223 23.5495 31.6177L26.1432 30.1334C27.5075 29.3538 27.9723 27.5997 27.1927 26.2504C25.8283 23.8966 26.9378 21.9775 29.6514 21.9775C31.2106 21.9775 32.5 20.7032 32.5 19.1289V16.4903C32.485 14.931 31.2106 13.6417 29.6364 13.6417ZM17.4925 22.6822C14.8088 22.6822 12.6199 20.4933 12.6199 17.8096C12.6199 15.1259 14.8088 12.937 17.4925 12.937C20.1762 12.937 22.3651 15.1259 22.3651 17.8096C22.3651 20.4933 20.1762 22.6822 17.4925 22.6822Z" />
  </Wrapper>
);