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
    setGroceryItems((prevItems) => {
      return [...prevItems, item];
    });
  };
  return (
    <Card>
      {alertMessage.text && <Alert message={alertMessage} />}
      <h2 className='app-title'>Grocery Bud</h2>
      <GroceryForm itemAdded={addItemHandler} alert={setAlertMessage} />
      <GroceryList items={groceryItems} />
      {groceryItems.length > 0 && <button className='btn'>Clear Items</button>}
    </Card>
  );
}

export default App;
