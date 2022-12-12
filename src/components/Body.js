import React, { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import CustomerList from "./CustomerList";
import styles from "../css/Body.module.css";


function Body() {
  const [name, setName] = useState('')
  function enteredNameHandler(data) {
    setName(data)
  }
  return (
    <div className={styles.container}>
      <CustomerDetails name={name} />
      <CustomerList enteredName={enteredNameHandler} />
    </div>
  );
}

export default Body;
