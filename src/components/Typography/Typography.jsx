import React from "react";
import styles from "./Typography.module.scss";

export const Typography = ({
  variant = "body1",
  component,
  weight = "normal",
  align = "left",
  color = "main",
  children,
  className,
  ...props
}) => {
  const Component = component || (variant.startsWith("h") ? variant : "p");

  const typographyClasses = [
    styles.typography,
    styles[variant],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    styles[`color-${color}`],
    className
  ].filter(Boolean).join(" ");

  return (
    <Component className={typographyClasses} {...props}>
      {children}
    </Component>
  );
};
