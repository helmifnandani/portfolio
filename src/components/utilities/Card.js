import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../lib/motion";

const Card = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.25, ease: EASE_OUT }}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 50, scale: 0.8 },
      }}
      className="w-full bg-dusty/50 backdrop-blur p-6 mb-6"
    >
      {children}
    </motion.div>
  );
};

export default Card;
