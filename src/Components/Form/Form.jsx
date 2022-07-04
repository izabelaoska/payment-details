import React from "react";

import { Input } from "../common/Input";

export default function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="mainForm" onSubmit={handleOnSubmit}>
      <h1>ADD NEW CARD</h1>
      <div className="border" />
      <div className="item">
        <Input label="CARD NUMBER" />
      </div>
      <div className="centered">
        <div className="item">
          <Input label="EXPIRY DATE" />
        </div>
        <div className="item">
          <Input label="CCV/CVC" />
        </div>
      </div>
      <div className="item">
        <Input label="CARDHOLDER'S NAME" />
      </div>
      <div>
        <label className="checkbox label">
          <input type="checkbox" style={{ width: "auto" }} />
          SAVE CARD
        </label>
      </div>
      <div>
        <button type="submit">ADD CARD</button>
      </div>
    </form>
  );
}
