import React from "react";
import styles from "./Selection.module.scss";

export const Checkbox = ({ label, checked, onChange, disabled, ...props }) => (
  <label className={`${styles.selectionContainer} ${disabled ? styles.disabled : ""}`}>
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.hiddenInput}
        {...props}
      />
      <div className={`${styles.styledCheckbox} ${checked ? styles.checked : ""}`}>
        {checked && <svg viewBox="0 0 24 24" className={styles.icon}><polyline points="20 6 9 17 4 12" /></svg>}
      </div>
    </div>
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export const Radio = ({ label, name, value, checked, onChange, disabled, ...props }) => (
  <label className={`${styles.selectionContainer} ${disabled ? styles.disabled : ""}`}>
    <div className={styles.radioWrapper}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.hiddenInput}
        {...props}
      />
      <div className={`${styles.styledRadio} ${checked ? styles.checked : ""}`}>
        <div className={styles.radioDot} />
      </div>
    </div>
    {label && <span className={styles.label}>{label}</span>}
  </label>
);
