import { useState, useEffect } from "react";
import classes from "./GroceryForm.module.css";

const GroceryForm = (props) => {
  const { itemToEdit } = props;
  const [enteredText, setEnteredText] = useState("");

  useEffect(() => {
    if (!itemToEdit.name) {
      setEnteredText("");
      return;
    }
    setEnteredText(itemToEdit.name);
  }, [itemToEdit.name]);

  const itemSubmitHandler = (ev) => {
    ev.preventDefault();
    const inputText = enteredText.trim();

    if (!inputText.length) {
      props.alert({ text: "Please Enter A Value", color: "red" });
      return;
    }

    if (itemToEdit.name) {
      const item = {
        id: itemToEdit.id,
        name: enteredText,
      };

      props.itemAdded(item);
      props.alert({ text: "Item Has Been Edited", color: "green" });
      setEnteredText("");
      return;
    }

    const item = {
      id: (Math.random() * 100).toString(),
      name: enteredText,
    };

    props.itemAdded(item);

    props.alert({ text: "Item Added To The List", color: "green" });
    setEnteredText("");
  };

  const inputChangeHandler = (ev) => {
    setEnteredText(ev.target.value);
  };

  return (
    <form onSubmit={itemSubmitHandler}>
      <div className={classes.control}>
        <input value={enteredText} onChange={inputChangeHandler} type='text' placeholder='e.g. eggs' />
        <button type='submit'>{itemToEdit.name ? "Edit" : "Submit"}</button>
      </div>
    </form>
  );
};

export default GroceryForm;
