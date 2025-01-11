import React from "react";
import { motion } from "framer-motion";

const stats = [
  { icon: "fas fa-users", label: "Total Farmers Connected", value: 1200 },
  { icon: "fas fa-comments", label: "Active Communities", value: 150 },
  { icon: "fas fa-shopping-cart", label: "Marketplace Listings", value: 300 },
  { icon: "fas fa-cloud", label: "Weather Alerts Issued", value: 25 },
];

const SiteOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="bg-[#eee] dark:bg-[#1a1a1a] p-4 rounded-lg shadow flex items-center gap-4"
        >
          <i className={`${stat.icon} text-4xl text-green-500`}></i>
          <div>
            <h3 className="text-lg font-bold">{stat.label}</h3>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SiteOverview;