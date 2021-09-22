import classes from "./Alert.module.css";

const Alert = (props) => {
  const colorCode = props.message.color;
  const alertClasses = `${classes.alert} ${colorCode === "red" ? classes.alertUser : classes.success}`;
  return (
    <div className={alertClasses}>
      <p>{props.message.text}</p>
    </div>
  );
};

export default Alert;
