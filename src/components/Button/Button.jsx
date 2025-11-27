import React from "react";
import styles from "./Button.module.scss";

export const Button = ({
  primary = false,
  label,
  disabled = false,
  onClick,
  ...props
}) => {
  const modeClass = primary ? styles.primary : styles.secondary;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${modeClass}`}
      {...props}
    >
      {label}
    </button>
  );
};
