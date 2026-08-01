import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import React from "react";

function Moon() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -500]
  );

  return (
    <motion.div
      style={{ y }}
      className={`w-[300px] h-[300px] rounded-full bg-moon fixed top-[80vh] right-[calc(50%_-_275px)] z-0`}
    />
  );
}

export default React.memo(Moon, () => {
  return true;
});
