import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default (
  dom: React.RefObject<HTMLElement>,
  expand: boolean,
  setExpand: (b: boolean) => void,
) => {
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    timeline.current.pause();

    timeline.current.fromTo(
      dom.current,
      {
        transformOrigin: 'center top',
        rotateX: -45,
        autoAlpha: 0,
      },
      {
        duration: 0.25,
        ease: 'power2.out',
        rotateX: 0,
        autoAlpha: 1,
      },
    );

    return () => {
      timeline.current.clear();
    };
  }, [dom.current]);

  useEffect(() => {
    //Remember to add e.stopPropagation() on original dom
    const collapse = () => setExpand(false);

    window.addEventListener('click', collapse);
    return () => window.removeEventListener('click', collapse);
  }, [dom.current]);

  useEffect(() => {
    expand ? timeline.current.play() : timeline.current.reverse();
  }, [expand]);
};
