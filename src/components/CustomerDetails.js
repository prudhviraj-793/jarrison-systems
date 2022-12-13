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
              <input
                type="radio"
                className={styles.tabsRadio}
                name="tabs"
                id="tab1"
                checked
              />
              <label htmlFor="tab1" className={styles.tabsLabel}>
                Tab 1
              </label>
              <div className={styles.tabContent}>
                <form action="" className={styles.form}>
                  <div>
                    <label htmlFor="">Customer Name</label>
                    <input
                      type="text"
                      defaultValue={props.name}
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <label htmlFor="">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="1987-04-14"
                      name=""
                      id=""
                    />
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
              <input
                type="radio"
                className={styles.tabsRadio}
                name="tabs"
                id="tab2"
              />
              <label htmlFor="tab2" className={styles.tabsLabel}>
                Tab 2
              </label>
              <div className={styles.tabContent}>tab 2 cntent</div>
              <input
                type="radio"
                className={styles.tabsRadio}
                name="tabs"
                id="tab3"
              />
              <label htmlFor="tab3" className={styles.tabsLabel}>
                Tab 3
              </label>
              <div className={styles.tabContent}>tab 3 cntent</div>
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
