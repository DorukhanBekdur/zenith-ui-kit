import React from "react";
import styles from "./Input.module.scss";

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  ...props
}) => {
  const inputClass = error
    ? `${styles.input} ${styles.errorInput}`
    : styles.input;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
