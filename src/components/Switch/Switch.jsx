import React from "react";
import styles from "./Switch.module.scss";

export const Switch = ({
  checked,
  onChange,
  disabled = false,
  label,
  size = "md",
  ...props
}) => {
  return (
    <label className={`${styles.switchContainer} ${styles[size]} ${disabled ? styles.disabled : ""}`}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.switchWrapper}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        <span className={styles.slider} />
      </div>
    </label>
  );
};
