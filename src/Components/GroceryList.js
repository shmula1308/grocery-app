import classes from "./GroceryList.module.css";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
  const editItemHandler = (id) => {
    console.log(id);
  };
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return <GroceryItem key={item.id} name={item.name} editItem={editItemHandler} id={item.id} />;
      })}
    </ul>
  );
};

export default GroceryList;
