import React, { useState } from 'react';

const MapComponent = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsData = {
    point1: {
      locationCategory: 'Engine Room',
      location: 'Tween Deck',
      checkPointNumber: 'ER-005-I',
      subLocation: 'Battery Room',
      equipment: 'Battery for General Use',
      object: 'Battery Electrodes',
      hazmat: 'Pb [08.00 pcs]',
    },
    point2: {
      locationCategory: 'Auxiliary Engine Room',
      location: 'Lower Deck',
      checkPointNumber: 'AER-003',
      subLocation: 'Generator Area',
      equipment: 'Generator',
      object: 'Generator Wires',
      hazmat: 'Cu [15.00 pcs]',
    },
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Map Container */}
      <div className="relative w-full md:w-2/3 h-96 bg-gray-200 border border-gray-300">
        <img
          src="/public/Daigram1.png"
          alt="Map"
          className="w-full h-full object-contain"
        />

        {/* Point 1 */}
        <div
          className="absolute top-12 left-24 cursor-pointer"
          onClick={() => setSelectedPoint(pointsData.point1)}
        >
          {/* Custom Pin */}
          <div className="w-8 h-8 bg-green-500 relative">
            <div className="w-6 h-6 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[12px] border-t-green-500 relative top-[-4px]"></div>
        </div>

        {/* Point 2 */}
        <div
          className="absolute top-56 left-32 cursor-pointer"
          onClick={() => setSelectedPoint(pointsData.point2)}
        >
          {/* Custom Pin */}
          <div className="w-8 h-8 bg-red-500 relative">
            <div className="w-6 h-6 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[12px] border-t-red-500 relative top-[-4px]"></div>
        </div>
      </div>

      {/* Details Panel */}
      <div className="w-full md:w-1/3 p-4 border border-gray-300">
        {selectedPoint ? (
          <>
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <p>
              <strong>Location Category:</strong> {selectedPoint.locationCategory}
            </p>
            <p>
              <strong>Location:</strong> {selectedPoint.location}
            </p>
            <p>
              <strong>Check Point Number:</strong> {selectedPoint.checkPointNumber}
            </p>
            <p>
              <strong>Sub Location:</strong> {selectedPoint.subLocation}
            </p>
            <p>
              <strong>Equipment:</strong> {selectedPoint.equipment}
            </p>
            <p>
              <strong>Object:</strong> {selectedPoint.object}
            </p>
            <p>
              <strong>Hazmat:</strong> {selectedPoint.hazmat}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Open Details
            </button>
          </>
        ) : (
          <p>Select a point to view details</p>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
