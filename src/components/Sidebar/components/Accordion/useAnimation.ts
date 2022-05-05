import React, { useEffect } from 'react';
import gsap from 'gsap';

const useAnimation = (
  refresh: boolean,
  panelRef: React.RefObject<HTMLDivElement>,
  panelHeight: string,
  expand: boolean
) => {
  useEffect(() => {
    if (!refresh) {
      gsap.to(panelRef.current, {
        duration: 0.25,
        ease: "power2.out",
        overwrite: true,
        height: expand ? panelHeight : "0",
      });
    }
  }, [panelHeight, expand]);

}

export default useAnimation;