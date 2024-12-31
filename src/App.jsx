import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext"; 
import { PostProvider } from "./context/PostContext";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Goverment from "./pages/Goverment";
import Posts from "./pages/Posts";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Farmer from "./pages/Farmer";
import WeatherAlerts from "./pages/WeatherAlerts";
import RegisterForWeatherAlert from './pages/RegisterForWeatherAlert';
import { ThemeProvider } from './context/theme';
import Schemes from './admin/Schemes';
import MarketPlace from './pages/MarketPlace';
import { useSidebar } from "./context/SidebarContext"; 

const AppContent = () => {
  const [themeMode, setThemeMode] = useState("light");
  const { isCompressed } = useSidebar(); // Properly access Sidebar context

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <PostProvider>
        <Router>
          <div
            className={`app-container min-h-screen transition-all duration-300 ease-in-out ${
              themeMode === "dark"
                ? "bg-darkBg text-lightText"
                : "bg-lightBg text-darkText"
            }`}
          >
            <Sidebar />
            <div
              className={`mainContentContainer transition-all duration-300 p-5 ${
                isCompressed ? "compressed " : "notCompressed "
              }`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/goverment" element={<Goverment />} />
                <Route path="/weather-alerts" element={<WeatherAlerts />} />
                <Route
                  path="/weather-alert-registration"
                  element={<RegisterForWeatherAlert />}
                />
                <Route path="/farmer" element={<Farmer />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/marketPlace" element={<MarketPlace />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/manageScheme" element={<Schemes />} />
              </Routes>
            </div>
          </div>
        </Router>
      </PostProvider>
    </ThemeProvider>
  );
};
const App = () => {
  return (
    <SidebarProvider>
      <AppContent />
    </SidebarProvider>
  );
};

export default App;