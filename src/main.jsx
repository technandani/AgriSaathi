import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Farmer, Settings } from "./pages/index.js";
import Goverment from "./pages/govermentScheme/index.jsx";
import RegisterForWeatherAlert from "./pages/wheater/weatherAlertSection/RegisterForWeatherAlert.jsx";
import Posts from "./pages/post/index.jsx";
import MarketPlace from "./pages/marketPlace/MarketPlace.jsx";
import WeatherAlerts from "./pages/wheater/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import ChatPage from "./pages/farmer/commonComponents/ChatPage.jsx";
import VideoCall from "./pages/farmer/commonComponents/VideoCall .jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Crops from "./pages/crops/index.jsx";
import RentalTools from "./pages/rentaltools/index.jsx";
import CreatePost from "./pages/post/postSection/CreatePost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="goverment" element={<Goverment />} />
      <Route path="weather-alerts" element={<WeatherAlerts />} />
      <Route
        path="weather-alert-registration"
        element={<RegisterForWeatherAlert />}
      />
      {/* <Route path="weather-alert-registration/set-alert" element={<SetAlert />} /> */}
      <Route path="farmer" element={<Farmer />} />
      <Route path="/farmer/chat" element={<ChatPage />} />
      <Route path="/farmer/chat/videocall" element={<VideoCall />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/create-post" element={<CreatePost />} />
      <Route path="marketPlace" element={<MarketPlace />} />
      <Route path="crops" element={<Crops />} />
      <Route path="profile" element={<Profile />} />
      <Route path="rentaltools" element={<RentalTools />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>
);
