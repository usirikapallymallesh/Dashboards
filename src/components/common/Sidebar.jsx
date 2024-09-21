import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  TrendingUp,
  ShoppingCart,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDE_BAR_ITEMS = [
  {
    name: "overview",
    icon: BarChart2,
    color: "#6366f1",
    path: "/",
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8b5cf6",
    path: "/products",
  },
  {
    name: "Users",
    icon: Users,
    color: "#ec4899",
    path: "/users",
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#f59e0b",
    path: "/orders",
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#382f6",
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6ee7b7",
    path: "/settings",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out  flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? "256" : "80" }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <div className="flex  gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="P-2 ml-3 rounded-full hover:bg-gray-700 transition-colors max-w-fit  "
          >
            <Menu size={24} />
          </motion.button>
          {isSidebarOpen ? <h2 className="font-bold ">MEAN Stocks</h2> : ""}
        </div>
        <nav className="mt-8 flex-grow ">
          {SIDE_BAR_ITEMS.map((item, index) => (
            <Link to={item.path} key={item.path}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap "
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
