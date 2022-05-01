import React from 'react';
import styled from 'styled-components/macro';

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
      width={23} height={23}
      viewBox="0 0 23 23"
      fill="none"
      onClick={onClick}
    >
      <path fill={color} d="M17.932 10.7867L14.4738 7.32774L17.9309 3.86984C18.3535 3.44715 18.3535 2.75602 17.9309 2.33316L16.3925 0.796694C15.9699 0.37506 15.279 0.37506 14.8564 0.796694L11.3991 4.25459L7.94207 0.796694C7.52053 0.37506 6.8285 0.37506 6.40573 0.796694L4.87066 2.33316C4.44806 2.75585 4.44806 3.44698 4.87066 3.86984L8.32782 7.32777L4.87066 10.7867C4.44806 11.2094 4.44806 11.9005 4.87066 12.3232L6.40699 13.8586C6.82958 14.2813 7.52158 14.2813 7.94312 13.8586L11.4003 10.4019L14.8572 13.8586C15.2798 14.2813 15.9708 14.2813 16.3956 13.8586L17.932 12.3232C18.3545 11.9005 18.3545 11.2094 17.932 10.7867Z" />
    </Wrapper>
  )
}