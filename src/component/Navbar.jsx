import React, { useState, useEffect, useRef } from "react";
import { FiBell, FiSettings } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top-0 glass">
      <div className="flex items-center h-[5rem] p-3 bg-white justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">
            <span className="text-indigo-400">Dashboard</span> : A LA MARINE
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Notification Icon with Badge */}
          <div className="relative cursor-pointer">
            <FiBell className="w-6 h-6 text-green-500" />
            {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              103
            </span> */}
          </div>

          {/* Separation Line */}
          <div className="border-l border-gray-300 h-6 mx-2"></div>

          {/* Settings Icon */}
          <div className="cursor-pointer">
            <FiSettings className="w-6 h-6 text-blue-500" />
          </div>

          {/* Separation Line */}
          <div className="border-l border-gray-300 h-6 mx-2"></div>

          {/* User Info and Dropdown */}
          <div className="flex items-center cursor-pointer" ref={dropdownRef}>
            <img
              src="./public/Users.jpg"  // <-- Path to your uploaded image
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-white mr-2"
              onClick={toggleDropdown}
            />
            <div onClick={toggleDropdown} className="flex flex-col">
              <span className="font-bold text-gray-800">Karan Dogar</span>
              <span className="text-sm text-gray-500">IHM Expert</span>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-12 bg-white shadow-md rounded-lg text-black w-[120px] z-10">
                <ul className="py-1">
                  <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">
                    My Profile
                  </li>
                  <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
