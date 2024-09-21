import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'

import StatCard from '../components/common/StatCard'

import { Zap, Users, ShoppingBag, BarChart2, Package, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react'

import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'
import { SalesOverviewChart } from '../components/overview/SalesOverviewChart';
import ProductTable from '../components/products/ProductTable'
import SalesTrendChart from '../components/products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className=" relative z-10  w-full flex-col overflow-y-scroll  ">
      <Header title="Products" />
       {/* content */}
       <main className="max-w-8xl mx-auto py-6 px-4 lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-4 lg:gird-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            value="1,234"
            icon={Package}
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            value="89"
            icon={TrendingUp}
            color="#8b5cf6"
          />
          <StatCard
            name="Low Stack"
            value="23"
            icon={AlertTriangle}
            color="#ec4899"
          />
          <StatCard
            name="Total Revenue"
            value="$543,234"
            icon={DollarSign}
            color="#10b981"
          />

          {/* Add more cards here */}
        </motion.div>

        {/* products table  */}
        <ProductTable />

        {/* CHARTS  */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart/>
          <CategoryDistributionChart/>

        </div>
      
      </main>
    </div>
  )
}

export default ProductsPage