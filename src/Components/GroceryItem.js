import { FaTrashAlt, FaEdit } from "react-icons/fa";
import classes from "./GroceryItem.module.css";

const GroceryItem = (props) => {
  const editItemHandler = () => {
    props.editItem(props.id);
  };

  return (
    <li className={classes.item}>
      <p>{props.name}</p>
      <div className={classes.actions}>
        <FaEdit onClick={editItemHandler} className={classes.edit} />
        <FaTrashAlt className={classes.remove} />
      </div>
    </li>
  );
};

export default GroceryItem;
