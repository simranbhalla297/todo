import React from "react";

function Item({ item, removeItem, handleEditClick, id }) {
  return (
    <div className="listcontainer">
      <span>{item}</span>
      <div>
        <button onClick={() => removeItem(item)}>Delete</button>
        <button onClick={() => handleEditClick(item, id)}>Edit item</button>
      </div>
    </div>
  );
}

export default Item;
