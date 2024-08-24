import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface DropdownDivProps extends PropsWithChildren {
  className?: string;
  bool: boolean;
}

const DropdownDiv = ({ className, bool, children }: DropdownDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: bool ? 1 : 0,
        height: bool ? "auto" : 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default DropdownDiv;
