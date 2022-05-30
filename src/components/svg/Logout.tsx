import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
`;

export default ({ color = "black" }: {
  color?: string
}) => (
  <Wrapper
    width="35" height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M5.25 5.25C4.78587 5.25 4.34075 5.43437 4.01256 5.76256C3.68437 6.09075 3.5 6.53587 3.5 7V28C3.5 28.4641 3.68437 28.9093 4.01256 29.2374C4.34075 29.5656 4.78587 29.75 5.25 29.75C5.71413 29.75 6.15925 29.5656 6.48744 29.2374C6.81563 28.9093 7 28.4641 7 28V7C7 6.53587 6.81563 6.09075 6.48744 5.76256C6.15925 5.43437 5.71413 5.25 5.25 5.25ZM23.2628 21.5128C22.944 21.8428 22.7676 22.2849 22.7716 22.7437C22.7756 23.2025 22.9596 23.6415 23.2841 23.9659C23.6085 24.2904 24.0475 24.4744 24.5063 24.4784C24.9651 24.4824 25.4072 24.306 25.7372 23.9872L30.9873 18.7372C31.3153 18.4091 31.4996 17.964 31.4996 17.5C31.4996 17.036 31.3153 16.5909 30.9873 16.2628L25.7372 11.0128C25.5758 10.8456 25.3827 10.7123 25.1692 10.6206C24.9557 10.5289 24.7261 10.4806 24.4937 10.4786C24.2613 10.4765 24.0309 10.5208 23.8158 10.6088C23.6008 10.6968 23.4054 10.8267 23.2411 10.9911C23.0767 11.1554 22.9468 11.3508 22.8588 11.5658C22.7708 11.7809 22.7265 12.0113 22.7286 12.2437C22.7306 12.4761 22.7789 12.7057 22.8706 12.9192C22.9623 13.1327 23.0956 13.3258 23.2628 13.4872L25.5255 15.75H12.25C11.7859 15.75 11.3408 15.9344 11.0126 16.2626C10.6844 16.5908 10.5 17.0359 10.5 17.5C10.5 17.9641 10.6844 18.4092 11.0126 18.7374C11.3408 19.0656 11.7859 19.25 12.25 19.25H25.5255L23.2628 21.5128Z" />
  </Wrapper>
);