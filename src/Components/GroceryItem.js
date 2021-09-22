import { FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./GroceryItem.module.css";

const GroceryItem = (props) => {
  const editItemHandler = () => {
    props.action({ id: props.id, name: props.name, action: "edit" });
  };

  const removeItemHandler = () => {
    props.action({ id: props.id, action: "remove" });
  };

  return (
    <li className={classes.item}>
      <p>{props.name}</p>
      <div className={classes.actions}>
        <FaEdit onClick={editItemHandler} className={classes.edit} />
        <FaTrashAlt onClick={removeItemHandler} className={classes.remove} />
      </div>
    </li>
  );
};

export default GroceryItem;
