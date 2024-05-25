"use client";

import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.img
        src="../logo/logo.png"
        alt="Logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-16 h-16 xs:w-20 xs:h-20 cursor-pointer"
      />
    </div>
  );
};

export default Logo;
