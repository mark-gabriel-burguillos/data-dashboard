import React, { useState } from "react";

import Close from "../../Assets/Close.png";
import styles from "./SideBarOpen.module.css";

const SideBarClosed = ({ handleOnClickEvent }) => {
  return (
    <aside className={styles.SideBarOpen}>
      <div className={styles.SideBarOpen__Header}>
        <img
          src={Close}
          alt={"Close Sidebar"}
          onClick={() => handleOnClickEvent(false)}
          className={styles.SideBarOpen__Open}
        />
      </div>
    </aside>
  );
};

export default SideBarClosed;
