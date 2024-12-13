import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./SidebarContext"; // Import the SidebarProvider
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Goverment from "./pages/Goverment";
import Posts from "./pages/Posts";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Farmer from "./pages/Farmer";
import WeatherAlerts from "./pages/WeatherAlerts";
import { ThemeProvider } from './context/theme';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}} >
      <SidebarProvider>
        <Router>
          <div
            className={`app-container min-h-screen transition-all duration-300 ease-in-out ${
              themeMode === 'dark' ? 'bg-darkBg text-lightText' : 'bg-lightBg text-darkText'
            }`}
          >
            <Sidebar />
            <div className="content p-5">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/goverment" element={<Goverment />} />
                <Route path="/weather-alerts" element={<WeatherAlerts />} />
                <Route path="/farmer" element={<Farmer />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;















// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { SidebarProvider } from "./SidebarContext"; // Import the SidebarProvider
// import Dashboard from "./pages/Dashboard";
// import Sidebar from "./components/Sidebar";
// import Goverment from "./pages/Goverment";
// import Posts from "./pages/Posts";
// import Settings from "./pages/Settings";
// import Profile from "./pages/Profile";
// import Farmer from "./pages/Farmer";
// import WeatherAlerts from "./pages/WeatherAlerts";

// const App = () => {
//   return (
//     <SidebarProvider>
//       <Router>
//         <div className="app-container">
//           <Sidebar />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/goverment" element={<Goverment />} />
//               <Route path="/weather-alerts" element={<WeatherAlerts />} />
//               <Route path="/farmer" element={<Farmer />} />
//               <Route path="/posts" element={<Posts />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </SidebarProvider>
//   );
// };

// export default App;