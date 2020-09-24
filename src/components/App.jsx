import React, { useState } from "react";
import Input from "./Input";
import ToDoItem from "./ToDoItem";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      if (inputText !== "")
        return [...prevItems, inputText];
      else
        return [...prevItems];
    });
  }

  function deleteItem(id) {
    setItems(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function clearList() {
    setItems(() => {
      return [];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input
        addItem={addItem}
        clearList={clearList}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              checked={deleteItem} />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
