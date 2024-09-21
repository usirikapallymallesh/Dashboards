import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3000 },
  { name: "Books", value: 2500 },
  { name: "Groceries", value: 1500 },
  { name: "Other", value: 500 },
  { name: "Toys", value: 300 },
  { name: "Home & Garden", value: 200 },
];

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ff7f50",
  "#ffbb78",
  "#98df8a",
  "#d62728",
  "#c5b0d5",
  "#f7b6d2",
  "#9edae5",
  "#e377c2",
  "#f7f7f7",
];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              LabelLine={false}
              fill="#8884d8"
              dataKey="value"
              // Label={({ name, percent }) =>
              //   `${name}`
              // }
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                border: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistributionChart;
