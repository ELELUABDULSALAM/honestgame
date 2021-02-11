import React, { useEffect, useState } from "react";
import ListItemPage from "./ListItemPage";

export default function Checkbox(props) {
  const { value } = props;
  return (
    <div>
      <ul>
        <input
          type="checkbox"
          name={props.value}
          value={props.id}
          onChange={props.handleInput}
        />
        <ListItemPage value={value} />
      </ul>
    </div>
  );
}
