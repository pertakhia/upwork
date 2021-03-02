import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hiddenHeader, setHiddenHeader] =useState(false);
  const [showImg, setShowImg] = useState(false);

  const [location, setLocation] = useState({})
  const [yes, setYes] = useState([] )

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openTravel = () => {
    setHiddenHeader(true);
  }

  const closeTravel = () => {
    setHiddenHeader(false);
  }

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
        hiddenHeader,
        setHiddenHeader,
        openTravel,
        closeTravel,
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