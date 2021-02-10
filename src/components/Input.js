import React from "react";
import styles from "./Input.module.css";

/**
 * @type {React.FC<React.InputHTMLAttributes>}
 */
const Input = React.forwardRef((props, ref) => (
  <input className={styles.normal} {...props} ref={ref} />
));

export default Input;
