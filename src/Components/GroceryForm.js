import { useRef } from "react";
import classes from "./GroceryForm.module.css";

const GroceryForm = (props) => {
  const inputRef = useRef();

  const itemSubmitHandler = (ev) => {
    ev.preventDefault();
    const inputText = inputRef.current.value.trim();

    if (!inputText.length) {
      props.alert({ text: "Please Enter Value", color: "red" });
      return;
    }
    const item = {
      id: (Math.random() * 100).toString(),
      name: inputText,
    };

    props.itemAdded(item);

    props.alert({ text: "Item Added To The List", color: "green" });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={itemSubmitHandler}>
      <div className={classes.control}>
        <input ref={inputRef} type='text' placeholder='e.g. eggs' />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default GroceryForm;
