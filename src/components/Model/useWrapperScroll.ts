import { useMotionValue } from "framer-motion"
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const scrollY = useMotionValue(0);
  const scrollYProgress =  useMotionValue(0);
  const {wrapperRef} = useContext(ModelsContext)
  useEffect(() => {

    if(wrapperRef.current) {
      const updateScrollSalve = () => {}

      wrapperRef.current.addEventListener('scroll', updateScrollSalve)

      return () => wrapperRef.current?.removeEventListener('scroll', updateScrollSalve)
    }

  }, [])

  return {scrollY, scrollYProgress}
}