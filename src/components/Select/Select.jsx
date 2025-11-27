import React, { useState, useRef, useEffect } from "react";
import styles from "./Select.module.scss";

export const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Make your choice",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  const handleOptionClick = (optionValue) => {
    if (onChange) {
      onChange({ target: { value: optionValue, name: props.name } });
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrapper} ref={selectRef}>
      {label && <label className={styles.label}>{label}</label>}

      <button
        type="button"
        className={
          isOpen
            ? `${styles.selectButton} ${styles.isOpen}`
            : styles.selectButton
        }
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{displayValue}</span>
        <span className={styles.arrowIcon}>&#9660;</span>
      </button>

      {isOpen && (
        <ul className={styles.optionsList} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={
                option.value === value
                  ? `${styles.optionItem} ${styles.selected}`
                  : styles.optionItem
              }
              onClick={() => handleOptionClick(option.value)}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
