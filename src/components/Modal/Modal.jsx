import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";
import styles from "./Modal.module.scss";

export const Modal = ({
  open,
  onClose,
  title,
  children,
  footer,
  maxWidth = "sm",
  ...props
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div 
        className={`${styles.modal} ${styles[maxWidth]}`} 
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <div className={styles.header}>
          <Typography variant="h3">{title}</Typography>
          <button className={styles.closeButton} onClick={onClose}>&times;</button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
    document.body
  );
};
