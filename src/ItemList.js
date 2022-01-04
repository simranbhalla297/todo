import React from "react";
import Item from "./Item";

const ItemList = ({ items, removeItem, handleEditClick }) => {
  return (
    <div className="list">
      {items.map((item, index) => (
        <div key={item}>
          <Item
            item={item}
            id={index}
            removeItem={removeItem}
            handleEditClick={handleEditClick}
          />
        </div>
      ))}
    </div>
  );
};

export { ItemList as default };
