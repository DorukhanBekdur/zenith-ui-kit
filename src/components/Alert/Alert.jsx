import React from "react";
import styles from "./Alert.module.scss";

export const Alert = ({ type = "info", children, ...props }) => {
  const alertClass = `${styles.alert} ${styles[type]}`;

  return (
    <div className={alertClass} role="alert" {...props}>
      {children}
    </div>
  );
};
