import React from "react";
import { motion } from "framer-motion";

const StatCard = ({name, icon:Icon,value,color}) => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md  shadow-lg rounded-xl "
      whileHover={{ y: -5, boxShadow: "0 25px 25px -12px rgba(0,0,0,0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className='mr-2' style={{color}} />
          {name}
        </span>
        <p>
          <span className="text-3xl font-semibold text-gray-100 mt-1 ">{value}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;
