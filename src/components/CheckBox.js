import React, { useState } from "react";

export default function Checkbox() {
  const [itemLists, setitemLists] = useState([
    { id: 1, value: "Have Kiss before", isChecked: false },
    { id: 2, value: "Have hug before", isChecked: false },
    { id: 3, value: "I have went on a date before", isChecked: false },
    { id: 4, value: "I still speak with my ex", isChecked: false },
  ]);
  const [result, setresult] = useState(0);

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
    setresult(
      itemLists.filter((itemList) => itemList.isChecked === true).length
    );
  };

  return (
    <div>
      {itemLists.map((itemList) => (
        <ul key={itemList.id}>
          <input
            type="checkbox"
            name={itemList.value}
            value={itemList.id}
            onChange={handleInput}
          />
          {itemList.value}
        </ul>
      ))}
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <p>Result {result}</p>
    </div>
  );
}
