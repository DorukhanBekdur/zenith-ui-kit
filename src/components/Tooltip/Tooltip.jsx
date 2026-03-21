import React, { useState } from "react";
import styles from "./Tooltip.module.scss";

export const Tooltip = ({ title, children, position = "top" }) => {
  const [active, setActive] = useState(false);

  const showTip = () => setActive(true);
  const hideTip = () => setActive(false);

  return (
    <div 
      className={styles.tooltipWrapper} 
      onMouseEnter={showTip} 
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`${styles.tooltipTip} ${styles[position]}`}>
          {title}
        </div>
      )}
    </div>
  );
};
