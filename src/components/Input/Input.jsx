import React from "react";
import styles from "./Input.module.scss";

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  variant = "outlined",
  size = "md",
  className,
  ...props
}) => {
  const containerClasses = [
    styles.inputWrapper,
    styles[size],
    className
  ].filter(Boolean).join(" ");

  const inputClasses = [
    styles.input,
    styles[variant],
    error ? styles.errorInput : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
