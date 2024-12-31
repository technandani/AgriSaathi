import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <Header />
      <main className="w-[80%] h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default App;