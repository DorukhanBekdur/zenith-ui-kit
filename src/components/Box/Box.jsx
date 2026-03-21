import React from "react";
import styles from "./Box.module.scss";

export const Box = ({
  padding = 0,
  margin = 0,
  background,
  borderRadius,
  border,
  shadow,
  children,
  className,
  style,
  ...props
}) => {
  const boxClasses = [
    styles.box,
    padding && styles[`p-${padding}`],
    margin && styles[`m-${margin}`],
    background && styles[`bg-${background}`],
    borderRadius && styles[`rounded-${borderRadius}`],
    border && styles[`border-${border}`],
    shadow && styles[`shadow-${shadow}`],
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={boxClasses} style={style} {...props}>
      {children}
    </div>
  );
};
