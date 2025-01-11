import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-green-700 to-blue-800 p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-xl"></div>
      <h2 className="text-3xl font-bold mb-2 text-[#fff]">Welcome Back, Nandani!</h2>
      <p className="text-lg  text-[#fff]">
        Explore all the features of AgriSaathi designed to empower farmers like you.
      </p>
      <div className="mt-4">
        <ul className="list-disc ml-5  text-[#fff]">
          <li>Stay connected with fellow farmers and experts.</li>
          <li>Check real-time weather updates and alerts.</li>
          <li>Access the latest government schemes.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;