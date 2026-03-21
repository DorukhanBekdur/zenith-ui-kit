import React, { useState } from "react";
import styles from "./Accordion.module.scss";

export const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <button className={styles.header} onClick={onClick}>
        <span className={styles.title}>{title}</span>
        <svg 
          className={styles.chevron} 
          viewBox="0 0 24 24" 
          width="20" 
          height="20"
        >
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndices, setOpenIndices] = useState([0]);

  const handleItemClick = (index) => {
    if (allowMultiple) {
      setOpenIndices(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices(prev => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndices.includes(index)}
          onClick={() => handleItemClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
