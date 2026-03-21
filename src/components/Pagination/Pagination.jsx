import React from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({ total, current, onChange, className }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className={`${styles.pagination} ${className || ""}`}>
      <button 
        className={styles.pageBtn} 
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
      >
        Prev
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageBtn} ${current === page ? styles.active : ""}`}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}

      <button 
        className={styles.pageBtn} 
        disabled={current === total}
        onClick={() => onChange(current + 1)}
      >
        Next
      </button>
    </div>
  );
};
