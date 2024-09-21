import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, User, Users, Zap } from "lucide-react";
import { SalesOverviewChart } from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className=" relative z-10  w-full flex-col overflow-y-scroll  ">
      <Header title="Overview" />
      {/* content */}
      <main className="max-w-8xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:gird-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            value="$9,876"
            icon={Zap}
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            value="1,234"
            icon={Users}
            color="#8b5cf6"
          />
          <StatCard
            name="Total Products"
            value="567"
            icon={ShoppingBag}
            color="#ec4899"
          />
          <StatCard
            name="Conversion Rate"
            value="12.5%"
            icon={BarChart2}
            color="#10b981"
          />

          {/* Add more cards here */}
        </motion.div>
        {/* card  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />

        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
