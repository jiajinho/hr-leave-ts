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
    width={36} height={36}
    viewBox="0 0 36 36"
    fill="none"
  >
    <g>
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M18.4863 31.5781C22.1994 31.5781 25.7603 30.1031 28.3858 27.4776C31.0113 24.8521 32.4863 21.2912 32.4863 17.5781C32.4863 13.8651 31.0113 10.3041 28.3858 7.67863C25.7603 5.05312 22.1994 3.57813 18.4863 3.57812C14.7733 3.57813 11.2123 5.05312 8.58683 7.67863C5.96132 10.3041 4.48633 13.8651 4.48633 17.5781C4.48633 21.2912 5.96132 24.8521 8.58683 27.4776C11.2123 30.1031 14.7733 31.5781 18.4863 31.5781ZM20.2363 12.3281C20.2363 11.864 20.052 11.4189 19.7238 11.0907C19.3956 10.7625 18.9505 10.5781 18.4863 10.5781C18.0222 10.5781 17.5771 10.7625 17.2489 11.0907C16.9207 11.4189 16.7363 11.864 16.7363 12.3281V15.8281H13.2363C12.7722 15.8281 12.3271 16.0125 11.9989 16.3407C11.6707 16.6689 11.4863 17.114 11.4863 17.5781C11.4863 18.0423 11.6707 18.4874 11.9989 18.8156C12.3271 19.1438 12.7722 19.3281 13.2363 19.3281H16.7363V22.8281C16.7363 23.2923 16.9207 23.7374 17.2489 24.0656C17.5771 24.3937 18.0222 24.5781 18.4863 24.5781C18.9505 24.5781 19.3956 24.3937 19.7238 24.0656C20.052 23.7374 20.2363 23.2923 20.2363 22.8281V19.3281H23.7363C24.2005 19.3281 24.6456 19.1438 24.9738 18.8156C25.302 18.4874 25.4863 18.0423 25.4863 17.5781C25.4863 17.114 25.302 16.6689 24.9738 16.3407C24.6456 16.0125 24.2005 15.8281 23.7363 15.8281H20.2363V12.3281Z" />
    </g>
  </Wrapper>
);