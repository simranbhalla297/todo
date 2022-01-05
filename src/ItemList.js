import React from "react";
import Item from "./Item";

const ItemList = ({ items, removeItem, handleEditClick }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id}>
          <Item
            item={item.name}
            id={item.id}
            removeItem={removeItem}
            handleEditClick={handleEditClick}
          />
        </div>
      ))}
    </div>
  );
};

export { ItemList as default };
