import React from "react";
import styles from "./Progress.module.scss";

export const Progress = ({ value = 0, variant = "linear", size = "md", color = "primary" }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  if (variant === "circular") {
    return (
      <div className={`${styles.circular} ${styles[size]} ${styles[color]}`}>
        <svg className={styles.svg} viewBox="0 0 40 40">
          <circle
            className={styles.track}
            cx="20"
            cy="20"
            r={radius}
            strokeWidth="4"
            fill="none"
          />
          <circle
            className={styles.indicator}
            cx="20"
            cy="20"
            r={radius}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.label}>{Math.round(value)}%</span>
      </div>
    );
  }

  return (
    <div className={`${styles.linear} ${styles[size]} ${styles[color]}`}>
      <div className={styles.track}>
        <div 
          className={styles.indicator} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
};
