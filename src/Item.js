import React from "react";
import { Button } from "react-bootstrap";
function Item({ item, removeItem, addItem, handleEditClick, id }) {
  return (
    <div className="listcontainer">
      
      <p style={{textTransform:'capitalize'}}>{item}</p>

      <div style={{ display: "flex" }}>
        <div>
          <Button onClick={() => removeItem(id)}>Delete</Button>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <Button onClick={() => handleEditClick(id)}>Edit item</Button>
        </div>
      </div>
    </div>
  );
}

export default Item;
