import React, { useState } from "react";

import { Input } from "../common/Input";

export default function Form({ children }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [name, setName] = useState("");

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
          <Input label="EXPIRY DATE" placeholder="MM/YY" />
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
        <button>ADD CARD</button>
      </div>
    </form>
  );
}
