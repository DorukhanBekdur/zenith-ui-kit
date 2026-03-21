import React from "react";
import styles from "./Button.module.scss";

export const Button = ({
  variant = "primary",
  size = "md",
  label,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  onClick,
  className,
  children,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && startIcon && <span className={styles.icon}>{startIcon}</span>}
      <span className={styles.label}>{label || children}</span>
      {!loading && endIcon && <span className={styles.icon}>{endIcon}</span>}
    </button>
  );
};
