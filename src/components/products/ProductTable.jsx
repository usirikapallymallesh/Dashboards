import React, { useState } from "react";

import { motion } from "framer-motion";
import { Edit, Search, Trash } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

const ProductTable = () => {
    const [searchTerm,setSearchTerm]=useState("");
    const [filterProducts,setFilterProducts]=useState(PRODUCT_DATA);

    const handleSearch = (e) => {
        const term=e.target.value.toLowerCase();
        setSearchTerm(term);
        const filterData= PRODUCT_DATA.filter ((item)=> item.name.toLocaleLowerCase().includes(searchTerm) ||item.category.toLocaleLowerCase().includes(searchTerm));
        setFilterProducts(filterData);
    };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-6 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="search products.."
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg py-2 border pr-2 pl-10 focus:outline-none border-gray-700"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className=" min-w-full divide-y divide-gray-700">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
                {
                    filterProducts.map((product) =>
                       <motion.tr key={product.id}
                       initial={{opacity: 0}}
                       animate={{opacity: 1}}
                       transition={{duration : 0.3}}
                       >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                            <span>{product.name}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span>{product.category}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            {product.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span>{product.stock}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span>{product.sales}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <button className="text-indigo-400 hover:text-red-300 mr-2">
                                <Edit size={18}/>
                            </button>
                            <button className="text-indigo-400 hover:text-red-300">
                                <Trash size={18}/>
                            </button>
                        </td>
                       </motion.tr>
                       )
                }

            </tbody>

        </table>

      </div>
    </motion.div>
  );
};

export default ProductTable;
