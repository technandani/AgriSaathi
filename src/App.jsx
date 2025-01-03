import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"
import { useDispatch, useSelector } from 'react-redux'
import { checkMenu } from './features/sliderSlice'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const isCompressed = useSelector(state=>state.menuOpen)
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(checkMenu(!isCompressed))
}
  return (
    <div className="w-[100vw] h-[100vh] flex relative">
      <button className={`absolute z-50 text-[2rem] ${isCompressed?"left-[17%] text-white":"left-[1%] text-black"} top-1`} onClick={handleToggle}>
        {isCompressed ? <i class="ri-arrow-left-s-line"></i>:<i class="ri-menu-fold-2-line"></i>}
      </button>
      <Header />
      <main className={`${isCompressed?"w-[80%]":"w-full"} h-full duration-500`}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;