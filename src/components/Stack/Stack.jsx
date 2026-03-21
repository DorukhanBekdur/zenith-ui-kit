import React from "react";
import styles from "./Stack.module.scss";

export const Stack = ({
  direction = "column",
  spacing = "md",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  children,
  className,
  ...props
}) => {
  const stackClasses = [
    styles.stack,
    styles[`direction-${direction}`],
    styles[`spacing-${spacing}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    wrap === "wrap" ? styles.wrap : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={stackClasses} {...props}>
      {children}
    </div>
  );
};
