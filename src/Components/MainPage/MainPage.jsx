import React from "react";

import Card from "../Card/Card";
import { Input } from "../common/Input";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Card>
        <form className="mainForm">
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
            <button>ADD CARD</button>
          </div>
        </form>
      </Card>
    </>
  );
}
