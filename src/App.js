import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [isediting, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState("");
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  function handleEditClick(editItem, id) {
    // set editing to true
    setIsEditing(true);
    console.log(editItem);
    setUserInput(editItem);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    } else {
      setItems("no items");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  console.log(items);
  return (
    <div className="container">
      To Do items
      <AddItemForm
        addItem={addItem}
        isediting={isediting}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <ItemList
        items={items}
        removeItem={removeItem}
        handleEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;
