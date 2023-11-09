import React, { useState } from "react";
import Login from "./Login"; // Import your Login and Register components here
import Register from "./Register";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <div className="bg-gray-100 py-10 md:py-10">
        <div className="flex flex-col bg-white md:w-2/3 w-5/6 mx-auto items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-auto gap-4"></div>
          <div className="flex items-center md:text-3xl md:font-bold md:p-6 text-xl my-6 font-semibold">
            <h1 className="opacity-100">{showLogin ? "Login" : "Register"}</h1>
            <div className="border-r border-gray-300 h-10 mx-6"></div>
            <button onClick={handleToggleComponent} className="opacity-40">
              {showLogin ? "Register" : "Login"}
            </button>
          </div>
          {showLogin ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default App;
