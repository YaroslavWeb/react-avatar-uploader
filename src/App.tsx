import React from "react";

import { Navbar } from "./components/Navbar";
import { Avatar } from "./pages/Avatar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Avatar />
    </div>
  );
};

export default App;
