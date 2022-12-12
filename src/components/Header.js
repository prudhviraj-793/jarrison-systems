import React from "react";
import styles from "../css/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <button className={styles.btn}>File</button>
        <div className={styles.dropdownContent}>
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
