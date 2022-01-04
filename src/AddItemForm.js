import React from "react";
import { Button, Form } from "react-bootstrap";
function AddItemForm() {
  return (
    <div className="formContainer">
      <div>
        <Form className="formBox">
          <Form.Control type="text" placeholder="Large text" />
          <div className="submitBtn">
            <Button>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddItemForm;
