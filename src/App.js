import React from "react";

import "./App.css";
import CheckBox from "./components/CheckBox";

export const UserContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      Innocent Game
      <UserContext.Provider>
        <CheckBox />
      </UserContext.Provider>
    </div>
  );
}
