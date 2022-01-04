import React, { useState } from "react";
import { Button } from "react-bootstrap";
function AddItemForm({ addItem }) {
  const [item, setItem] = useState("");
  const handleSubmit = () => {
    addItem(item);
    setItem("");
  };

 
  return (
    <div className="formContainer">
      <div>
        <form className="formBox">
          <input
            type="text"
            placeholder="Large text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <div className="submitBtn">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
