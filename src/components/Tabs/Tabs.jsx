import React, { useState } from "react";
import styles from "./Tabs.module.scss";

export const Tabs = ({ tabs, defaultTab, onChange, className }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onChange) onChange(tabId);
  };

  return (
    <div className={`${styles.tabsContainer} ${className || ""}`}>
      <div className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabTrigger} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <div 
          className={styles.indicator} 
          style={{ 
            width: `${100 / tabs.length}%`,
            transform: `translateX(${tabs.findIndex(t => t.id === activeTab) * 100}%)`
          }}
        />
      </div>
      <div className={styles.tabContent}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
