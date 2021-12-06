import React from "react";

import styles from "./SideBar.module.css";

const SideBar = ({ allTabs, selectedTab, handleOnClickAction }) => {
  const renderTabs = allTabs.map((tableauTable) => {
    return (
      <div
        className={`${
          selectedTab === tableauTable.Link
            ? styles.SideBar__Item_Activated
            : null
        } ${styles.SideBar__Item}`}
        onClick={() => handleOnClickAction(tableauTable.Link)}
      >
        {tableauTable.TabName}
      </div>
    );
  });

  return (
    <aside className={styles.SideBar}>
      <div className={styles.SideBar__Items}>{renderTabs}</div>
    </aside>
  );
};

export default SideBar;
