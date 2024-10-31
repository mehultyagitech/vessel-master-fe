// LocationModal.js
import React from "react";

const LocationModal = ({
  isVisible,
  onClose,
  formData,
  handleInputChange,
  handleFormSubmit,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-l-lg w-full max-w-md h-full shadow-lg transition-transform duration-300 ease-in-out transform">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Add New Point</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
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
            placeholder="Hazmat"
            className="border p-2 w-full"
          />
          <div className="mt-4">
            <button
              type="button"
              onClick={handleFormSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Point
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationModal;
