import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showImg, setShowImg] = useState(false);

  const [location, setLocation] = useState({})
  const [yes, setYes] = useState([] )

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openImg = (wow, coordinates) => {
    setLocation(coordinates)
    setYes(wow)
    setShowImg(true)
  }

  const closeImg =()=> {
    setShowImg(false)
  }



  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        openSidebar,
        closeSidebar,
        showImg,
        setShowImg,
        openImg,
        closeImg,
        location, 
        yes
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };