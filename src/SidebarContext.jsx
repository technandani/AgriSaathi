// SidebarContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the Sidebar Context
const SidebarContext = createContext();

// Create a provider to manage sidebar state
export const SidebarProvider = ({ children }) => {
  const [isCompressed, setIsCompressed] = useState(false);

  const toggleSidebar = () => {
    setIsCompressed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isCompressed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the sidebar context
export const useSidebar = () => useContext(SidebarContext);
