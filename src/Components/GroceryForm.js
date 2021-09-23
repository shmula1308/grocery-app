import classes from "./GroceryForm.module.css";

const GroceryForm = (props) => {
  const itemSubmitHandler = (ev) => {
    ev.preventDefault();
    const inputText = props.inputText.trim();

    if (!inputText.length) {
      props.alert({ text: "Please Enter A Value", color: "red" });
      return;
    }

    if (props.isEditing) {
      const item = {
        id: props.itemToEditId,
        name: props.inputText,
      };

      props.itemAdded(item);
      props.alert({ text: "Item Has Been Edited", color: "green" });
      props.setInputText("");
      props.setIsEditing(false);
      props.setItemToEditId(null);
      return;
    }

    const item = {
      id: (Math.random() * 100).toString(),
      name: props.inputText,
    };

    props.itemAdded(item);

    props.alert({ text: "Item Added To The List", color: "green" });
    props.setInputText("");
  };

  const inputChangeHandler = (ev) => {
    props.setInputText(ev.target.value);
  };

  return (
    <form onSubmit={itemSubmitHandler}>
      <div className={classes.control}>
        <input value={props.inputText} onChange={inputChangeHandler} type='text' placeholder='e.g. eggs' />
        <button type='submit'>{props.isEditing ? "Edit" : "Submit"}</button>
      </div>
    </form>
  );
};

export default GroceryForm;
