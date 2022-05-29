import { motion } from "framer-motion";
import React from "react";
import Popular from "../components/Popular";
import Vaggie from "../components/Vaggie";

function home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Vaggie />
      <Popular />
    </motion.div>
  );
}

export default home;
