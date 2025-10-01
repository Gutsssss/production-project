import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(typeof classes);
  return (
    <div className={classes.btn}>
      <div>{count}</div>
      <button onClick={handleClick}>CLick</button>
    </div>
  );
};
