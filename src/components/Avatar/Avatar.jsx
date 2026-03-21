import React from "react";
import styles from "./Avatar.module.scss";

export const Avatar = ({
  src,
  name,
  size = "md",
  shape = "circle",
  className,
  ...props
}) => {
  const getInitials = (n) => {
    if (!n) return "";
    const parts = n.split(" ");
    return parts.length > 1
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0][0].toUpperCase();
  };

  return (
    <div 
      className={`${styles.avatar} ${styles[size]} ${styles[shape]} ${className || ""}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={name} className={styles.image} />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}
    </div>
  );
};

export const AvatarGroup = ({ children, max = 4, className }) => {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = childrenArray.slice(0, max);
  const extraCount = childrenArray.length - max;

  return (
    <div className={`${styles.avatarGroup} ${className || ""}`}>
      {visibleAvatars}
      {extraCount > 0 && (
        <div className={`${styles.avatar} ${styles.md} ${styles.circle} ${styles.extra}`}>
          +{extraCount}
        </div>
      )}
    </div>
  );
};
