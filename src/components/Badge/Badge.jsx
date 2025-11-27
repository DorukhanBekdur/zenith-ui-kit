import React from "react";
import styles from "./Badge.module.scss";

export const Badge = ({ variant = "default", children, ...props }) => {
  const badgeClasses = [styles.badge, styles[variant]]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};
