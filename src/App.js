import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [isediting, setIsEditing] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = (item) => {
    if (!userInput) {
      console.log("please enter data");
    } else if (userInput && !isediting) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: item };
          }
          return elem;
        })
      );
      setIsEditing(true);
      setUserInput("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: item,
      };
      setItems([...items, allInputData]);
    }
  };

  const removeItem = (index) => {
    console.log(index);
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateditems);
  };

  function handleEditClick(id) {
    // set editing to true

    console.log(id);
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItem);
    setIsEditing(false);
    setUserInput(newEditItem.name);
    setIsEditItem(id);
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
      <div className="heading">
        {" "}
        <h2> Add your list here....</h2>
      </div>

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
