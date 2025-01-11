import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Dashboard, Farmer, Goverment, MarketPlace, Posts, Profile, RegisterForWeatherAlert, Settings, WeatherAlerts } from './pages/index.js'
import Schemes from './admin/Schemes.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import SetAlert from './components/wheater/SetAlert.jsx'
import Crops from './components/crops/MainCropsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Dashboard />} />
      <Route path="goverment" element={<Goverment />} />
      <Route path="weather-alerts" element={<WeatherAlerts />} />
      <Route path="weather-alert-registration" element={<RegisterForWeatherAlert />} />
      <Route path="weather-alert-registration/set-alert" element={<SetAlert />} />
      <Route path="farmer" element={<Farmer />} />
      <Route path="posts" element={<Posts />} />
      <Route path="marketPlace" element={<MarketPlace />} />
      <Route path="crops" element={<Crops />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="manageScheme" element={<Schemes />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)