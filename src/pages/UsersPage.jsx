import React from "react";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";

import {
  Users,
  Zap,
  ShoppingBag,
  BarChart2,
  UserIcon,
  UserCheck,
  UserX,
  UserPlus,
} from "lucide-react";
import Header from "../components/common/Header";
import UserTable from "../components/users/UserTable";
// import UserCharts from "../components/users/UserCharts";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemoGraphicsChart from "../components/users/UserDemoGraphicsChart";
const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <StatCard
            name="Total users"
            value={userStats.totalUsers}
            icon={UserIcon}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            value={userStats.newUsersToday}
            icon={UserPlus}
            color="#8b5cf6"
          />
          <StatCard
            name="Active Users"
            value={userStats.activeUsers}
            icon={UserCheck}
            color="#ec4899"
          />
          <StatCard
            name="churn Rate"
            value={userStats.churnRate}
            icon={UserX}
            color="#10b981"
          />
        </motion.div>
        <UserTable />
        {/* user charts  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemoGraphicsChart />
        </div>
        {/* <UserCharts/> */}
      </main>
    </div>
  );
};

export default UsersPage;
