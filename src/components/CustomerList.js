import React, { useState } from "react";
import styles from "../css/CustomerList.module.css";

function CustomerList(props) {
  const [state, setState] = useState(true);
  function closeHandler() {
    setState(!state);
  }
  function nameChangeHandler(e) {
    props.enteredName(e.target.value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>Customer List</div>
      <div className={styles.title}>
        <h5>Customer Name</h5>
        <h5>Active</h5>
      </div>
      {state && (
        <form action="" className={styles.form}>
          <div>
            <input
              type="text"
              onChange={nameChangeHandler}
              defaultValue="John Doe"
            />
            <input type="checkbox" />
          </div>
          <div>
            <input type="text" defaultValue="Austin Powers" />
            <input type="checkbox" />
          </div>
          <div>
            <input type="text" defaultValue="Tony Starks" />
            <input type="checkbox" />
          </div>
          <div>
            <input type="text" defaultValue="Kevin Flynn" />
            <input type="checkbox" />
          </div>
          <div>
            <input type="text" defaultValue="Korben Dallas" />
            <input type="checkbox" />
          </div>
        </form>
      )}
      <div className={styles.footer}>
        <button>Save</button>
        <button onClick={closeHandler}>{!state ? "Open" : "Close"}</button>
      </div>
    </div>
  );
}

export default CustomerList;
