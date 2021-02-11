import React from "react";

export default function DisplayResult(props) {
//   console.log(props);
  const { results, totalCount, textResult } = props;
  return (
    <div>
      <p>
        Result: {results}/{totalCount}
      </p>
      <p>{textResult}</p>
    </div>
  );
}
