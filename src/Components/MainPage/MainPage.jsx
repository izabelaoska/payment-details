import React from "react";

import Card from "../Card/Card";
import { Input } from "../common/Input";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <Card>
        <form className="mainForm">
          <h1>Add new card</h1>
          <div className="border" />
          <div className="item">
            <Input label="Card number" />
          </div>
          <div className="centered">
            <div className="item">
              <Input label="Expiry date" />
            </div>
            <div className="item">
              <Input label="CCV/CVC" />
            </div>
          </div>
          <div className="item">
            <Input label="Cardholder's name" />
          </div>
          <div>
            <label className="checkbox label">
              <input type="checkbox" style={{ width: "auto" }} />
              Save card
            </label>
          </div>
          <div>
            <button>Add card</button>
          </div>
        </form>
      </Card>
    </>
  );
}
