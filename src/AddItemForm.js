import React from "react";
import { Button } from "react-bootstrap";
function AddItemForm({
  addItem,
  isediting,
  handleEditClick,
  setUserInput,
  userInput,
}) {
  const handleSubmit = () => {
    addItem(userInput);
    setUserInput("");
  };

  return (
    <div className="formContainer">
      <div>
        <form className="formBox">
          <input
            type="text"
            placeholder="Large text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <div className="submitBtn">
            <div>
              {isediting ? (
                <Button onClick={handleSubmit}>submit</Button>
              ) : (
                <Button onClick={handleSubmit}>Edit</Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;
