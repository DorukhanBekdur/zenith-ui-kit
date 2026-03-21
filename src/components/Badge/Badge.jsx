import React from "react";
import styles from "./Badge.module.scss";

export const Badge = ({
  variant = "neutral",
  pill = false,
  children,
  className,
  ...props
}) => {
  const badgeClasses = [
    styles.badge,
    styles[variant],
    pill ? styles.pill : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};
