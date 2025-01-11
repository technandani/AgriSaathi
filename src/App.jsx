import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header"
import { useDispatch, useSelector } from 'react-redux'
import { checkMenu } from './features/sliderSlice'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const isCompressed = useSelector((state) => state.slider.menuOpen)
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(checkMenu(!isCompressed))
}

const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate("/chatbot");
  };

  return (
    <div className="w-[100vw] h-[100vh] flex relative font-Nuntio bg-[#eee] dark:bg-[#121212] text-[#111] dark:text-[#fff]">
      <button className={`absolute z-50 text-[2rem] ${isCompressed?"lg:left-[17%] md:left-[22%]  max-md:left-[90%] text-white":"lg:left-[5%] max-md:left-[0%] text-black dark:text-white"} top-3 text-black z-50`} onClick={handleToggle}>
        {isCompressed ? <i className="ri-arrow-left-double-line"></i>:<i className="ri-arrow-right-double-line"></i>}
      </button>
      <Header />
      <main className={`${isCompressed?"w-[80%]":"w-[96%]"} h-full duration-500 max-md:absolute px-4 py-3`}>
        <Outlet />
      </main>
      <button
        onClick={handleNavigate} // Call navigate on click
        className="fixed bottom-8 right-8 rounded-full p-2 z-50 h-16 w-16"
      >
        <img src="images/5.png" className="h-full w-full" alt="Chatbot" />
      </button>
    </div>
  );
};

export default App;