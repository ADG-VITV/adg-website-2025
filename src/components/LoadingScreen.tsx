"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
        >
          {/* Add your logo or animation */}
          <Image
            src="/logo.svg"
            alt="Loading Logo"
            width={120}
            height={120}
            className="animate-bounce mb-4"
          />
          <p className="text-white text-lg font-semibold tracking-wider">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
