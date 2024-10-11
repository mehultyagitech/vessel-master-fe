import React from "react";

const Dashboardcards = () => {
  const cardsData = [
    {
      label: "Paints and Coating Systems",
      value: "0",
      smallLabel: "i-1",
      bgColor: "bg-blue-500",
    },
    {
      label: "Equipment and Machinery",
      value: "5",
      smallLabel: "i-2",
      bgColor: "bg-blue-500",
    },
    {
      label: "Structure and Hull",
      value: "0",
      smallLabel: "i-3",
      bgColor: "bg-blue-500",
    },
    {
      label: "Replaced Items",
      value: "0",
      smallLabel: "Rp",
      bgColor: "bg-purple-500",
    },
    {
      label: "Removed Items",
      value: "0",
      smallLabel: "Rm",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 justify-center ">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg bg-white w-48"
        >
          {/* Header */}
          <div
            className={`text-white ${card.bgColor} text-center py-2 font-semibold`}
          >
            {card.label}
          </div>

          {/* Body */}
          <div className="p-4 flex justify-between items-center">
            <span className="text-gray-500 text-xl">{card.smallLabel}</span>
            <span className="text-4xl font-bold text-gray-600">{card.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboardcards;
