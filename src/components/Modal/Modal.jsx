import React, { useEffect, useRef, useCallback } from "react";
import Portal from "./Portal";
import styles from "./Modal.module.scss";
import { Icon } from "../Icon/Icon";

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  disableOverlayClick = false,
}) => {
  const modalRef = useRef(null);

  const visibilityClass = isOpen ? styles.visible : "";

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  const handleOverlayClick = useCallback(
    (event) => {
      if (event.target === modalRef.current && !disableOverlayClick) {
        onClose();
      }
    },
    [disableOverlayClick, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className={`${styles.overlay} ${visibilityClass}`}
        onClick={handleOverlayClick}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <h3 id="modal-title">{title}</h3>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Kapat"
            >
              <Icon size="md" color="text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </Icon>
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
