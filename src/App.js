import { useState, useEffect } from "react";
import "./App.css";
import Card from "./UI/Card";
import GroceryForm from "./Components/GroceryForm";
import Alert from "./Components/Alert";
import GroceryList from "./Components/GroceryList";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [alertMessage, setAlertMessage] = useState({
    text: "",
    color: null,
  });

  const [enteredText, setEnteredText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEditId, setItemToEditId] = useState(null);

  useEffect(() => {
    if (!alertMessage.text) {
      return;
    }
    let timer = setTimeout(() => {
      setAlertMessage({
        text: "",
        color: null,
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [alertMessage]);

  const addItemHandler = (item) => {
    const existingItemIndex = groceryItems.findIndex((groceryItem) => groceryItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedItems = [...groceryItems];
      updatedItems[existingItemIndex] = item;
      setGroceryItems(updatedItems);
      return;
    }

    setGroceryItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const actionHandler = (item) => {
    if (item.action === "edit") {
      setIsEditing(true);
      setEnteredText(item.name);
      setItemToEditId(item.id);
    }

    if (item.action === "remove") {
      const updatedGroceries = groceryItems.filter((groceryItem) => groceryItem.id !== item.id);
      setGroceryItems(updatedGroceries);
      setAlertMessage({ text: "Item Removed", color: "red" });
    }
  };

  const clearListHandler = () => {
    setGroceryItems([]);
    setEnteredText("");
    setAlertMessage({ text: "Empty List", color: "red" });
  };

  return (
    <Card>
      {alertMessage.text && <Alert message={alertMessage} />}
      <h2 className='app-title'>Grocery Bud</h2>
      <GroceryForm
        itemAdded={addItemHandler}
        alert={setAlertMessage}
        inputText={enteredText}
        setInputText={setEnteredText}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        itemToEditId={itemToEditId}
        setItemToEditId={setItemToEditId}
      />
      <GroceryList items={groceryItems} action={actionHandler} />
      {groceryItems.length > 0 && (
        <button onClick={clearListHandler} className='btn'>
          Clear Items
        </button>
      )}
    </Card>
  );
}

export default App;
