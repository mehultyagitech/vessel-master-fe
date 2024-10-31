import React, { useState, useRef } from "react";
import TopBarLocationPoint from "./TopBarLocationPoint";
import ModalComponent from "./LocationModal";

const MapComponent = () => {
  const [points, setPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPoint, setNewPoint] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    locationCategory: "",
    location: "",
    checkPointNumber: "",
    subLocation: "",
    equipment: "",
    object: "",
    hazmat: "",
  });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom * 1.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom / 1.2, 0.5));
  };

  const handleMapClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setNewPoint({ x, y });
    setModalVisible(true);
  };

  const handleFormSubmit = () => {
    setPoints([...points, { ...newPoint, ...formData }]);
    setModalVisible(false);
    setFormData({
      locationCategory: "",
      location: "",
      checkPointNumber: "",
      subLocation: "",
      equipment: "",
      object: "",
      hazmat: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePointClick = (point) => {
    setSelectedPoint(point);
    setModalVisible(false);
  };

  return (
    <>
      <TopBarLocationPoint />
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/3 h-96 bg-gray-200 border border-gray-300 overflow-hidden">
          <div
            ref={containerRef}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "top left",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src="/public/Daigram1.png"
              alt="Map"
              className="object-contain w-full h-full"
              ref={imageRef}
              onClick={handleMapClick}
            />
            {points.map((point, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${point.y}%`,
                  left: `${point.x}%`,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePointClick(point);
                }}
              >
                <img src="/public/rb_53.png" alt="Point Pin" className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
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

      <ModalComponent
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={zoomIn}>
          Zoom In
        </button>
        <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded" onClick={zoomOut}>
          Zoom Out
        </button>
      </div>
    </>
  );
};

export default MapComponent;
