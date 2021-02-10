import React, { useEffect, useState } from "react";

export default function Checkbox(props) {
  return (
    <div>
      <ul>
        <input
          type="checkbox"
          name={props.value}
          value={props.id}
          onChange={props.handleInput}
        />
        {props.value}
      </ul>
    </div>
  );
}
