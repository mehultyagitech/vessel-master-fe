import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaShip,
  FaUserFriends,
  FaFileAlt,
  FaMapMarkerAlt,
  FaTools,
  FaClipboardList,
  FaTachometerAlt,
  FaSitemap,
} from "react-icons/fa";
import { MdEditLocation, MdEdit } from "react-icons/md"; // Edit icons
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  const [activeMenu, setActiveMenu] = useState("/");

  useEffect(() => {
    setActiveMenu(window.location.pathname);
  }, [window.location.pathname]);

  const sideBarItems = [
    {
      label: "Main Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },
    {
      label: "Vessels",
      icon: <FaShip />,
      path: "/vessels",
    },
    {
      label: "Clients / Managers",
      icon: <FaUserFriends />,
      path: "/clients-managers",
    },
    {
      label: "Requests Log",
      icon: <FaClipboardList />,
      path: "/requests-log",
    },
    {
      label: "IHM Reports",
      icon: <FaFileAlt />,
      path: "/ihm-reports",
    },
    {
      label: "Users",
      icon: <FaUserFriends />,
      path: "/users",
    },
    {
      label: "Edit Locations",
      icon: <MdEditLocation />,
      path: "/locationPoint",
    },
    {
      label: "Edit Sub-Locations",
      icon: <MdEditLocation />,
      path: "/edit-sub-locations",
    },
    {
      label: "Edit Equipments",
      icon: <FaTools />,
      path: "/edit-equipments",
    },
    {
      label: "Edit Compartments",
      icon: <FaSitemap />,
      path: "/edit-compartments",
    },
    {
      label: "Edit Objects",
      icon: <MdEdit />,
      path: "/edit-objects",
    },
  ];

  const renderSidebarMenuItems = () => {
    return sideBarItems.map((item) => (
      <Link
        to={item.path}
        style={{ textDecoration: "none", color: "inherit" }}
        key={item.path}
      >
        <MenuItem
          icon={item.icon}
          className={
            activeMenu === item.path ? "menuItem bg-gray-300" : "menuItem"
          }
        >
          {item.label}
        </MenuItem>
      </Link>
    ));
  };

  return (
    <div
      className="maindiv flex"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Sidebar className="sidebar hide-on-print">
        <Menu>
          <div className="logo h-12 w-33" >
              <img
                src="./Logo-M.jpg"
                alt="Logo"
                className="h-12"
                style={{ width: "15rem" }}
              />
          </div>
          {renderSidebarMenuItems()}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
