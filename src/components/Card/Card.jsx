import React from "react";
import styles from "./Card.module.scss";

export const Card = ({ title, children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {title && <h2 className={styles.header}>{title}</h2>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
