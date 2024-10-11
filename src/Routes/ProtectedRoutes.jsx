import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Login from "../pages/Login";

const ProtectedRoutes = ({ component: Component }) => {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const isLoggedIn ="false";
  return (
    //     <div className="App w-[99%]">
    //     <div  className='w-full'
    //     style={{
    // //   background: "pink",
    // }}
    //     >
    //       <div className='hidden lg:block w-[20vw]'>
    //       <Sidebar
    //         sidebar = {sidebar}
    //       />
    //       </div>
    //       <div
    //         className="ml-[10vw] flex justify-start flex-col overflow-y-scroll lg:w-full md:w-3/4"
    //       >
    //       <div className='hidden lg:block' >
    //       <Navbar
    //       handleSidebar = {handleSidebar}
    //       sidebar = {sidebar}
    //       />
    //       </div>
    //         <Component />
    //       </div>
    //     </div>
    //   </div>
    <div className="">
      {isLoggedIn == "true" ? (
        <div className="flex justify-center">
          <Login />
        </div>
      ) : (
        <div className="grid gap-0 grid-cols-6">
          <div className="col-span-1 sticky">
            <Sidebar />
          </div>
          <div className="col-span-5">
            <div className="w-full">
              <Navbar />
            </div>
            <div className="h-[83vh] overflow-y-scroll p-6 mt-5">
              <Component/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoutes;
