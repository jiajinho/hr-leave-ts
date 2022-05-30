import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 25/25;
  height: auto;
  width: auto;
`;

const Trash = ({ color = "black", onClick }: {
  color?: string,
  onClick?: () => void
}) => (
  <Wrapper
    width={25} height={25}
    viewBox="0 0 25 25"
    fill="none"
    onClick={onClick}
  >
    <path fill={color} d="M21.4408 5.57766C19.8308 5.41766 18.2208 5.29766 16.6008 5.20766V5.19766L16.3808 3.89766C16.2308 2.97766 16.0108 1.59766 13.6708 1.59766H11.0508C8.72076 1.59766 8.50076 2.91766 8.34076 3.88766L8.13076 5.16766C7.20076 5.22766 6.27076 5.28766 5.34076 5.37766L3.30076 5.57766C2.88076 5.61766 2.58076 5.98766 2.62076 6.39766C2.66076 6.80766 3.02076 7.10766 3.44076 7.06766L5.48076 6.86766C10.7208 6.34766 16.0008 6.54766 21.3008 7.07766C21.3308 7.07766 21.3508 7.07766 21.3808 7.07766C21.7608 7.07766 22.0908 6.78766 22.1308 6.39766C22.1608 5.98766 21.8608 5.61766 21.4408 5.57766Z" />
    <path fill={color} d="M19.6008 8.48766C19.3608 8.23766 19.0308 8.09766 18.6908 8.09766H6.05084C5.71084 8.09766 5.37084 8.23766 5.14084 8.48766C4.91084 8.73766 4.78084 9.07766 4.80084 9.42766L5.42084 19.6877C5.53084 21.2077 5.67084 23.1077 9.16084 23.1077H15.5808C19.0708 23.1077 19.2108 21.2177 19.3208 19.6877L19.9408 9.43766C19.9608 9.07766 19.8308 8.73766 19.6008 8.48766ZM14.0308 18.0977H10.7008C10.2908 18.0977 9.95084 17.7577 9.95084 17.3477C9.95084 16.9377 10.2908 16.5977 10.7008 16.5977H14.0308C14.4408 16.5977 14.7808 16.9377 14.7808 17.3477C14.7808 17.7577 14.4408 18.0977 14.0308 18.0977ZM14.8708 14.0977H9.87084C9.46084 14.0977 9.12084 13.7577 9.12084 13.3477C9.12084 12.9377 9.46084 12.5977 9.87084 12.5977H14.8708C15.2808 12.5977 15.6208 12.9377 15.6208 13.3477C15.6208 13.7577 15.2808 14.0977 14.8708 14.0977Z" />
  </Wrapper>
);

export default Trash;