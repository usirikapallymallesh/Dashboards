import React from "react";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#6366F1", "#6366F2", "#6366F3", "#636652"];

const SALES_CHANNEL_DATA = [
  { name: "website", value: 45600 },
  { name: "facebook", value: 32000 },
  { name: "instagram", value: 28000 },
  { name: "twitter", value: 25000 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 sm:col-span-2 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales By Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray=" 3 3 " stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
