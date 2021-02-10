import React from "react";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

export default function Loader(props) {
  console.log(props.loading);
  return (
    <div>
      <BounceLoader
        loading={props.loading}
        // css={override}
        size={150}
      />
    </div>
  );
}

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
