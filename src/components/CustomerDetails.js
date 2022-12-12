import React, { useState } from "react";
import styles from "../css/CustomerDetails.module.css";

function CustomerDetails(props) {
  const [state, setState] = useState(true);
  function closeHandler() {
    setState(!state);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>Customer Details</div>
      <div className={styles.body}>
        <table>
          <thead>
            <tr className={styles.titles}>
              <th>ID</th>
              <th>Customer</th>
              <th>SLA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tony Stark</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kevin Flynn</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Deadpool</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        {state && (
          <div className={styles.body2}>
            <div className={styles.tabs}>
              <button>Tab 1</button>
              <button>Tab 2</button>
              <button>Tab 3</button>
            </div>
            <form action="" className={styles.form}>
              <div>
                <label htmlFor="">Customer Name</label>
                <input type="text" defaultValue={props.name} name="" id="" />
              </div>
              <div>
                <label htmlFor="">Date of Birth</label>
                <input type="date" defaultValue="1987-04-14" name="" id="" />
              </div>
              <div>
                <label htmlFor="">SLA Level</label>
                <input type="number" defaultValue="4" name="" id="" />
              </div>
            </form>
            <div className={styles.active}>
              <label htmlFor="">Active</label>
              <input type="checkbox" />
            </div>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <div>
          <button>Save</button>
          <button onClick={closeHandler}>{!state ? "Open" : "Close"}</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
