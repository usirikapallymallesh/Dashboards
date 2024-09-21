import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Edit, Search, Trash } from "lucide-react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUser, setFilterUser] = useState(userData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setFilterUser(term);
    const filterData = filterUser.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(searchTerm) ||
        item.category.toLocaleLowerCase().includes(searchTerm)
    );
    setFilterUser(filterData);
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
                {
                    filterUser.map((product) =>
                       <motion.tr key={product.id}
                       initial={{opacity: 0}}
                       animate={{opacity: 1}}
                       transition={{duration : 0.3}}
                       >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                            <span>{product.name}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span>{product.email}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span className="px-2 inline-flex text-xs rounded-full bg-blue-800 leading-5 font-semibold">

                            {product.role}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <span className= {`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status=="Active"?"bg-green-800 text-green-100":"bg-red-800 text-red-100"}`}>{product.status}</span>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 ">
                            <button className="text-indigo-400 hover:text-red-300 mr-2">
                                EDIT
                            </button>
                            <button className="text-indigo-400 hover:text-red-300">
                                DELETE
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

export default UserTable;
