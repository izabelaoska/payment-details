import React, { useState } from "react";

export const Input = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <label className={`label ${clicked && "clicked"}`}>{props.label}</label>
      <input
        className={`label ${clicked && "clicked"}`}
        onFocus={() => setClicked(true)}
        onBlur={() => setClicked(false)}
      />
    </>
  );
};
