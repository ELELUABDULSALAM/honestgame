import React from "react";

export default function Button(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  );
}
