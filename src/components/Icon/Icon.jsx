import React from "react";
import styles from "./Icon.module.scss";

export const Icon = ({
  size = "md",
  color = "default",
  children,
  ...props
}) => {
  const iconClasses = [
    styles.icon,
    size !== "md" &&
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    color !== "default" &&
      styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={iconClasses} {...props}>
      {children}
    </span>
  );
};

export const SettingsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
  </svg>
);
