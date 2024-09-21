import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="sales" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <StatCard
            name="Total Revenue"
            value={salesStats.totalRevenue}
            icon={DollarSign}
            color="#6366F1"
          />
          <StatCard
            name="Conversion Rate"
            value={salesStats.conversionRate}
            icon={ShoppingCart}
            color="#10B981"
          />
          <StatCard
            name="Conversion Rate"
            value={salesStats.conversionRate}
            icon={TrendingUp}
            color="#F59E0B"
          />
          <StatCard
            name="Sales Growth"
            value={salesStats.salesGrowth}
            icon={CreditCard}
            color="#EF4444"
          />
        </motion.div>
        <SalesOverviewChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
