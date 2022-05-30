import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
  cursor: pointer;
`;

export default ({ color = "black", onClick }: {
  color?: string,
  onClick?: () => void
}) => {


  return (
    <Wrapper
      width={31} height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path fill={color} d="M15.5071 0C12.5404 0 9.64027 0.879735 7.17353 2.52796C4.7068 4.17618 2.78421 6.51886 1.64889 9.25975C0.513579 12.0006 0.216529 15.0166 0.795308 17.9264C1.37409 20.8361 2.8027 23.5088 4.90049 25.6066C6.99827 27.7044 9.67102 29.133 12.5807 29.7118C15.4904 30.2906 18.5065 29.9935 21.2473 28.8582C23.9882 27.7229 26.3309 25.8003 27.9791 23.3336C29.6274 20.8668 30.5071 17.9667 30.5071 15C30.5071 13.0302 30.1191 11.0796 29.3653 9.25975C28.6115 7.43987 27.5066 5.78628 26.1137 4.3934C24.7208 3.00052 23.0672 1.89563 21.2473 1.14181C19.4275 0.387987 17.4769 0 15.5071 0ZM15.5071 27C13.1337 27 10.8136 26.2962 8.84025 24.9776C6.86685 23.6591 5.32878 21.7849 4.42053 19.5922C3.51228 17.3995 3.27464 14.9867 3.73766 12.6589C4.20069 10.3311 5.34358 8.19295 7.02181 6.51472C8.70004 4.83649 10.8382 3.6936 13.166 3.23058C15.4938 2.76755 17.9066 3.00519 20.0993 3.91345C22.292 4.8217 24.1661 6.35977 25.4847 8.33316C26.8033 10.3065 27.5071 12.6266 27.5071 15C27.5071 18.1826 26.2428 21.2348 23.9924 23.4853C21.7419 25.7357 18.6897 27 15.5071 27Z" />
      <path fill={color} d="M19.572 10.9349C19.4325 10.7943 19.2666 10.6827 19.0839 10.6066C18.9011 10.5304 18.705 10.4912 18.507 10.4912C18.309 10.4912 18.1129 10.5304 17.9301 10.6066C17.7473 10.6827 17.5814 10.7943 17.442 10.9349L15.507 12.8849L13.572 10.9349C13.2895 10.6525 12.9064 10.4938 12.507 10.4938C12.1075 10.4938 11.7244 10.6525 11.442 10.9349C11.1595 11.2174 11.0009 11.6005 11.0009 11.9999C11.0009 12.3994 11.1595 12.7825 11.442 13.0649L13.392 14.9999L11.442 16.9349C11.3014 17.0744 11.1898 17.2403 11.1137 17.423C11.0375 17.6058 10.9983 17.8019 10.9983 17.9999C10.9983 18.1979 11.0375 18.394 11.1137 18.5768C11.1898 18.7596 11.3014 18.9255 11.442 19.0649C11.5814 19.2055 11.7473 19.3171 11.9301 19.3932C12.1129 19.4694 12.309 19.5086 12.507 19.5086C12.705 19.5086 12.9011 19.4694 13.0839 19.3932C13.2666 19.3171 13.4325 19.2055 13.572 19.0649L15.507 17.1149L17.442 19.0649C17.5814 19.2055 17.7473 19.3171 17.9301 19.3932C18.1129 19.4694 18.309 19.5086 18.507 19.5086C18.705 19.5086 18.9011 19.4694 19.0839 19.3932C19.2666 19.3171 19.4325 19.2055 19.572 19.0649C19.7126 18.9255 19.8242 18.7596 19.9003 18.5768C19.9765 18.394 20.0157 18.1979 20.0157 17.9999C20.0157 17.8019 19.9765 17.6058 19.9003 17.423C19.8242 17.2403 19.7126 17.0744 19.572 16.9349L17.622 14.9999L19.572 13.0649C19.7126 12.9255 19.8242 12.7596 19.9003 12.5768C19.9765 12.394 20.0157 12.1979 20.0157 11.9999C20.0157 11.8019 19.9765 11.6058 19.9003 11.423C19.8242 11.2403 19.7126 11.0744 19.572 10.9349Z" />
    </Wrapper>
  )
}