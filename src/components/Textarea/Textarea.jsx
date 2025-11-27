import React from "react";
import styles from "./Textarea.module.scss";

export const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  ...props
}) => {
  const textareaClass = error
    ? `${styles.textarea} ${styles.errorTextarea}`
    : styles.textarea;

  return (
    <div className={styles.textareaWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        className={textareaClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
