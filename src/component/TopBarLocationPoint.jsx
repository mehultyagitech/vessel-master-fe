import React from 'react';

const TopBarLocationPoint = ({ totalPoints }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-2">
      <div className="flex space-x-2">
        {/* Add Inventory Point Button */}
        <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
          <img src="/rb_53.png" alt="Add Point" className="w-10 h-8" />
          <span>Add Inventory Point</span>
        </button>

        {/* Move Button */}
        <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
          <span className="material-icons"></span>
          <span>Move</span>
        </button>

        {/* Delete Button */}
        <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
          <span className="material-icons"></span>
          <span>Delete</span>
        </button>

        {/* Copy Button */}
        <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
          <span className="material-icons"></span>
          <span>Copy</span>
        </button>
      </div>

      {/* Dynamic Total Check Points */}
      <div className="text-white">
        <span>Total Check Points:</span>
        <span className="text-blue-400 ml-1">4</span>
      </div>
    </div>
  );
};

export default TopBarLocationPoint;
