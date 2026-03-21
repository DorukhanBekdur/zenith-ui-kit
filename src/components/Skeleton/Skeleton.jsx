import React from "react";
import styles from "./Skeleton.module.scss";

export const Skeleton = ({
  variant = "text",
  width,
  height,
  borderRadius,
  className,
  ...props
}) => {
  const customStyles = {
    width,
    height,
    borderRadius: variant === "circle" ? "50%" : borderRadius,
  };

  return (
    <div 
      className={`${styles.skeleton} ${styles[variant]} ${className || ""}`}
      style={customStyles}
      {...props}
    />
  );
};
