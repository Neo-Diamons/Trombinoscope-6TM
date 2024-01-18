// App.jsx
import React from "react";
import { Router } from "./Router";
import { ReactComponent as BackgroundLogo } from "./components/svg/6TM.svg";
import { ReactComponent as FuseeLogo } from "./components/svg/Fusee.svg";
import "./App.css"; // Import your main stylesheet

function App() {
  return (
    <div className="App bg-background min-w-screen min-h-screen">
      <div>
        <div className="fixed right-0 top-[-25px] overflow-x-hidden">
          <BackgroundLogo />
        </div>
        <div className="fixed right-[1%] top-[10%] overflow-x-hidden">
          <FuseeLogo />
        </div>
      </div>
      <Router />
    </div>
  );
}

export default App;
