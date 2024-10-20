import React, { useState, useRef } from "react";
import TopBarLocationPoint from "./TopBarLocationPoint";

const MapComponent = () => {
  const [points, setPoints] = useState([]); // Store points on the image
  const [selectedPoint, setSelectedPoint] = useState(null); // Selected point
  const [zoomLevel, setZoomLevel] = useState(1); // Zoom level for the image
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility for new point form
  const [newPoint, setNewPoint] = useState({ x: 0, y: 0 }); // New point coordinates
  const [formData, setFormData] = useState({ locationCategory: "", location: "", checkPointNumber: "", subLocation: "", equipment: "", object: "", hazmat: "" }); // Form data for new point
  const imageRef = useRef(null); // Reference to the image for measuring zoom

  // Handle zoom-in functionality
  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom * 1.2, 3)); // Zoom in by 20% with max limit 3x
  };

  // Handle zoom-out functionality
  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom / 1.2, 0.5)); // Zoom out by 20% with min limit 0.5x
  };

  // Handle map click to mark a point on the image
  const handleMapClick = (e) => {
    const rect = imageRef.current.getBoundingClientRect(); // Get the bounding rect of the image
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Percentage relative to the image width
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Percentage relative to the image height

    setNewPoint({ x, y }); // Set new point coordinates as a percentage
    setModalVisible(true); // Open the modal to enter details for the new point
  };

  // Handle form submission for new point
  const handleFormSubmit = () => {
    setPoints([...points, { ...newPoint, ...formData }]); // Add new point with form data
    setModalVisible(false); // Close the modal
    setFormData({ locationCategory: "", location: "", checkPointNumber: "", subLocation: "", equipment: "", object: "", hazmat: "" }); // Reset form data
  };

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle point click to view its details
  const handlePointClick = (point) => {
    setSelectedPoint(point); // Show details for clicked point
    setModalVisible(false); // Close the modal on point click
  };

  return (
    <>
      <TopBarLocationPoint />

      <div className="flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative w-full md:w-2/3 h-96 bg-gray-200 border border-gray-300 overflow-hidden">
          <img
            src="/public/Daigram1.png"
            alt="Map"
            className="object-contain"
            style={{
              transform: `scale(${zoomLevel})`, // Zoom effect on image
              transformOrigin: "top left", // Zoom from the top left corner
              width: "100%",
              height: "100%",
            }}
            ref={imageRef}
            onClick={handleMapClick} // Handle click on the image to mark a point
          />

          {/* Render points on the image, relative to the zoomed image */}
          {points.map((point, index) => (
            <div
              key={index}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{
                // Position the point based on the percentage coordinates of the image
                top: `${(point.y / 100) * imageRef.current.clientHeight * zoomLevel}px`, // Y position in pixels relative to zoomed image height
                left: `${(point.x / 100) * imageRef.current.clientWidth * zoomLevel}px`, // X position in pixels relative to zoomed image width
                transform: `scale(${zoomLevel})`, // Adjust point size with zoom
              }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent image click event from triggering
                handlePointClick(point); // Show details of clicked point
              }}
            >
              <img src="/public/rb_53.png" alt="Point Pin" className="w-16 h-12" />
            </div>
          ))}
        </div>

        {/* Details Panel */}
        <div className="w-full md:w-1/3 p-4 border border-gray-300">
          {selectedPoint ? (
            <>
              <h3 className="text-xl font-semibold mb-4">Point Details</h3>
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
                  <span className="text-blue-500">Hazmat</span>
                  <span>{selectedPoint.hazmat}</span>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
                View Details
              </button>
            </>
          ) : (
            <p>Select a point to view details</p>
          )}
        </div>
      </div>

      {/* Modal for entering new point details */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white p-4 rounded-l-lg w-full max-w-md h-full shadow-lg transition-transform duration-300 ease-in-out transform ${
              modalVisible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add New Point</h3>
              <button
                onClick={() => setModalVisible(false)}
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
      )}

      {/* Zoom controls */}
      <div className="mt-4 flex justify-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={zoomIn}
        >
          Zoom In
        </button>
        <button
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={zoomOut}
        >
          Zoom Out
        </button>
      </div>
    </>
  );
};

export default MapComponent;
