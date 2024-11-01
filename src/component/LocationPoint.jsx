import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import TopBarLocationPoint from "./TopBarLocationPoint";
import ModalComponent from "./LocationModal";
import '../style.css';

const MapComponent = () => {
  const [points, setPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
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

  const bounds = [
    [0, 0],
    [1000, 1000], // Adjust according to your image's dimensions
  ];

  // Custom hook to handle map clicks
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setNewPoint({ x: lat, y: lng });
        setModalVisible(true); // Open modal for data input
        setFormData({ // Reset form data for new point
          locationCategory: "",
          location: "",
          checkPointNumber: "",
          subLocation: "",
          equipment: "",
          object: "",
          hazmat: "",
        });
        setSelectedPoint(null); // Reset selected point for new point
      },
    });
    return null;
  };

  // Handle form submission to add new point
  const handleFormSubmit = () => {
    const newPointData = { ...newPoint, ...formData };
    setPoints([...points, newPointData]);
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle existing marker click to view details
  const handleMarkerClick = (point) => {
    setSelectedPoint(point); // Update selected point
  };

  return (
    <>
      <TopBarLocationPoint />
      <div className="flex flex-col md:flex-row">
        <MapContainer
          center={[500, 500]}
          zoom={-1}
          minZoom={-2}
          maxZoom={4}
          zoomControl={true} // Enables the default zoom control
          scrollWheelZoom={true} // Enables zoom on scroll
          doubleClickZoom={true} // Enables zoom on double-click
          style={{ height: "450px", width: "67%" }} // Adjusted height
          crs={L.CRS.Simple}
          className="map-container"
        >
          <ImageOverlay url="/Daigram1.png" bounds={bounds} />
          <MapClickHandler />
          {points.map((point, index) => (
            <Marker
              key={index}
              position={[point.x, point.y]}
              eventHandlers={{
                click: () => handleMarkerClick(point),
              }}
              icon={L.icon({
                iconUrl: "/rb_53.png",
                iconSize: [30, 30],
                iconAnchor: [15, 15],
              })}
            />
          ))}
        </MapContainer>

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
    </>
  );
};

export default MapComponent;
