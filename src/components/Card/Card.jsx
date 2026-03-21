import React from "react";
import styles from "./Card.module.scss";

export const Card = ({
  title,
  subtitle,
  children,
  variant = "elevated",
  padding = "md",
  className,
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
