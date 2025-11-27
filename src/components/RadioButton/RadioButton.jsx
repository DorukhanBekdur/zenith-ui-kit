import React from "react";
import styles from "./RadioButton.module.scss";

export const RadioButton = ({
  label,
  checked,
  onChange,
  disabled,
  name,
  value,
  ...props
}) => {
  const wrapperClass = disabled
    ? `${styles.radioWrapper} ${styles.disabled}`
    : styles.radioWrapper;

  return (
    <label className={wrapperClass}>
      <input
        type="radio"
        className={styles.hiddenRadio}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
        {...props}
      />
      <div className={styles.visibleRadio} />
      {label}
    </label>
  );
};
