import React from "react";
import { motion } from "framer-motion";

const parentVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariant = {
  initial: {
    y: 200,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
    },
  },
};

export default function HomeLoad() {
  return (
    <div className="HomeLoad">
      <motion.div
        initial="initial"
        animate="animate"
        variants={parentVariant}
        className="HomeLoad-container">
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          J
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          a
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          z
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          w
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          e
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          l
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          l
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          n
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          e
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          s
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          s
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          .
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          c
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          o
        </motion.span>
        <motion.span className="HomeLoad-letter" variants={childVariant}>
          m
        </motion.span>
      </motion.div>
    </div>
  );
}
