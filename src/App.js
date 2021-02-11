import React, { useState, useEffect } from "react";

import "./App.css";
import CheckBox from "./components/CheckBox";
import DisplayResult from "./components/DisplayResult";
import Button from "./components/Button";
// import Loader from "./components/Loader";

export default function App() {
  const [itemLists, setitemLists] = useState([
    { id: 1, value: "Have", isChecked: false },
    { id: 2, value: "before", isChecked: false },
    { id: 3, value: "date before", isChecked: false },
    { id: 4, value: "speak with my ex", isChecked: false },
    { id: 5, value: "speak with my e", isChecked: false },
    { id: 6, value: "speak with my", isChecked: false },
  ]);
  const [results, setresults] = useState(0);
  const [loadings, setLoadings] = useState(false);
  const [resultStores, setresultStores] = useState([
    { id: 1, value: "You are still and innocent man 1", score: 1 },
    { id: 2, value: "You are still and innocent man 2", score: 2 },
    { id: 3, value: "You are still and innocent man 3", score: 3 },
    { id: 4, value: "You are still and innocent man 4", score: 4 },
    { id: 5, value: "You are still and innocent man 5", score: 5 },
    { id: 6, value: "You are still and innocent man 6", score: 6 },
  ]);

  const totalCount = Object.keys(itemLists).length;
  var textResult;

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
    // setLoadings(false);
    setresults(
      itemLists.filter((itemList) => itemList.isChecked === true).length
    );
  };

  const handleClear = () => {
    setresults(0);
  };

  return (
    <div className="App">
      Innocent Game
      {results <= 0 ? (
        <div>
          {itemLists.map((itemList, key) => {
            return (
              <CheckBox handleInput={handleInput} key={key} {...itemList} />
            );
          })}
          <Button handleSubmit={handleSubmit} />
        </div>
      ) : (
        <div>
          {resultStores.map((resultStore) => {
            if (results === resultStore.id) {
              textResult = resultStore.value;
            }
            return null;
          })}
          <DisplayResult
            textResult={textResult}
            totalCount={totalCount}
            results={results}
          />
          ;
          <button type="button" onClick={handleClear}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
