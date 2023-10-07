import React from "react";

import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Constants/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={styles.badge}>0</div>
    </button>
  );
};

export default HeaderCartButton;