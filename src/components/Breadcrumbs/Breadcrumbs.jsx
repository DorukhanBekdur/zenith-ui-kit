import React from "react";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = ({ items, separator = "/", className }) => {
  return (
    <nav className={`${styles.breadcrumbs} ${className || ""}`} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.href ? (
              <a href={item.href} className={styles.link}>{item.label}</a>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className={styles.separator}>{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
