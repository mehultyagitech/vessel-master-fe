import React, { useState } from 'react';
import TopBarLocationPoint from './TopBarLocationPoint';

const MapComponent = () => {
  const [points, setPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null); // For showing selected point data
  const [modalVisible, setModalVisible] = useState(false);
  const [newPoint, setNewPoint] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    locationCategory: '',
    location: '',
    checkPointNumber: '',
    subLocation: '',
    equipment: '',
    object: '',
    hazmat: '',
  });

  // Handle map click to create a new point
  const handleMapClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set new point position and open modal to fill details
    setNewPoint({ x, y });
    setSelectedPoint(null); // Reset any selected point
    setModalVisible(true); // Open modal for entering details
  };

  // Handle form submit to save the new point
  const handleFormSubmit = () => {
    // Add new point data to the list of points
    setPoints([...points, { ...newPoint, ...formData }]);
    setModalVisible(false); // Close the modal after saving the data
    setFormData({
      locationCategory: '',
      location: '',
      checkPointNumber: '',
      subLocation: '',
      equipment: '',
      object: '',
      hazmat: '',
    });
  };

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle click on existing points to show details
  const handlePointClick = (point) => {
    setSelectedPoint(point); // Display data of clicked point
    setModalVisible(false); // Ensure modal is closed
  };

  return (
    <>
      <TopBarLocationPoint />

      <div className="flex flex-col md:flex-row">
        {/* Map Container */}
        <div
          className="relative w-full md:w-2/3 h-96 bg-gray-200 border border-gray-300"
          onClick={handleMapClick}
        >
          <img
            src="/public/Daigram1.png"
            alt="Map"
            className="w-full h-full object-contain"
          />

          {/* Render all points */}
          {points.map((point, index) => (
            <div
              key={index}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: point.y, left: point.x }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent map click event from triggering
                handlePointClick(point); // Show point data
              }}
            >
              <img
                src="/public/rb_53.png"
                alt="Green Pin"
                className="w-16 h-12"
              />
            </div>
          ))}
        </div>

        {/* Details Panel */}
        <div className="w-full md:w-1/3 p-4 border border-gray-300">
          {selectedPoint ? (
            <>
              <h3 className="text-xl font-semibold mb-4">Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-500">Location Category</span>
                  <span>{selectedPoint.locationCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Location</span>
                  <span>{selectedPoint.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Check Point Number</span>
                  <span>{selectedPoint.checkPointNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Sub Location</span>
                  <span>{selectedPoint.subLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Equipment</span>
                  <span>{selectedPoint.equipment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Object</span>
                  <span>{selectedPoint.object}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-500">Hazmat [ Quantity - Unit ]</span>
                  <span>{selectedPoint.hazmat}</span>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
                 Open Details
              </button>
            </>
          ) : (
            <p>Select a point to view details</p>
          )}
        </div>
      </div>

      {/* Modal for entering new point details */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Point</h3>
            <form className="space-y-2">
              <input
                type="text"
                name="locationCategory"
                value={formData.locationCategory}
                onChange={handleInputChange}
                placeholder="Location Category"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="checkPointNumber"
                value={formData.checkPointNumber}
                onChange={handleInputChange}
                placeholder="Check Point Number"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="subLocation"
                value={formData.subLocation}
                onChange={handleInputChange}
                placeholder="Sub Location"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                placeholder="Equipment"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="object"
                value={formData.object}
                onChange={handleInputChange}
                placeholder="Object"
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="hazmat"
                value={formData.hazmat}
                onChange={handleInputChange}
                placeholder="Hazmat [ Quantity - Unit ]"
                className="border p-2 w-full"
              />
              <button
                type="button"
                onClick={handleFormSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MapComponent;
