import React from "react";
import Item from "./Item";

const ItemList = ({ items,removeItem }) => {
  return (
    <div className="list">
      {items.map((item) => (
        <div key={item}>
          <Item  item={item} removeItem={removeItem} />
        </div>
      ))}
    </div>
  );
};

export { ItemList as default };
