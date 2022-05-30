import React, { useEffect } from 'react';
import gsap from 'gsap';

export default (
  mask: React.RefObject<HTMLDivElement>,
  visible: boolean
) => {

  const defaults = {
    duration: 0.25,
    ease: "power2.out"
  }

  useEffect(() => {
    if (visible) {
      gsap.to(mask.current, {
        ...defaults,
        autoAlpha: 1
      });
    }
    else {
      gsap.to(mask.current, {
        ...defaults,
        autoAlpha: 0
      });
    }
  }, [visible, mask.current]);
}