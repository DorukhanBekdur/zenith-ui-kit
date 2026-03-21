import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography } from "../Typography/Typography";
import styles from "./Snackbar.module.scss";

export const Snackbar = ({
  open,
  onClose,
  message,
  variant = "info",
  autoHideDuration = 3000,
  ...props
}) => {
  useEffect(() => {
    if (open && autoHideDuration) {
      const timer = setTimeout(() => {
        onClose();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={`${styles.snackbar} ${styles[variant]}`} {...props}>
      <Typography variant="body2" color="white">{message}</Typography>
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
    </div>,
    document.body
  );
};
