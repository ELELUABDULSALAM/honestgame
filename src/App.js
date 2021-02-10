import React, { useState, useEffect } from "react";

import "./App.css";
import CheckBox from "./components/CheckBox";
import DisplayResult from "./components/DisplayResult";
import Button from "./components/Button";
import Loader from "./components/Loader";

export default function App() {
  const [itemLists, setitemLists] = useState([
    { id: 1, value: "Have", isChecked: false },
    { id: 2, value: "before", isChecked: false },
    { id: 3, value: "date before", isChecked: false },
    { id: 4, value: "speak with my ex", isChecked: false },
  ]);
  const [result, setresult] = useState(0);
  const [loading, setLoading] = useState(false);

  const GameAnswer = [
    { id: 1, value: "You are still and innocent man" },
    { id: 1, value: "You are still and innocent man" },
    { id: 1, value: "You are still and innocent man" },
    { id: 1, value: "You are still and innocent man" },
    { id: 1, value: "You are still and innocent man" },
    { id: 1, value: "You are still and innocent man" },
  ];

  const handleInput = (event) => {
    setitemLists(
      itemLists.map((itemList) => {
        if (itemList.id == event.target.value) {
          return {
            ...itemList,
            isChecked: !itemList.isChecked,
          };
        }
        return itemList;
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setresult(
      itemLists.filter((itemList) => itemList.isChecked === true).length
    );
    setLoading(false);
  };

  return (
    <div className="App">
      Innocent Game
      <Loader loading={loading} />
      {itemLists.map((itemList, key) => {
        return <CheckBox handleInput={handleInput} key={key} {...itemList} />;
      })}
      <Button handleSubmit={handleSubmit} />
      <DisplayResult result={result} />
    </div>
  );
}
