import classes from "./GroceryList.module.css";
import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
  const actionHandler = (item) => {
    props.action(item);
  };

  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return <GroceryItem key={item.id} name={item.name} action={actionHandler} id={item.id} />;
      })}
    </ul>
  );
};

export default GroceryList;
