import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default (
  dom: React.RefObject<HTMLDivElement>,
  expand: boolean,
  setExpand: (b: boolean) => void
) => {

  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    timeline.current.pause();

    timeline.current.fromTo(dom.current, {
      transformOrigin: "center top",
      autoAlpha: 0,
      rotateX: "45deg"
    }, {
      duration: 0.25,
      ease: "power2.out",
      autoAlpha: 1,
      rotateX: "0deg"
    });

    return () => { timeline.current.clear() }
  }, []);

  useEffect(() => {
    const collapse = () => { setExpand(false) }

    window.addEventListener("click", collapse);
    return () => { window.removeEventListener("click", collapse) }
  }, []);

  useEffect(() => {
    expand ?
      timeline.current.play() :
      timeline.current.reverse();
  }, [expand]);

}