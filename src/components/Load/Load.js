import React from "react";
import { motion } from "framer-motion";

const ulVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const liVariant = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.5, 1],
    transition: {
      yoyo: Infinity,
      duration: 0.8,
    },
  },
};

export default function Load() {
  return (
    <motion.div
      className="Load"
      initial={{ x: "20vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={ulVariant}
        className="Load-circle-container">
        <motion.div variants={liVariant} className="Load-circle"></motion.div>
        <motion.div variants={liVariant} className="Load-circle"></motion.div>
        <motion.div variants={liVariant} className="Load-circle"></motion.div>
        <motion.div variants={liVariant} className="Load-circle"></motion.div>
      </motion.div>
    </motion.div>
  );
}
