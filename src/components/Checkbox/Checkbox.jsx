import React from "react";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ label, checked, onChange, disabled, ...props }) => {
  const wrapperClass = disabled
    ? `${styles.checkboxWrapper} ${styles.disabled}`
    : styles.checkboxWrapper;

  return (
    <label className={wrapperClass}>
      <input
        type="checkbox"
        className={styles.hiddenCheckbox}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <div className={styles.visibleCheckbox} />

      {label}
    </label>
  );
};
